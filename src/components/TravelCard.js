import { useEffect, useState } from 'react'
import './TravelCard.css'

const TravelCard = () => {

  const lieuxInOneMinute = 0.0207124;
  let travelDuration

  const dataProfilTest = {
    id: 1,
    name: 'Roparz',
    pictures: '...',
    class: 'paysan',
    hygiene: 6,
    transport: 'charrette',
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
      from: 'Kaamelott',
      to: 'Fort Boyard',
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
      from: 'Versaille',
      to: 'Montmirail',
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
      from: 'Carmelid',
      to: 'Kaamelott',
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
    console.log(`duration : ${duration}`)
    let minutes = duration % 60
    let hours = duration / 60
    console.log(`heures : ${hours} et minutes : ${minutes}`)
    let arrivalTime = `${hours}h${minutes}`
   return arrivalTime
  }

  const hoursConvertor = (minutes) => {
    let result = Math.floor(minutes / 60)
    return result
  }


  return (
    <>
    {console.log(travelDuration)}
    <div className='navbar-test'>
      BlaBlaCharrette
    </div>
    <div className='TravelCard'>
      <h3>7 août</h3>
      <div className='info-travel-container'>
        <div className='info-trajet-container'>
          <h2>ID : {randomTravelNumber && dataTravelTest[randomTravelNumber -1].id}</h2>
          <div className='info-trajet-time'>
            <div className='info-trajet-time-departure'>
              Départ : {randomTravelNumber && dataTravelTest[randomTravelNumber -1].departure}h
            </div>
          <div className='info-trajet-time-arrival'>
              Arrivée : {arrivalCalculator(travelDuration)}
            </div>
            <div className='info-trajet-time-delay'>
              {randomTravelNumber && durationCalculator(dataTravelTest[randomTravelNumber -1].distance)}
              Durée du trajet : {Math.floor(travelDuration / 60)} heure(s)
              </div>
          </div>
          <div className='info-trajet-separation'>
          </div>
          <div className='info-trajet-adress'>

          </div>
          <ul>
            <li>Départ : {randomTravelNumber && dataTravelTest[randomTravelNumber -1].from}</li>
            <li>Arrivé : {randomTravelNumber && dataTravelTest[randomTravelNumber -1].to}</li>
          </ul>
        </div>
        <div className='info-price'>
          <h3>Tarif : <ul>{randomTravelNumber && dataTravelTest[randomTravelNumber -1].prices.map((priceItem, index) => 
            (priceItem.acceptance && <li key={index}>{priceItem.price + ' ' + priceItem.type}</li>))}
            </ul>
            </h3>
        </div>
        <div className='info-sub-container'>
          <div className='info-transport'>

          </div>
          <div className='info-user'>

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