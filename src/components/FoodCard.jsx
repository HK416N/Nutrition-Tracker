

const FoodCard = ({ item, onAdd }) => {

    const name = item.product_name ?? "Name Unavailable";
    const image = item.image_url ?? "Image Unavaialble";
    const calories = item.nutriments?.["energy-kcal_serving"] ?? "Unavailable"; //the app crashes cause one of the energy-kcal_serving is undefined. To avoid this, use optional chaining 
    const carbs = item.nutriments?.["carbohydrates_serving"] ?? "Unavailable"; // || returns unavailable if the value is set to 0, use nullish coalescing ?? which only triggers if value is null or undefined
    const protein = item.nutriments?.["proteins_serving"] ?? "Unavailable";
    const fat = item.nutriments?.["fat_serving"] ?? "Unavailable";


    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={`An image of ${name}`} />
            <div>
                <div>
                    <strong>Calories: {calories} </strong>
                </div>
                <div>
                    <strong>Carbs: {carbs} </strong>
                </div>
                <div>
                    <strong>Protein: {protein} </strong>
                </div>
                <div>
                    <strong>Fat: {fat} </strong>
                </div>
            </div>

            {/* lift state for parent to display name in the
             last added message*/}
            <button onClick={() => onAdd(name)}> 
                Add
            </button>
        </div>
    )
}
//remember to fix button

export default FoodCard;