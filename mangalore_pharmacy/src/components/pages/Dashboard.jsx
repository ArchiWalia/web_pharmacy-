import React from "react";
import { IoBag } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Dashboard = () => {
  const stockData = [
    { name: 'Product 1', description: 'Description 1', status: 'In Stock', price: '$10', qty: 100 },
    { name: 'Product 2', description: 'Description 2', status: 'Out of Stock', price: '$15', qty: 50 },
    { name: 'Product 3', description: 'Description 3', status: 'In Stock', price: '$20', qty: 200 },
    { name: 'Product 4', description: 'Description 4', status: 'In Stock', price: '$25', qty: 75 },
  ];

  return (
    <div>
      <br />
      <div className="flex justify-between text-black border-b-2 border-gray-300 p-4">
        <div className="flex items-center">
          <div className="font-bold mr-4">
            <p>Total Stock Sold</p>
            <p>50</p>
          </div>
          <div className="text-blue-500 text-3xl">
            <IoBag />
          </div>
        </div>
        <div className="flex items-center">
          <div className="font-bold mr-4">
            <p>Total Stock Sold</p>
            <p>50</p>
          </div>
          <div className="text-blue-500 text-3xl">
            <FaRegFileAlt />
          </div>
        </div>
        <div className="flex items-center">
          <div className="font-bold mr-4">
            <p>Total Stock Sold</p>
            <p>50</p>
          </div>
          <div className="text-blue-500 text-3xl">
            <FaCartArrowDown />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="mb-4">
          <p className="text-center">Recent Added Products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border-2 rounded-[20px] text-black border-gray-300 p-4">
              <div className="text-center bg-transparent">
                <img className="w-[50%] mx-auto" src="https://m.media-amazon.com/images/I/61SAm7H4xGL.jpg" alt="" />
                <hr />
              </div>
              <h1 className="text-xl font-bold mt-2 text-center">Vitamin</h1>
              <p className="mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corporis.</p>
              <div className="flex justify-between mt-2">
                <p className="text-primary-color">NS44555</p>
                <p>QTY:20</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h1>Stock List</h1>

        </div>
        <br />
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-blue-300  px-4 py-2">Product Name</th>
              <th className="border border-blue-300 px-4 py-2">Description</th>
              <th className="border border-blue-300 px-4 py-2">Status</th>
              <th className="border border-blue-300 px-4 py-2">Price</th>
              <th className="border border-blue-300 px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="border border-blue-300 px-4 py-2">{product.name}</td>
                <td className="border border-blue-300 px-4 py-2">{product.description}</td>
                <td className="border border-blue-300 px-4 py-2">{product.status}</td>
                <td className="border border-blue-300 px-4 py-2">{product.price}</td>
                <td className="border border-blue-300 px-4 py-2">{product.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Dashboard;
