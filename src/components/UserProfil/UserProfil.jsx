import { useParams } from "react-router";
import Data from "../Data/Data";
import "./UserProfil.css"

const UserProfil = () => {
    let { Id } = useParams()

    return (
        <div className="UserP">
            <h2>{Data[Id].name}</h2>
            <div className="FlexContainerUP">
                <img className="ImgUS" src={Data[Id].picture} alt={Data[Id].name} />
                <div>
                    <h3>Rang Social : {Data[Id].class}</h3>
                    <h3>Age : {Data[Id].age}</h3>
                    <h3>Moyen de Transport : {Data[Id].transport}</h3>
                    <h3>Hygiène : {Data[Id].hygiene}</h3>
                    <h3>Moyen de Paiement : </h3>
                    <ul>
                        <div className="PayListUS">
                            <div>
                                <li>
                                    <p>Pièce d'or : {Data[Id].payment[0].gold_c ? <> &#9989; </> : <> &#10060; </>}</p>
                                </li>
                                <li>
                                    <p>Pièce d'argent :{Data[Id].payment[0].silver_c ? <> &#9989; </> : <> &#10060; </>}</p>
                                </li>
                                <li>
                                    <p>Pièce de bronze : {Data[Id].payment[0].bronze_c ? <> &#9989; </> : <> &#10060; </>}</p>
                                </li>
                                <li>
                                    <p>Patate : {Data[Id].payment[0].potato ? <> &#9989; </> : <> &#10060; </>}</p>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <p>Carrotte : {Data[Id].payment[0].carrot ? <> &#9989; </> : <> &#10060; </>}</p>
                                </li>
                                <li>
                                    <p>Beurre : {Data[Id].payment[0].butter ? <> &#9989; </> : <> &#10060; </>}</p>
                                </li>
                                <li>
                                    <p>Sel : {Data[Id].payment[0].salt ? <> &#9989; </> : <> &#10060; </>}</p>
                                </li>
                                <li>
                                    <p>Pain : {Data[Id].payment[0].bread ? <> &#9989; </> : <> &#10060; </>}</p>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>



        </div>
    );
}

export default UserProfil;