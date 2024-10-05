import React, { useState } from 'react';
import ReactDom from 'react-dom';


const SynopsisForm = () =>{
    const [title, setTitle] = useState('');
    const [characters, setCharacters] = useState('');
    const [mainConflict, setMainConflict] = useState('');
    const [paragraph1, setParagraph1] = useState('');
    const [paragraph2, setParagraph2] = useState('');
    const [paragraph3, setParagraph3] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !characters || !mainConflict || !paragraph1 || !paragraph2 || !paragraph3 || !email) {
            alert('Please fill out all fields');
            return;
        }

        const formData = {
            title: title,
            characters: characters,
            main_conflict: mainConflict,
            paragraph1: paragraph1,
            paragraph2: paragraph2,
            paragraph3: paragraph3,
            email: email
        };
        console.log(formData);
        onSubmit(formData);
    }

    return (
        <div className="container">
            <h4 className="text-center mt-5"> Create your Synopsis </h4>
            <form className="form-group">
                <label className="form-label"> Title: </label>
                <input className="form-control" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
       
                <label className="form-label"> Characters: </label>
                <input className="form-control" type="text" name="characters" value={characters} onChange={e => setCharacters(e.target.value)} />
                
                <label className="form-label"> Main Conflict: </label>
                <input className="form-control" type="text" name="mainConflict" value={mainConflict} onChange={e => setMainConflict(e.target.value)} />
                
                <label className="form-label"> Paragraph 1: </label>
                <input className="form-control" type="text" name="paragraph1" value={paragraph1} onChange={e => setParagraph1(e.target.value)} />
                
                <label className="form-label"> Paragraph 2: </label>
                <input className="form-control" type="text" name="paragraph2" value={paragraph2} onChange={e => setParagraph2(e.target.value)} />
                
                <label className="form-label"> Paragraph 3: </label>
                <input className="form-control" type="text" name="paragraph3" value={paragraph3} onChange={e => setParagraph3(e.target.value)} />
                
                <label className="form-label"> Email: </label>
                <input className="form-control" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                
                <input className="btn btn-lg btn-primary mt-5" type="submit" value="Submit" />
            </form> 

            </div>
    );
}
export default SynopsisForm;