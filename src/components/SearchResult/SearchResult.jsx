import SearchCard from "../SearchCard/SearchCard"

const SearchResult = (props) => {
  
  const tabTest = [
    {name:'prout1'},
    {name:'prout2'},
    {name: 'prout3'},
    {name: 'prout4'},
    {name: 'prout5'}]

  return (
    <div className="SearchResult">
      <h2>Resultats de votre recherche :</h2>
      <h4>{props.date}</h4>
      <p>{props.departure} <i class="fas fa-arrow-right"></i> {props.arrival}</p>
      {tabTest.map((element) => <SearchCard name={element.name} />)}
      
    </div>
  )

}

export default SearchResult