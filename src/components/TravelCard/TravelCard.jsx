import { useEffect, useState } from 'react'
import './TravelCard.css'
import DataUser from '../Data/Data'
import DataJourney from '../Data/DataJourney'
import { useParams } from 'react-router'

const TravelCard = (props) => {

  const { id, date, nombre } = useParams()
  
  const idToUse = id - 1;
  let randomUser

  const lieuxInOneMinute = 0.0207124;
  let travelDuration

  const durationCalculator = (distance) => {
    let result = distance / lieuxInOneMinute;
    let travelDurationCalc = Math.floor(result);
    travelDuration = travelDurationCalc;
  }

  const arrivalCalculator = (duration) => {
    let minutes = duration % 60
    let hours = Math.floor(duration / 60)
    let days = hours >= 24 ? Math.floor(hours / 24) : 0
    let hoursRest = days ? hours % 24 : hours
    let arrivalTime = `(+${days}j) ${hoursRest}:${minutes}`
   return arrivalTime
  }

  const getRandomUser = () => {
    return Math.floor(Math.random() * DataUser.length)
  }

  randomUser = getRandomUser()

  return (
    <div className='TravelCard'>
      <h3>{date}</h3>

      <div className='info-travel-container'>

        <div className='info-trajet-container'>

          <div className='info-trajet-info'>

            <div className='info-trajet-time-departure info-trajet-time-style'>
            <i class="fas fa-plane-departure"></i> {DataJourney[idToUse].departure}:00
            </div>

            <div className='info-trajet-time-delay info-trajet-time-style'>
              {durationCalculator(DataJourney[idToUse].distance)}
              <i class="far fa-clock"></i> {Math.floor(travelDuration / 60)} heure(s)
            </div>

            <div className='info-trajet-time-arrival info-trajet-time-style'>
            <i class="fas fa-plane-arrival"></i> {arrivalCalculator(travelDuration)}
            </div>

          </div>

          <div className='info-trajet-separation'>

          </div>

          <div className='info-trajet-adress'>

            <div className='info-trajet-adress-departure info-trajet-adress-style'>
              Départ : {DataJourney[idToUse].fromAdress}
              <br/> {DataJourney[idToUse].fromTown}
            </div>

            <div className='info-trajet-adress-arrival info-trajet-adress-style'>
              Arrivée: {DataJourney[idToUse].toAdress}
              <br />{DataJourney[idToUse].toTown}
            </div>

          </div>

        </div>

        <div className='info-price'>

          <h3>Tarif pour {nombre} voyageur :</h3>
          <div className='list-money-accepted'>
            <ul className='money-type-info'>{DataJourney[idToUse].prices.map((priceItem, index) => 
            (priceItem.acceptance && <li key={index}>{priceItem.price + ' ' + priceItem.type}</li>))}
            </ul>
          </div>

        </div>

        <div className='info-sub-container'>

          <div className='info-transport'>
            <h4>Moyen de transport :</h4>
            <p>{DataUser[randomUser].transport}</p>
          </div>

          <div className='info-user'>

            <div className='info-user-photo'>
              <img src={DataUser[randomUser].picture} alt="user face" />
            </div>

            <div className='info-user-name'>
              {DataUser[randomUser].name}
            </div>

            <div className='info-user-hygiene'>
              {DataUser[randomUser].hygiene <= 3 ? <><h4>&#9989; Hygiène certifiée</h4><p>(Dernier bain il y a {DataUser[randomUser].hygiene} mois)</p></> : <><h4>&#10060; Hygiène non certifiée</h4><p>(Dernier bain il y a {DataUser[randomUser].hygiene} mois)</p></>}
            </div>

          </div>

        </div>
        <div>
          <button className='info-button-to-book'>Réserver</button>
        </div>
      </div>

    </div>
  )
}

export default TravelCard