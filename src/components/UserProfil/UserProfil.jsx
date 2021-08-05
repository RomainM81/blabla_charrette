import Data from "../Data/Data";
import "./UserProfil.css"

const UserProfil = () => {

    return (
        <div className="UserP">
            <h2>{Data[0].name}</h2>
            <div className="FlexContainerUP">
            <img className="ImgUS" src={Data[0].picture} alt={Data[0].name} />
                <h3>Rang Social : {Data[0].class}</h3>
                <h3>Age : {Data[0].age}</h3>
                <h3>Moyen de Transport : {Data[0].transport}</h3>
                <h3>Hygiène : {Data[0].hygiene}</h3>
                    <h3>Moyen de Paiement : </h3>
                <ul>
                    <li>
                        <p>Pièce d'or : {Data[0].payment[0].gold_c ? <> &#9989; </> : <> &#10060; </>}</p>
                    </li>
                    <li>
                        <p>Pièce d'argent :{Data[0].payment[0].silver_c ? <> &#9989; </> : <> &#10060; </>}</p>
                    </li>
                    <li>
                        <p>Pièce de bronze : {Data[0].payment[0].bronze_c ? <> &#9989; </> : <> &#10060; </>}</p>
                    </li>
                    <li>
                        <p>Patate : {Data[0].payment[0].potato ? <> &#9989; </> : <> &#10060; </>}</p>
                    </li>
                    <li>
                        <p>Carrotte : {Data[0].payment[0].carrot ? <> &#9989; </> : <> &#10060; </>}</p>
                    </li>
                    <li>
                        <p>Beurre : {Data[0].payment[0].butter ? <> &#9989; </> : <> &#10060; </>}</p>
                    </li>
                    <li>
                        <p>Sel : {Data[0].payment[0].salt ? <> &#9989; </> : <> &#10060; </>}</p>
                    </li>
                    <li>
                        <p>Pain : {Data[0].payment[0].bread ? <> &#9989; </> : <> &#10060; </>}</p>
                    </li>
                </ul>
            </div>



        </div>
    );
}

export default UserProfil;