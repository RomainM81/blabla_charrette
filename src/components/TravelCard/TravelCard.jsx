import { useEffect, useState } from 'react'
import './TravelCard.css'
import backgroundImage from '../../assets/parchemin.jpg'

const TravelCard = () => {

  const lieuxInOneMinute = 0.0207124;
  let travelDuration

  const dataProfilTest = {
    id: 1,
    name: 'Roparz',
    pictures: '...',
    class: 'paysan',
    hygiene: 6,
    transportType: 'charrette',
    age: 33,
    sexe: 'homme',
    payment: [
      {
        gold_c: true,
        silver_c: true,
        copper_c: false,
        potato: false,
        carrot: false,
        butter: true,
        salt: true,
        bread: false,
        sheep: true
      }
    ]
  }

  const dataTravelTest = [
    {
      id:1,
      fromAdress: '3 rue de la fessière de la reine, Kaamelott',
      fromTown: 'Kaamelott',
      toAdress: 'Auberge du Père Fourasse, Fort Boyard',
      toTown: 'Fort Boyard',
      transportType: 'pieds',
      departure: 9,
      distance: 47,
      prices: [
        {
          type: 'pièce(s) d\'or',
          price: 1,
          acceptance: true
        },
        {
          type: 'pièce(s) d\'argent',
          price: 7,
          acceptance: true
        },
        {
          type: 'pièce(s) de cuivre',
          price: 30,
          acceptance: true
        },
        {
          type: 'kg(s) de patates',
          price: null,
          acceptance: false
        },
        {
          type: 'kg(s) de carottes',
          price: null,
          acceptance: false
        },
        {
          type: 'kg(s) de beurre',
          price: 12,
          acceptance: true
        },
        {
          type: 'kg(s) de sel',
          price: 3,
          acceptance: true
        },
        {
          type: 'pain(s)',
          price: null,
          acceptance: false
        },
        {
          type: 'mouton(s)',
          price: 3,
          acceptance: true
        }
      ]
    },
    {
      id:2,
      fromAdress: '43 allée de la gambas, Versaille',
      fromTown: 'Versaille',
      toAdress: 'Place du gueux cuiré, Montmiral',
      toTown: 'Montmirail',
      transportType: 'cheval',
      departure: 11,
      distance: 12,
      prices: [
        {
          type: 'pièce(s) d\'or',
          price: 0.5,
          acceptance: true
        },
        {
          type: 'pièce(s) d\'argent',
          price: 4,
          acceptance: true
        },
        {
          type: 'pièce(s) de cuivre',
          price: 15,
          acceptance: true
        },
        {
          type: 'kg(s) de patates',
          price: null,
          acceptance: false
        },
        {
          type: 'kg(s) de carottes',
          price: 7,
          acceptance: true
        },
        {
          type: 'kg(s) de beurre',
          price: 4,
          acceptance: true
        },
        {
          type: 'kg(s) de sel',
          price: 1,
          acceptance: true
        },
        {
          type: 'pain(s)',
          price: 5,
          acceptance: true
        },
        {
          type: 'mouton(s)',
          price: null,
          acceptance: false
        }
      ]
    },
    {
      id:3,
      fromAdress: 'Boulevard Dame Beatrice la pouffiasse, Carmelid',
      fromTown: 'Carmelid',
      toAdress: '3 rue de la fessière de la reine, Kaamelott',
      toTown: 'Kaamelott',
      transportType: 'carosse',
      departure: 14,
      distance: 21,
      prices: [
        {
          type: 'pièce(s) d\'or',
          price: 0.25,
          acceptance: true
        },
        {
          type: 'pièce(s) d\'argent',
          price: 3,
          acceptance: true
        },
        {
          type: 'pièce(s) de cuivre',
          price: 10,
          acceptance: true
        },
        {
          type: 'kg(s) de patates',
          price: 5,
          acceptance: true
        },
        {
          type: 'kg(s) de carottes',
          price: null,
          acceptance: false
        },
        {
          type: 'kg(s) de beurre',
          price: 2,
          acceptance: true
        },
        {
          type: 'kg(s) de sel',
          price: 0.5,
          acceptance: true
        },
        {
          type: 'pain(s)',
          price: null,
          acceptance: false
        },
        {
          type: 'mouton(s)',
          price: 1,
          acceptance: true
        }
      ]
    }
  ]

  const [randomTravelNumber, setRandomTravelNumber] = useState()

  useEffect(() => {
    const getTravel = () => {
      let randomTravel = Math.floor(Math.random() * dataTravelTest.length +1);
      setRandomTravelNumber(randomTravel)
    }
    getTravel()
  
  },[])

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


  return (
    <>
    <div className='navbar-test'>
      BlaBlaCharrette
    </div>
    <div className='TravelCard'>
      <h3>7 août</h3>

      <div className='info-travel-container'>

        <div className='info-trajet-container'>

          <div className='info-trajet-info'>

            <div className='info-trajet-time-departure info-trajet-time-style'>
              {randomTravelNumber && dataTravelTest[randomTravelNumber -1].departure}:00
            </div>

            <div className='info-trajet-time-delay info-trajet-time-style'>
              {randomTravelNumber && durationCalculator(dataTravelTest[randomTravelNumber -1].distance)}
              Durée : {Math.floor(travelDuration / 60)} heure(s)
            </div>

            <div className='info-trajet-time-arrival info-trajet-time-style'>
                {randomTravelNumber && arrivalCalculator(travelDuration)}
            </div>

          </div>

          <div className='info-trajet-separation'>

          </div>

          <div className='info-trajet-adress'>

            <div className='info-trajet-adress-departure info-trajet-adress-style'>
              Départ : {randomTravelNumber && dataTravelTest[randomTravelNumber -1].fromAdress}
              <br/> {randomTravelNumber && dataTravelTest[randomTravelNumber -1].fromTown}
            </div>

            <div className='info-trajet-adress-arrival info-trajet-adress-style'>
              Arrivée: {randomTravelNumber && dataTravelTest[randomTravelNumber -1].toAdress}
              <br />{randomTravelNumber && dataTravelTest[randomTravelNumber -1].toTown}
            </div>

          </div>

        </div>

        <div className='info-price'>

          <h3>Tarif pour X voyageur :</h3>
          <div className='list-money-accepted'>
            <ul className='money-type-info'>{randomTravelNumber && dataTravelTest[randomTravelNumber -1].prices.map((priceItem, index) => 
            (priceItem.acceptance && <li key={index}>{priceItem.price + ' ' + priceItem.type}</li>))}
            </ul>
          </div>

        </div>

        <div className='info-sub-container'>

          <div className='info-transport'>
          <h4>Moyen de transport :</h4>
            {dataProfilTest.transportType}
          </div>

          <div className='info-user'>

            <div className='info-user-photo'>
              {dataProfilTest.pictures}
            </div>

            <div className='info-user-name'>
            {dataProfilTest.name}
            </div>

            <div className='info-user-hygiene'>
            {`Dernier bain : < ${dataProfilTest.hygiene} mois`}
            </div>

          </div>

        </div>

        <button className='info-button-to-book'>Réserver</button>

      </div>

    </div>

    <div className='footer-test'>
    </div>
  </>
  )
}

export default TravelCard