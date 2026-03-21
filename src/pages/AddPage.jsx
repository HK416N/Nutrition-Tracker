import { useEffect, useState } from "react";
import { getFoodSearch } from "../services/foodService";
import FoodCard from "../components/FoodCard";
import FoodSearch from "../components/FoodSearch";


const AddPage = () => {
    // const [query, setQuery] = useState("");
    const [foods, setFoods] = useState([]);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const data = await getFoodSearch(query);

    //     console.log("Submit Query") //!REMEMBER TO REMOVE

    //     setFoods(data);
    // }

    //! useEffect from the pets exercise does not work for me. 
    //! It will only work if i want the app to load with a fully populated list.
    // useEffect(() => {
    //     const getFood = async () => {
    //         const data = await getFoodSearch(query);

    //         console.log("Is Data an Array?", Array.isArray(data)); //!REMEMBER TO REMOVE
    //         setFoods(data);

    //     };
    //     getFood();
    // }, []);

    return (
        <div>
            
            {/* <form onSubmit={handleSubmit}>
                <input type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)
                    }>
                </input>
                <button type="submit">Search</button>
            </form> */}

            <FoodSearch />

            {/* to do: last added message */}
            <p>Coca Cola added to tracker.</p>

            <h2>Search Results</h2>
            <div className="food-list">
                {/* Ternary Operator: checks if foods array has items. If there are items, foods.map to render food cards,
                 if not print a message to prompt user to search to begin adding */}
                {
                    foods.length > 0 ? (foods.map((food) => (
                        <FoodCard key={food._id} item={food} />))
                    ) : (
                        <p>Search for a food to begin.</p>
                    )
                    //! to do: figure out how to handle no results if user searches for an item that's non-exsistent in the API
                }
            </div>
        </div>
    )
}

export default AddPage;