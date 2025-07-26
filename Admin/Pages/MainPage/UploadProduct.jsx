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

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
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
      await axios.post("http://localhost:5000/api/products", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product uploaded");
    } catch (err) {
      toast.error("Upload failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input type="text" name="title" placeholder="Title" onChange={handleChange} className="w-full border p-2 rounded" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="file" name="image" onChange={handleChange} className="w-full border p-2 rounded" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">Upload</button>
    </form>
  );
};

export default UploadProduct;
