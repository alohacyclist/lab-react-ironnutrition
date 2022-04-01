import './App.css';
import foods_db from "./db/foods.json";
import { FoodBox, AddFood, FoodSearch } from './components'
import { useState } from 'react'


function App() {

  const [foods, setFoods] = useState(foods_db)
  const [foodFilter, setFoodFilter] = useState(foods)

  const search = (searchTerm) => {
    let foodSearch = foodFilter.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFoods(foodSearch)
  }

  return (
    <div className="App">
      
      <div>
        <FoodSearch search={search}/>
      </div>
      
      <div>
        <AddFood setFoods={setFoods} />
      </div>

      <div className="food_list">
        { foods.map(food => { return <FoodBox food={food} setFoods={setFoods}/> }) }
      </div>
      
    </div>
  );
}

export default App;
