//rename TrackedFoodPage to NutritionLogPage

const NutritionLogPage = ({ trackedFoods, onDelete }) => {

    return (
        <div>
            <h2>Food Log</h2>

            <div className="tracked-foods-list">

                {trackedFoods?.length > 0 ? (
                    
                    <div className="tracked-foods-list">
                        {
                            trackedFoods.map((food) => (
                                <div key={food.timestamp} className="TrackedFoodList">
                                    <dl>
                                        {/* tracked foods needs to match my app naming convention 
                                        while AddTrackedFoods needs to match the Airtable naming convention*/}
                                        <dt>{food.product_name}</dt>
                                        <dd> Calories: {food.nutriments["energy-kcal_serving"]}</dd>
                                        <dd> Carbs: {food.nutriments.carbohydrates_serving}</dd>
                                        <dd> Proteins: {food.nutriments.proteins_serving}</dd>
                                        <dd> Fats: {food.nutriments.fat_serving}</dd>
                                    </dl>

                                    <button onClick={() => onDelete(food.id)}>
                                        Delete
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>No foods tracked. Click "Add" to begin logging.</p>
                )}

            </div>

            {/* for reference only
            
            foods.length > 0 ? (foods.map((food) => (
                        <FoodCard key={food._id} item={food} onAdd={handleLastAdded}/>))
                    ) : (
                        <p>Search for a food to begin.</p>
                    ) 
                     */}

        </div>
    )
}

export default NutritionLogPage;