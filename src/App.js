/*eslint semi: ["error", "never"]*/
import "./App.css"
import Search from "./components/search/search"
import CurrentWeather from "./components/current-weather/current-weather"


function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather />
    </div>
  )
}

export default App
