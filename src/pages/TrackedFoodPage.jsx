const TrackedFoodPage = ({ trackedFoods }) => {

    return (
        <div>
            <h2>Food Log</h2>

            <div className="tracked-foods-list">

                {trackedFoods.length > 0 ? (
                    //! replace this portion with js for the trackedFoods.map
                    <p>Tracked Foods List Placeholder</p>
                ) : (
                    <p>No foods tracked. Click "Add" to begin logging.</p>
                )}

            </div>



        </div>
    )
}

export default TrackedFoodPage;