import './App.css';
import foods_db from "./db/foods.json";
import { FoodBox } from './components'
import { AddFood } from './components'
import { FoodSearch } from './components'
import { useState, useEffect } from 'react'


function App() {

  const [foods, setFoods] = useState(foods_db)

  return (
    <div className="App">
      <FoodSearch />
      <AddFood setFoods={setFoods} />
      { foods.map(food => { return <FoodBox food={food} setFoods={setFoods}/> }) }
    </div>
  );
}

export default App;
