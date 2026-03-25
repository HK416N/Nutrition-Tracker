//rename TrackedFoodPage to NutritionLogPage

import NutritionSummary from "../components/NutritionSummary";
import TrackedFoodList from "../components/TrackedFoodList";

const NutritionLogPage = ({ trackedFoods, onDelete }) => {
    return (
        <div className="nutrition-log-page">
            <h2>Nutrition Log</h2>

            <NutritionSummary trackedFoods={trackedFoods}
            ></NutritionSummary>

            <TrackedFoodList
                trackedFoods={trackedFoods}
                onDelete={onDelete}
            />
        </div>
    );
};

export default NutritionLogPage;