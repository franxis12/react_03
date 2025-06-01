import React from "react";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submited, setSubmited] = useState(false)
    const [submissions, setSubmissions] = useState([]);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const sendMessage = (event) => {
        event.preventDefault();
        setSubmissions((prev) => [...prev, formData]);
        setFormData({ name: "", email: "", message: "" });

        setSubmited(true)

       
    }

    return (
        <>

        {submissions.map((item, index) => (
        <div key={index} className="bg-light shadow rounded-4 p-3 m-2">
          <h3>{item.name}</h3>
          <h5>{item.email}</h5>
          <p>{item.message}</p>
        </div>
      ))}
    
        <form 
        onSubmit={sendMessage}
        className="form border p-3 rounded-4 d-flex flex-column shadow bg-white">
            <h2 className="fw-bold">Contact</h2>
            <label htmlFor="name" className="ms-2">Name:</label>
            <input 
                name="name" 
                type="text"
                className="form-control-plaintext bg-light border px-2 botder-2 rounded-3 mb-2 "
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
            /> 

            <label htmlFor="email" className="ms-2">Email:</label>
            <input 
                name="email" 
                type="text"
                className="form-control-plaintext bg-light border px-2 rounded-3 mb-2"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
            />

            <label htmlFor="message" className="ms-2">Message:</label>
            <textarea
                name="message" 
                type="text"
                className="bg-light border px-2 rounded-3 mb-2 form-control-plaintext"
                placeholder="Enter your message"
                minLength={10}
                value={formData.message}
                onChange={handleChange}
            
            />
            <button type="submit" className="btn btn-primary rounded-3">Submit</button>
            
            
        </form>
        </>
    )
}

export default ContactForm;