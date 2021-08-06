import { NavLink, Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="leftSide">
                <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
                <NavLink to="/"><h1>BlablaCharrette</h1></NavLink>
            </div>

            <div className="rightSide">
                <div className="search">
                  <NavLink to='/'>
                    <label className="icone" for="recherche">&#128270;</label>
                  </NavLink>
                    <input id="recherche" type="text" placeholder="Rechercher" />

                    {/* <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" />
                    <input type="text" placeholder="Search..." /> */}
                </div>

                <div className="traject">
                    <Link to="/post-trajet">
                        <input id="utilisateur" type="text" type="button" value="&#8853; Publier un trajet" />
                    </Link>

                    {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/add--v1.png" />
                    <button>Publier un trajet</button> */}
                </div>


            </div>

        </div>
    )
}
export default Navbar;