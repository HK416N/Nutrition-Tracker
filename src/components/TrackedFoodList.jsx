import TrackedFoodCard from "./TrackedFoodCard";

const TrackedFoodList = ({ trackedFoods, onDelete }) => {

    return (
        trackedFoods?.length > 0 ? (

            <div className="tracked-foods-list">
                {
                    trackedFoods.map((trackedFood) => (
                        <div key={trackedFood.timestamp} className="TrackedFoodList">
                            <TrackedFoodCard
                                key={trackedFood.id}
                                trackedFoods={trackedFood}
                                onDelete={onDelete}
                            />
                        </div>
                    ))
                }
            </div>
        ) : (
            <p>No foods tracked. Click "Add" to begin logging.</p>
        )
    );
};

export default TrackedFoodList;



