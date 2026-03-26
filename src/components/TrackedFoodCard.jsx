import { useNavigate, useParams } from "react-router";

//can probably use a state to toggle between add and tracked food cards.

const TrackedFoodCard = ({ trackedFoods: trackedFood, onDelete }) => {

    const navigate = useNavigate();

    return (
        <div key={trackedFood.timestamp} className="tracked-foods-card">
            <dl>
                <dt>{trackedFood.product_name}</dt>
                <dd> Calories: {trackedFood.nutriments["energy-kcal_serving"]}</dd>
                <dd> Carbs: {trackedFood.nutriments.carbohydrates_serving}</dd>
                <dd> Proteins: {trackedFood.nutriments.proteins_serving}</dd>
                <dd> Fats: {trackedFood.nutriments.fat_serving}</dd>
            </dl>

            <div className="tracked-foods-card-buttons">
                {/* navigate to edit page for that specific id */}
                <button onClick={() => navigate(`/edit/${trackedFood.id}`)}>
                    Edit
                </button>
                <button onClick={() => onDelete(trackedFood.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TrackedFoodCard;
