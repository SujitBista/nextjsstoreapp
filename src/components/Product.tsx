'use client';

import { useState } from 'react';

function Product() {
  const [formData, setFormData] = useState({
    name: '',
    qty: '',
    price: ''
  });
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent ) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/createDocument', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data submitted successfully!");
        // Handle success (e.g., reset form or show a success message)
        setFormData({ name: '', qty: '', price: '' });
      } else {
        console.error("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Qty:
          <input
            type="text"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Product;
