import React, { useState } from 'react';

const Form2 = () => {
    const initialFormData = {
        name: '',
        email: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleBack = () => {
        setIsSubmitted(false);
        setFormData(initialFormData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const formStyle = {
        backgroundColor: '#f7f7f7',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        margin: '0 auto',
    };

    const groupStyle = {
        marginBottom: '15px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '5px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const textareaStyle = {
        resize: 'vertical',
        height: '100px',
    };

    const buttonStyle = {
        backgroundColor: '#0099cc',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontWeight: 'bold',
    };

    return (
        <div style={formStyle}>
            <h2>Contact Form</h2>
            {isSubmitted ? (
                <div>
                    <p>Submitted Data:</p>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Message:</strong> {formData.message}</p>
                    <button onClick={handleBack} style={buttonStyle}>
                        Back
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={groupStyle}>
                        <label style={labelStyle}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div style={groupStyle}>
                        <label style={labelStyle}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div style={groupStyle}>
                        <label style={labelStyle}>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, ...textareaStyle }}
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default Form2;
