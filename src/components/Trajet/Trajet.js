import './Trajet.css';



function Trajet () {
    return (
        <form className="formContainer">
            <div className="formItems">
            
            <select className="input" type="text" placeholder="lieu de départ" required>
                <option value=""></option>
                <option value="">Kaamelot</option>
                <option value="">Fort Boyard</option>
                <option value="">Carmelid</option>
                <option value="">Royaume de Logre</option>
                <option value="">Versailles</option>
                <option value="">Lancaster</option>
                <option value="">Westminster</option>
                <option value="">Montmirail</option>
                <option value="">Cambridge</option>
                <option value="">Connemara</option>
            </select>
            </div>
            <div className="formItems">
            <select className="input" type="text" placeholder="destination" required>
                <option value=""></option>
                <option value="">Kaamelot</option>
                <option value="">Fort Boyard</option>
                <option value="">Carmelid</option>
                <option value="">Royaume de Logre</option>
                <option value="">Versailles</option>
                <option value="">Lancaster</option>
                <option value="">Westminster</option>
                <option value="">Montmirail</option>
                <option value="">Cambridge</option>
                <option value="">Connemara</option>
            </select>           
            </div>
            <div className="formItems">
            <select className="input" type="text" placeholder="type de transport" required>
                <option value=""></option>
                <option value="">A pied</option>
                <option value="">En chariotte</option>
                <option value="">En calèche</option>
                <option value="">A cheval</option>
                <option value="">En carrosse</option>
            </select>       
            </div>
            <div className="formItems">
            <input type="date" id="reservation-date" />      
            </div>
            <div className="formItems">
            <select className="input" type="text" placeholder="nombre de passager" required>
                <option value=""></option>
                <option value="">1 paysan</option>
                <option value="">2 pequeux</option>
                <option value="">3 peqneaux</option>
                <option value="">4 bouseux</option>
                <option value="">5 pignoufs</option>
                <option value="">6 hérétiques</option>
                <option value="">+ de 6 hérétiques</option>
                </select>       
            </div>
        </form>
    )
}

export default Trajet;