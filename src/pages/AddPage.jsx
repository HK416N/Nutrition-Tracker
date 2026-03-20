import { useEffect, useState } from "react";
import { getFoodSearch } from "../services/foodService";
import FoodCard from "../components/FoodCard";


const AddPage = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const getFood = async () => {
            const data = await getFoodSearch("coca cola");

            console.log("Is Data an Array?", Array.isArray(data));
            setFoods(data);
        };
        getFood();
    }, []);

    return (
        <div>
            <h2>Search Results</h2>
            <div className="food-list">
                {foods?.map((food) => (
                    <FoodCard key={food._id} item={food} />
                ))}
            </div>
        </div>
    )
}

export default AddPage;