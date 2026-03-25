import { useEffect, useState } from "react";
import { getFoodSearch } from "../services/foodService";
import FoodCard from "../components/FoodCard";
import FoodSearch from "../components/FoodSearch";


const AddPage = ({onAddTrackedFood}) => {
    // const [query, setQuery] = useState(""); //! moved to FoodSearch
    const [foods, setFoods] = useState([]); //array of results
    const [lastAdded, setLastAdded] = useState("");
    // track search state
    const [searching, setSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    //handle API call, async await response
    //state lifted using callback function here
    const handleSearch  = async (queryFromChild) => {  
        setSearching(true); //set search state 
        setIsLoading(true); //set loading state
        const data = await getFoodSearch(queryFromChild);
        setFoods(data);
        setIsLoading(false); //reset loading state, the loading state needs to switch between active and inactive
        // unlike the search state which only determines if the user has ever used the search bar
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
                {/* Ternary Operator: checks if isLoading, then checks if foods array has items.
                 If there are items, foods.map to render food cards,
                 if there are no items found after searching, shows no results
                 if no items are found before searching, 
                 print a message to prompt user to search to begin adding */}
                {   
                    isLoading ? (
                    <p>Loading...</p>
                    ) : 
                    foods.length > 0 ? (foods.map((food) => (
                        <FoodCard key={food._id} item={food} onAdd={handleLastAdded}/>))
                    ) : searching ? (
                        // handling no results found wiht nested ternary like a regular if else chain
                        <p>No results found. Try a different search term.</p>
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

    
