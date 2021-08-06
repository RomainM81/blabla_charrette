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
                <div className="FlexContainerBlocText">
                    <h3>Rang Social : {Data[Id].class}</h3>
                    <h3>Âge : {Data[Id].age}</h3>
                    <h3>Moyen de Transport : {Data[Id].transport}</h3>
                    <h3>Hygiène : {Data[Id].hygiene}</h3>
                    <h3>Moyens de Paiement</h3>
                    <ul>
                        <div className="PayListUS">
                            <div>
                                <li>
                                    <p>{Data[Id].payment[0].gold_c ? <> &#9989; </> : <> &#10060; </>} Pièce d'or</p>
                                </li>
                                <li>
                                    <p>{Data[Id].payment[0].silver_c ? <> &#9989; </> : <> &#10060; </>} Pièce d'argent</p>
                                </li>
                                <li>
                                    <p>{Data[Id].payment[0].bronze_c ? <> &#9989; </> : <> &#10060; </>} Pièce de bronze</p>
                                </li>
                                <li>
                                    <p>{Data[Id].payment[0].potato ? <> &#9989; </> : <> &#10060; </>} Patate</p>
                                </li>
                            </div>
                            <div className="PayListUS2">
                                <li>
                                    <p>{Data[Id].payment[0].carrot ? <> &#9989; </> : <> &#10060; </>} Carotte</p>
                                </li>
                                <li>
                                    <p>{Data[Id].payment[0].butter ? <> &#9989; </> : <> &#10060; </>} Beurre</p>
                                </li>
                                <li>
                                    <p>{Data[Id].payment[0].salt ? <> &#9989; </> : <> &#10060; </>} Sel</p>
                                </li>
                                <li>
                                    <p>{Data[Id].payment[0].bread ? <> &#9989; </> : <> &#10060; </>} Pain</p>
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