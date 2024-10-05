import React from 'react';
import ReactDom from 'react-dom';

const Welcome = () =>{
    return (
        <div className="container">
            <h1> Welcome to Synopsis Helper </h1>
            <h3>To generate your synopsis, please fill out the form following the guidelines below</h3>
            <br></br>
            <p>Title: Enter the title of the book</p>
            <p>Characters: This should be a list of the main characters in your story</p>
            <p>Main Conflict: This should be a description of the main conflict in your story</p>
            <p>Paragraph 1: Introduce the main character, the main conflict and the world the story takes place in</p>
            <p>Paragraph 2: Explalin the major plot turns in the story and how they affect the main characters</p>
            <p>Paragraph 3: Explain how the conflicts are resolved</p>
            <p>Email: enter your email address to receive a pdf copy of your synopsis</p>
        </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(<Welcome />, document.getElementById('welcome'));
})
 export default Welcome