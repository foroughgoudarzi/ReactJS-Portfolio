import React, { useState } from "react";

function ContactForm() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
    alert(`Thank you for contacting me ${formData.name}. I will get back to you as soon as possible.`);
    setFormData({
      name: '',
      email: '',
      comment: ''
    });
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea2">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
            placeholder="Enter email"
            value={formData.email}
            name="email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We will never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Comment:</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={handleInputChange}
            value={formData.comment}
            name="comment"
            rows="5"
          ></textarea>
        </div>

        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-primary mt-2 mb-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
