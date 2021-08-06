import { useState } from 'react';
import { Link } from 'react-router-dom';

import parchemin from '../../assets/paper.jpg';
import './Trajet.css';



function Trajet () {
    const [showDetail, setShowDetail]= useState({
        depart:"",
        arrive:"",
        transport:"",
        date:"",
        number:"",
    })

    const handeChange= (e) => {
        setShowDetail({...showDetail, [e.target.name]: e.target.value })
    }
    return (
    <form className="formContainer">
        <img src={parchemin} alt="parchemin" />
        <div className="formContent">
                <h2>Où tu veux glairer?</h2>
            <div className="formItems">
            <select className="input" name="depart" onChange={(e) => handeChange(e)}>
                <option disabled selected>tu par dou?</option>
                <option>Kaamelot</option>
                <option>Fort Boyard</option>
                <option>Carmelid</option>
                <option>Royaume de Logre</option>
                <option>Versailles</option>
                <option>Lancaster</option>
                <option>Westminster</option>
                <option>Montmirail</option>
                <option>Cambridge</option>
                <option>Connemara</option>
            </select>
            </div>
            <div className="formItems">
            <select className="input" name="arrive" onChange={(e) => handeChange(e)}>
                <option disabled selected>tu ve aller ou?</option>
                <option>Kaamelot</option>
                <option>Fort Boyard</option>
                <option>Carmelid</option>
                <option>Royaume de Logre</option>
                <option>Versailles</option>
                <option>Lancaster</option>
                <option>Westminster</option>
                <option>Montmirail</option>
                <option>Cambridge</option>
                <option>Connemara</option>
            </select>           
            </div>
            <div className="formItems">
            <select className="input" name="transport" onChange={(e) => handeChange(e)}>
                <option disabled selected>comment ty va?</option>
                <option>A pied</option>
                <option>En chariotte</option>
                <option>En calèche</option>
                <option>A cheval</option>
                <option>En carrosse</option>
            </select>       
            </div>
            <div className="formItems">
            <input type="date" className="input" name="date" onChange={(e) => handeChange(e)} />      
            </div>
            <div className="form-form">
            <select className="input" name="number" onChange={(e) => handeChange(e)}>
                <option disabled selected>ta dla place?</option>
                <option>1 paysan</option>
                <option>2 pequeux</option>
                <option>3 peqneaux</option>
                <option>4 bouseux</option>
                <option>5 pignoufs</option>
                <option>6 hérétiques</option>
                <option>+ de 6 hérétiques</option>
                </select><br/><br/>
                <button className="" onClick={(e) => e.preventDefault()}>Tu confirmes ?</button>
                
            </div>
                <div className="gif">
                    <img src="https://media.giphy.com/media/Oq4GgLCt4yqoU/giphy.gif" className="gif-gif"></img>
                </div> 
        </div>
    </form>
    )
}

export default Trajet;