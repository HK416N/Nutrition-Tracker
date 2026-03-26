import { useEffect, useState } from "react";
import { getFoodSearch } from "../services/foodService";
import FoodCard from "../components/FoodCard";
import FoodSearch from "../components/FoodSearch";
import "../style/AddPage.css"


const AddPage = ({onAddTrackedFood}) => {
    const [foods, setFoods] = useState([]); //array of results
    const [lastAdded, setLastAdded] = useState("");
    // track search state
    const [searching, setSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    
    const handleSearch  = async (queryFromChild) => {  
        setSearching(true); 
        setIsLoading(true); 
        const data = await getFoodSearch(queryFromChild);
        setFoods(data);
        setIsLoading(false);
    } 

    const handleLastAdded = (foodItem) => {

        //liftstate
        onAddTrackedFood(foodItem);
        // Message
        setLastAdded(foodItem.product_name);
    }
    
    return (
        <div className="add-page-container">
            <FoodSearch fetchData={handleSearch}/>

            {
                //! see React Conditional Rendering Logical AND operator
                //!  https://react.dev/learn/conditional-rendering#logical-and-operator-
             lastAdded && <p className="last-added-msg">{lastAdded} added to tracker.</p> 
            }

            <h2 className="search-title">Search Results</h2>
            <div className="food-list">
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
                }
            </div>
        </div>
    )
}


export default AddPage;

    
