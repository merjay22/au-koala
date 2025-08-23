import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UploadProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const [products, setProducts] = useState([]); // ✅ Track uploaded products

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (
        file &&
        !["image/jpeg", "image/png", "image/jpg"].includes(file.type)
      ) {
        toast.error("Only JPG, JPEG, or PNG files are allowed.");
        return;
      }
      setFormData({ ...formData, image: file });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      const res = await axios.post("https://renderbackend-z5e7.onrender.com/api/products", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("✅ Product uploaded successfully");

      // ✅ Append uploaded product to list
      setProducts((prev) => [...prev, res.data]);

      // ✅ Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        image: null,
      });
    } catch (err) {
      console.error(err);
      toast.error("❌ Upload failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="file"
          name="image"
          accept=".jpg,.jpeg,.png"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Upload
        </button>
      </form>

      {/* Uploaded Products Preview */}
      {products.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Uploaded Products</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {products.map((product, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="text-green-700 font-semibold">₹{product.price}</p>
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="mt-2 h-40 w-full object-cover rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadProduct;
