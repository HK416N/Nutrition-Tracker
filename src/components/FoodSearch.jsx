import "../style/FoodSearch.css"
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const FoodSearch = ({ fetchData }) => {
    const [query, setQuery] = useState("");

    const debounced = useDebouncedCallback(
        (value) => {
            // console.log("API CALL TRIGGERED: ", value); //check that api call is being debounced 
            // tested on local host
            fetchData(value);
        },
        //delay in ms - api call made 1000ms after typing
        1000,
        {leading: true},
    );

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value); 
        //debounced(value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        // clicking on submit will cancel pending debounce 
        // helps to prevent burning API calls/flooding the API with calls
        debounced.cancel();
        fetchData(query); //callback (lift state) run handleSearch in AddPage.jsx

        console.log("Submit Query") //!REMEMBER TO REMOVE
    }

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <input className="search-input" type="search"
                value={query}
                //! https://www.developerway.com/posts/debouncing-in-react
                //! https://www.npmjs.com/package/use-debounce
                //! https://codesandbox.io/p/sandbox/x0jvqrwyq?file=%2Fsrc%2Findex.js%3A12%2C11
                onChange={handleChange}
                placeholder="Search for food...">
            </input>
            <button className="search-button" type="submit">Search</button>
        </form>
    )

}

export default FoodSearch;