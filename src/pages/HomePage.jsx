import NutritionSummary from "../components/NutritionSummary";

const HomePage = ({trackedFoods}) => {
    return (
        <div>
            <h2>Welcome to the Nutrition Tracker App</h2>
            <NutritionSummary trackedFoods={trackedFoods}></NutritionSummary>
            <p>Click "Add Foods" to begin.</p>
        </div>
        )
}

export default HomePage;