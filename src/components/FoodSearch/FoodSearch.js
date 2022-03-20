import { useState } from 'react'

export function FoodSearch() {
    const [searchTerm, getSearchTerm] = useState('')
    return (
        <div>
            <input type="text" placeholder="Search Foods" onChange={(e) => {getSearchTerm(e.target.value)}} value={searchTerm} searchTerm={searchTerm}/> 
        </div>
    )
}
