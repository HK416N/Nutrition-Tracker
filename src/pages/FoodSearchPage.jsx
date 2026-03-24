import { useEffect, useState } from "react";
import { getFoodSearch } from "../services/foodService";
import FoodCard from "../components/FoodCard";
import FoodSearch from "../components/FoodSearch";


const AddPage = ({onAddTrackedFood}) => {
    // const [query, setQuery] = useState(""); //! moved to FoodSearch
    const [foods, setFoods] = useState([]); //array of results
    const [lastAdded, setLastAdded] = useState("");
    
    
    //handle API call, async await response
    //state lifted using callback function here
    const handleSearch  = async (queryFromChild) => {  
        const data = await getFoodSearch(queryFromChild);
        setFoods(data);
    } 

    //change handleLastAddedMessage to handleLastAdded so it can be used to update onAddTrackedFood to lift state to APp 
    // As well as setLastAdded for the last added message
    const handleLastAdded = (foodItem) => {

        //liftstate
        onAddTrackedFood(foodItem);
        // Message
        setLastAdded(foodItem.product_name);
    }
    
    return (
        <div>
            <FoodSearch fetchData={handleSearch}/>

            {
                //! see React Conditional Rendering Logical AND operator
                //!  https://react.dev/learn/conditional-rendering#logical-and-operator-
             lastAdded && <p>{lastAdded} added to tracker.</p> 
            }

            <h2>Search Results</h2>
            <div className="food-list">
                {/* Ternary Operator: checks if foods array has items. If there are items, foods.map to render food cards,
                 if not print a message to prompt user to search to begin adding */}
                {
                    foods.length > 0 ? (foods.map((food) => (
                        <FoodCard key={food._id} item={food} onAdd={handleLastAdded}/>))
                    ) : (
                        <p>Search for a food to begin.</p>
                    )
                    // to do: figure out how to handle no results if user searches for an item that's non-exsistent in the API
                }
            </div>
        </div>
    )
}


export default AddPage;
