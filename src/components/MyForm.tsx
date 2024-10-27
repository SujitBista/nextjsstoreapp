// components/MyForm.js
import React from 'react';

const MyForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Qty:</label>
          <input type="text" id="qty" name="qty" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
