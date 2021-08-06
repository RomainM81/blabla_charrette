import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Home.css';


const SearchBarGlobal = () => {

    const [state, setState] = useState({
        depart: "",
        arrive: "",
        transport: "",
        date: "",
        nombre: ""
    })

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleClick = () => {

    }
    console.log(state)

    return (
        <>
            <p className="infoSanitaire">
                <i className="fas fa-exclamation-circle"></i> Peste noire et pass sanitaire : retrouvez les dernières infos sur notre FAQ.
            </p>
            <div className="blocBanner">
                <div className="blocBannerSearch">
                    <select className="choiceDep" name="depart"
                        onChange={(e) => handleChange(e)}>
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
                    <select className="choice" name="arrive"
                        onChange={(e) => handleChange(e)}>
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
                    <select className="choice" name="transport"
                        onChange={(e) => handleChange(e)}>
                        <option disabled selected>Transport</option>
                        <option >À pied</option>
                        <option >À cheval</option>
                        <option >Chariotte</option>
                        <option >Calèche</option>
                        <option >Carrosse</option>
                    </select>
                    <input type="date" className="reservationDate" name="date"
                        onChange={(e) => handleChange(e)} />
                    <select className="choice" name="nombre"
                        onChange={(e) => handleChange(e)}>
                        <option disabled selected>Nombre de gueux</option>
                        <option >1 paysans</option>
                        <option >2 pequeux</option>
                        <option >3 pecords</option>
                        <option >4 bouseux</option>
                        <option >5 pignoufs</option>
                        <option >6 hérétiques</option>
                        <option >+ de 6 hérétiques</option>
                    </select>
                    <Link to={{pathname:'/search-result', state: state}} className="NavL">
                        <button className="logoSearch"><i className="fas fa-search"></i></button>
                    </Link>
                </div>
            </div>
                <h2 className="slogan" >BlablaCharrette aucun lieu ne vous arrête !</h2>
                <div className="color-change-2x"></div>
        </>
    );
}

export default SearchBarGlobal;