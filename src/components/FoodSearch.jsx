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
        1000
    );

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value); 
        // unlike the example from use-debounce docs, 
        // setQuery(value) before debounced(value) allows the search bar to 
        // update immediately
        //! debounced(value); //this would make the search bar a live search feature which would be nice for auto-fill or prompts
        //! but considering my API limitations, I dont think I can use this. It was a really cool feature though. must remember
        //! to use it in other apps.
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
        <form onSubmit={handleSubmit}>
            <input type="search"
                value={query}

                //! if theres time: check debounce in react 
                //! https://www.developerway.com/posts/debouncing-in-react
                //! https://www.npmjs.com/package/use-debounce
                //! https://codesandbox.io/p/sandbox/x0jvqrwyq?file=%2Fsrc%2Findex.js%3A12%2C11
                onChange={handleChange}
                placeholder="Search for food...">
            </input>
            <button type="submit">Search</button>
        </form>
    )

}

export default FoodSearch;