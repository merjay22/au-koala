import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Backend/user.js";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// ✅ Register (hashes password for all users)
export const register = async (req, res) => {
  try {
    const { name, email, mobile, password, isAdmin } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
      isAdmin: isAdmin || false,
    });

    await newUser.save();

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Login (handles both admin and regular users)
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const ADMIN_EMAIL = "jaymer45@gmail.com";
    const ADMIN_PASSWORD = "jay@123456";

    let user = await User.findOne({ email });

    // ✅ Admin login logic
    if (email === ADMIN_EMAIL) {
      // Auto-create admin if not exists
      if (!user) {
        const hashedAdminPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
        user = new User({
          name: "Super Admin",
          email: ADMIN_EMAIL,
          mobile: "9999999999",
          password: hashedAdminPassword,
          isAdmin: true,
        });
        await user.save();
      }

      // Compare password (hashed)
      const isAdminMatch = await bcrypt.compare(password, user.password);
      if (!isAdminMatch) {
        return res.status(400).json({ error: "Incorrect admin password" });
      }
    } else {
      // ✅ Regular user login logic
      if (!user) return res.status(400).json({ error: "Login failed: User not found" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ error: "Login failed: Invalid credentials" });
    }

    // ✅ Create token for any valid user
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: user.isAdmin ? "Admin login successful!" : "Login successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed: Server error" });
  }
};
