import { useState } from 'react';

import DataJourney from '../Data/DataJourney';

import './Home.css';


const SearchBarGlobal = () => {

    const [Depart, setDepart] = useState([])
    const [Arrive, setArrive] = useState([])
    const [Transport, setTransport] = useState([])
    const [Date, setDate] = useState([])
    const [NbrT, setNbrT] = useState([])

    function handleChange(e, setState) {
        setState(e.target.value);
    }


    return (
        <>
            <p className="infoSanitaire">
                <i className="fas fa-exclamation-circle"></i> Peste noire et pass sanitaire : retrouvez les dernières infos sur notre FAQ.
            </p>
            <div className="blocBanner">
                <div className="blocBannerSearch">
                    <select className="choiceDep"
                        onChange={(e) => handleChange(e, setDepart)}>
                        <option disabled selected>Départ</option>
                        <option >Kaamelott</option>
                        <option >Versaille</option>
                        <option >Montmirail</option>
                        <option >Fort Boyard</option>
                        <option >Carmelid</option>
                        <option >Edimbourg</option>
                        <option >Lancaster</option>
                        <option >Westminster</option>
                        <option >Dublin</option>
                    </select>
                    <select className="choice"
                        onChange={(e) => handleChange(e, setArrive)}>
                        <option disabled selected>Destination</option>
                        <option >Kaamelott</option>
                        <option >Versaille</option>
                        <option >Montmirail</option>
                        <option >Fort Boyard</option>
                        <option >Carmelid</option>
                        <option >Edimbourg</option>
                        <option >Lancaster</option>
                        <option >Westminster</option>
                        <option >Dublin</option>
                    </select>
                    <select className="choice"
                        onChange={(e) => handleChange(e, setTransport)}>
                        <option disabled selected>Transport</option>
                        <option >À pied</option>
                        <option >À cheval</option>
                        <option >Chariotte</option>
                        <option >Calèche</option>
                        <option >Carrosse</option>
                    </select>
                    <input type="date" className="reservationDate"
                        onChange={(e) => handleChange(e, setDate)} />
                    <select className="choice"
                        onChange={(e) => handleChange(e, setNbrT)}>
                        <option disabled selected>Nombre de gueux</option>
                        <option >1 paysans</option>
                        <option >2 pequeux</option>
                        <option >3 pecords</option>
                        <option >4 bouseux</option>
                        <option >5 pignoufs</option>
                        <option >6 hérétiques</option>
                        <option >+ de 6 hérétiques</option>
                    </select>
                    <button className="logoSearch"><i className="fas fa-search"></i></button>
                </div>
            </div>
                <h2 className="slogan" >BlablaCharrette aucun lieu ne vous arrête !</h2>
                <div className="color-change-2x"></div>
        </>
    );
}

export default SearchBarGlobal;