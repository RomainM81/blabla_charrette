import SearchCard from "../SearchCard/SearchCard"
import DataJourney from "../Data/DataJourney"

const SearchResult = (props) => {

    console.log({props})
  return (
    <div className="SearchResult">
      <h2>Resultats de votre recherche :</h2>
      <h4>{props.location.state.date}</h4>
      <p>{props.location.state.depart} <i class="fas fa-arrow-right"></i> {props.location.state.arrive}</p>
      {DataJourney.filter((element) => element.fromTown === props.location.state.depart).map((element, index) => <SearchCard key={index} {...element} {...props} />)}
      
    </div>
  )

}

export default SearchResult