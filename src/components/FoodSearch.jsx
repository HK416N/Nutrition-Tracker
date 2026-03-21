import { useState } from "react";
import { getFoodSearch } from "../services/foodService";

const FoodSearch = () => {
    const [query, setQuery] = useState("");
    
    // const [food, setFood] = useState("");

    // const handleChange = (event) => {
    //     setFood(event.target.value);
    //     console.log(food);
    // }

    // return (
    //     <label>
    //         <input type="text" value={food} onChange={handleChange}></input>
    //     </label>
    // )

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await getFoodSearch(query);

        console.log("Submit Query") //!REMEMBER TO REMOVE

        // setFoods(data);
    }
    return(
    <form onSubmit={handleSubmit}>
        <input type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)
            }>
        </input>
        <button type="submit">Search</button>
    </form>            
    )

}

export default FoodSearch;