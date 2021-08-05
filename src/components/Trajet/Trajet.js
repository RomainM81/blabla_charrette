import { useState } from 'react';

import parchemin from '../../assets/paper.jpg';
import './Trajet.css';



function Trajet () {
    const [showDetail, setShowDetail]= useState()
    return (
    <form className="formContainer">
        <img src={parchemin} alt="parchemin" />
        <div className="formContent">
                <h2>Où allez-vous glairer?</h2>
            <div className="formItems">
            <select className="input" type="text" placeholder="lieu de départ" required>
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
            <select className="input" type="text" placeholder="destination" required>
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
            <select className="input" type="text" placeholder="type de transport" required>
                <option disabled selected>comment ty va?</option>
                <option>A pied</option>
                <option>En chariotte</option>
                <option>En calèche</option>
                <option>A cheval</option>
                <option>En carrosse</option>
            </select>       
            </div>
            <div className="formItems">
            <input type="date" id="reservation-date" />      
            </div>
            <div className="formItems">
            <select className="input" type="text" placeholder="nombre de passager" required>
                <option disabled selected>tu a dla place?</option>
                <option>1 paysan</option>
                <option>2 pequeux</option>
                <option>3 peqneaux</option>
                <option>4 bouseux</option>
                <option>5 pignoufs</option>
                <option>6 hérétiques</option>
                <option>+ de 6 hérétiques</option>
                </select><br/><br/>
                <button onClick={(event) => setShowDetail(event.target.value)}>Confirmer</button>
                {console.log(setShowDetail)}
            </div>
        </div>
    </form>
    )
}

export default Trajet;