const TrackedFoodPage = ({ trackedFoods }) => {

    return (
        <div>
            <h2>Food Log</h2>

            <div className="tracked-foods-list">

                {trackedFoods.length > 0 ? (
                    //! replace this portion with js for the trackedFoods.map
                    <ul>
                        {
                            trackedFoods.map((foods) => (
                                <li>{foods.product_name}</li>
                            ))
                        }
                    </ul>
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

export default TrackedFoodPage;