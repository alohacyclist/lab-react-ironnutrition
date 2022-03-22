import './FoodSearch.css'
import { useState } from 'react'

export function FoodSearch({ search }) {

    const [searchTerm, getSearchTerm] = useState('')

    const handleSearch = (e) => {
        search(e.target.value)
        getSearchTerm(e.target.value)
    }

    return (
        <div className="search_container">
            <input className="search" type="text" placeholder="Search Foods" onChange={handleSearch} value={searchTerm} /> 
        </div>
    )
}
