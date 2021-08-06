import './SearchCard.css'

const SearchCard = (props) => {

  const lieuxInOneMinute = 0.0207124;
  let travelDuration
  const travelDistance = [47, 13, 26, 80, 7, 3]
  let travelDistanceChoice

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

  return (
    <div className="SearchCard">
      <div className='info-trajet-info'>

        <div className='info-trajet-time-departure info-trajet-time-style'>
          <i class="fas fa-plane-departure"></i> {props.depart}:00
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


    </div>
  )
}

export default SearchCard