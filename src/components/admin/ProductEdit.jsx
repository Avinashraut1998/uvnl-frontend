import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../constant";

const ProductEdit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    details: "",
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`${BASE_URL}/admin/product/${productId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Category updated successfully!");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${BASE_URL}/admin/product/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const productData = response.data.data.product;
        setProduct(productData);
        setFormData({
          details: productData.details || "",
          description: productData.description || "",
        });
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <h1 className="text-title-lg mb-4">Product Details</h1>
      <div className="p-6 bg-white dark:bg-black shadow-md rounded-md dark:bg-gray-800">
        <p className="text-gray-600 mb-2 flex items-center gap-2">
          <span className="font-bold">Name :</span>
          {product.name}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white font-bold">
              Details:
              <input
                type="text"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </label>
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white font-bold">
              Description:
              <textarea
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default ProductEdit;
