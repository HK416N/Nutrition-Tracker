import { useState } from "react";

const FoodSearch = ({fetchData}) => {
    const [query, setQuery] = useState("");
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        fetchData(query); //callback (lift state) run handleSearch in AddPage.jsx

        // console.log("Submit Query") //!REMEMBER TO REMOVE
    }

    return(
        <form onSubmit={handleSubmit}>
        <input type="text"
            value={query}

            //! if theres time: check debounce in react 
            //! https://www.developerway.com/posts/debouncing-in-react
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for food...">
        </input>
        <button type="submit">Search</button>
    </form>            
    )
    
}

export default FoodSearch;