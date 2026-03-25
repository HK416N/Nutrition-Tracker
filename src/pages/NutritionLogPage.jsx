//rename TrackedFoodPage to NutritionLogPage

import TrackedFoodList from "../components/TrackedFoodList";

const NutritionLogPage = ({ trackedFoods, onDelete }) => {
    return (
        <div className="nutrition-log-page">
            <h2>Nutrition Log</h2>
            <TrackedFoodList
                trackedFoods={trackedFoods}
                onDelete={onDelete}
            />
        </div>
    );
};

export default NutritionLogPage;