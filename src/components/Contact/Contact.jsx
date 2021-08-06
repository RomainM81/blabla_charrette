import{ useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


import './Contact.css'

const Contact = () => {

  const [fox, setFox] = useState()

    useEffect(() => {
        fetch("https://randomfox.ca/floof/")
        .then(response => response.json())
        .then(data => setFox(data))
    }, [])

    const [abdou, setAbdou] = useState(false)

    return (

        <div className="contact">
            <h2>Pour plus d'information,</h2>
            <h2>contactez Abdou,</h2>
            <h2>il est sur le retour... &#127939; <span className='contact-button' onClick={() => setAbdou(true)}>&#128660;</span></h2>

            <img src="https://media.giphy.com/media/sUt8uDIusftiE/giphy.gif" alt="" />
            <img src="https://media.giphy.com/media/ntxtuZ2NDW2uQ/giphy.gif" alt="" />
            <img src="https://media.giphy.com/media/RYjnzPS8u0jAs/giphy.gif" alt="" />

            <h3>La Bise les Gueux !</h3>

             {abdou ? <img src={fox.image} alt="abdou fetch" /> : null }
        </div>


    )
}



export default Contact;