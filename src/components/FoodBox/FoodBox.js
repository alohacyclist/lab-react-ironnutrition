import './FoodBox.css';
import React from 'react'
import { v4 } from 'uuid';

export function FoodBox({food, setFoods, id}) {

    const handleDelete = () => {
        setFoods((prevFoods) => {
            return prevFoods.filter(item => { 
                return item.name !== food.name
            })
        })
    }

    return (

            <div key={food.name} className="food_card">
                <h2>{food.name}</h2>
                <img style={{width: '200px', alignSelf: 'center'}} src={food.image} alt={food.image} />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p><b>Total Calories: {food.calories*food.servings} </b> kcal </p>
                <button onClick={handleDelete}>DELETE</button>
            </div>

    )
}
