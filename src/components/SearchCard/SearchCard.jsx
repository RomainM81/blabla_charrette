import { NavLink } from 'react-router-dom';
import './SearchCard.css'
import DataUser from '../Data/Data'

const SearchCard = (props) => {

  const lieuxInOneMinute = 0.0207124;
  let travelDuration
  const travelDistance = [47, 13, 26, 80, 7, 3]
  let travelDistanceChoice
  let randomUser

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

  const getTravelDistance = () => {
    let result = Math.floor(Math.random() * travelDistance.length)
    travelDistanceChoice = result
  }

  const getRandomUser = () => {
    return Math.floor(Math.random() * DataUser.length)
  }

  randomUser = getRandomUser()

  console.log(props)
  console.log(props.fromTown)


  return (
    <NavLink className='SearchCardLink' to={`/travel/${props.id}/${props.location.state.date}/${props.location.state.nombre}/${randomUser}`}>
      <div className='SearchCard'>

        <div className='info-trajet-info'>

          <div className='info-trajet-time-info'>
            <div className='info-trajet-time-departure info-trajet-time-style'>
              <i class="fas fa-plane-departure"></i> {props.departure}:00
            </div>

            <div className='info-trajet-time-delay info-trajet-time-style'>
              {getTravelDistance()}
              {durationCalculator(travelDistanceChoice)}
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
              Départ : {props.location.state.depart}
            </div>

            <div className='info-trajet-adress-arrival info-trajet-adress-style'>
              Arrivée: {props.location.state.arrive}
            </div>

          </div>

          <div className='info-user-info'>

          </div>

        </div>

      </div>
    </NavLink>
  )
}

export default SearchCard