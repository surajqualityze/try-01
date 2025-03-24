// ApiFetch.js
'use client';
import React from 'react';
import ApiService from './ApiService'; // Import the ApiService component

const ApiFetch = () => {
  const apiUrl = 'https://fakestoreapi.com/products'; // Define your API URL
  const { data, loading, error } = ApiService({ apiUrl }); // Use the ApiService

  if (loading) {
    return <div>Loading...</div>; // Display a loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">API Data</h1>

      {/* Check if data exists and map through it to display each item */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data && data.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={item.image} alt={item.title} className="mb-4 w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-gray-900 font-bold mt-2">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiFetch;