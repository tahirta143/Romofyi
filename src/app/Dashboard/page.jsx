"use client";
import React, { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("add");
  const [products, setProducts] = useState([]); // store products from backend

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <button
          onClick={() => setActiveTab("add")}
          className={`p-2 rounded mb-2 text-left ${
            activeTab === "add" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          ➕ Add Product
        </button>
        <button
          onClick={() => setActiveTab("update")}
          className={`p-2 rounded mb-2 text-left ${
            activeTab === "update" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          ✏️ Update Product
        </button>
        <button
          onClick={() => setActiveTab("delete")}
          className={`p-2 rounded mb-2 text-left ${
            activeTab === "delete" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          🗑️ Delete Product
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {activeTab === "add" && <AddProduct setProducts={setProducts} />}
        {activeTab === "update" && <UpdateProduct setProducts={setProducts} />}
        {activeTab === "delete" && <DeleteProduct setProducts={setProducts} />}
      </div>
    </div>
  );
}

/* ---------------- Add Product ---------------- */
function AddProduct({ setProducts }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/product", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      data.image = data.image
        ? `http://localhost:5000/${data.image.replace(/\\/g, "/")}`
        : null;

      setProducts((prev) => [...prev, data]);
      alert("✅ Product Added!");
      setTitle("");
      setPrice("");
      setImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

/* ---------------- Update Product ---------------- */
function UpdateProduct({ setProducts }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title) formData.append("title", title);
    if (price) formData.append("price", price);
    if (image) formData.append("image", image);

    try {
      const res = await fetch(`http://localhost:5000/api/product/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      console.log("Updated product:", data);

      let fixedImage = data.image
        ? `http://localhost:5000/${data.image.replace(/\\/g, "/")}`
        : null;

      setProducts((prev) =>
        prev.map((p) =>
          p._id === id ? { ...p, ...data, image: fixedImage ?? p.image } : p
        )
      );

      alert("✏️ Product Updated!");
      setId("");
      setTitle("");
      setPrice("");
      setImage(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Update Product</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="New Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="New Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

/* ---------------- Delete Product ---------------- */
function DeleteProduct({ setProducts }) {
  const [id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:5000/api/product/${id}`, {
        method: "DELETE",
      });

      setProducts((prev) => prev.filter((p) => p._id !== id));
      alert("🗑️ Product Deleted!");
      setId("");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Delete Product</h2>
      <form onSubmit={handleDelete} className="space-y-4">
        <input
          type="text"
          placeholder="Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete Product
        </button>
      </form>
    </div>
  );
}
