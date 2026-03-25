//MDN REFERENCE:

//reduce(callbackFn)
//reduce(callbackFn, initialValue)


// Sum of values in an object array
// To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

// js

// Copy
// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x,
//   0,
// );

// console.log(sum); // 6

// [] makes the list empty if there is no data
const NutritionSummary = ({ trackedFoods = [] }) => {
    console.log("Current foods in summary:", trackedFoods);

    const caloriesTotal = trackedFoods.reduce(
        (acc, food) => acc + Number(food.nutriments["energy-kcal_serving"] || 0), 0
    );
    
    const carbsTotal = trackedFoods.reduce(
        (acc,food) => acc + Number(food.nutriments.carbohydrates_serving || 0), 0
    );
    
    const proteinsTotal = trackedFoods.reduce(
        (acc,food) => acc + Number(food.nutriments.proteins_serving || 0), 0
    );
    
    const fatsTotal = trackedFoods.reduce(
        (acc,food) => acc + Number(food.nutriments.fats_serving || 0), 0 //needs `|| 0` to prevent NaN cases
    )
    
    return (
        <div className="nutrition-summary">
            {/* pesky decimals. BEGONE! */}
            <h3>Total Calories: {caloriesTotal.toFixed(0)}</h3>
            <p>Total Carbs: {carbsTotal.toFixed(1)}</p>
            <p>Total Proteins: {proteinsTotal.toFixed(1)}</p>
            <p>Total Fats: {fatsTotal.toFixed(1)}</p>
        </div>
    )
     
}

export default NutritionSummary;