import './AddFood.css'
import { useState } from 'react'
import { v4 } from "uuid";

export function AddFood({ setFoods }) {

    const [foodNameInput, setFoodNameInput] = useState('')
    const [foodImgInput, setFoodImgInput] = useState('')
    const [foodCalInput, setFoodCalInput] = useState('')
    const [foodServInput, setFoodServInput] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFoods((prevFoods) => {
            return [...prevFoods, { id: v4(), name: foodNameInput, image: foodImgInput, calories: foodCalInput, servings: foodServInput }]
        })
    }

    return (
        <div >
            <form className="addFood_form" onSubmit={handleSubmit}>
                <input name={'food_name'} value={foodNameInput} type="text" onChange={(e) => setFoodNameInput(e.target.value) } placeholder='Add name of food' />
                <input name={'food_img'} value={foodImgInput} type="text" onChange={(e) => setFoodImgInput(e.target.value) } placeholder='Add a picture URL' />
                <input name={'food_kcal'} value={foodCalInput} type="text" onChange={(e) => setFoodCalInput(e.target.value) } placeholder='Add calories' />
                <input name={'food_servings'} value={foodServInput} type="number" onChange={(e) => setFoodServInput(e.target.value) } />
                <button type="submit" >ADD</button> 
            </form>
        </div>
    )
}
