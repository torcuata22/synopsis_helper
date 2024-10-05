import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import SynopsisForm from './SynopsisForm';

const Welcome = () =>{

    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    const handleFormSubmit = async (formData) => {
            try {
                const response = await fetch('/synopsis', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // CSRF token
                    },
                    body: JSON.stringify({ synopsis: formData }) // Wrap the form data in an object
                });
    
                if (response.ok) {
                    const data = await response.json();
                    console.log('Synopsis successfully created:', data); 
                    console.log('Form submitted successfully');
                    // open pdf for review:
                    window.open(data.pdf_url, '_blank'); 
                } else {
                    const errorData = await response.json();
                    console.error('Failed to submit synopsis:', errorData.errors);
                }
            } catch (error) {
                console.error('Error submitting synopsis:', error);
            }
        };
        
    

    return (
        <div className="container">
            <h1 className='text-center'> Welcome to Synopsis Helper </h1>
            <h3 className='text-center'>To generate your synopsis, please fill out the form following the guidelines below</h3>
            <br></br>
            <p className="text-justified">Title: Enter the title of the book</p>
            <p>Characters: This should be a list of the main characters in your story</p>
            <p>Main Conflict: This should be a description of the main conflict in your story</p>
            <p>Paragraph 1: Introduce the main character, the main conflict and the world the story takes place in</p>
            <p>Paragraph 2: Explalin the major plot turns in the story and how they affect the main characters</p>
            <p>Paragraph 3: Explain how the conflicts are resolved</p>
            <p>Email: enter your email address to receive a pdf copy of your synopsis</p>

            <button onClick={handleButtonClick} className="btn btn-secondary">
                {showForm ? 'Hide Form' : 'Show Form'}
            </button>
            {showForm && <SynopsisForm onSubmit={handleFormSubmit} method='POST' />} {/* Render the form conditionally */}
          
        </div>
    )
};

const root = ReactDom.createRoot(document.getElementById('welcome'));
 root.render(
   
        <Welcome />

    
);
 export default Welcome