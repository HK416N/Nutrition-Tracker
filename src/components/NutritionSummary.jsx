
import "../style/NutritionSummary.css"


// [] makes the list empty if there is no data
const NutritionSummary = ({ trackedFoods = [] }) => {
    console.log("Current foods in summary:", trackedFoods);

    //refer to reduce MDN
    const caloriesTotal = trackedFoods.reduce(
        (acc, food) => acc + Number(food.nutriments["energy-kcal_serving"] || 0), 0
    );

    const carbsTotal = trackedFoods.reduce(
        (acc, food) => acc + Number(food.nutriments.carbohydrates_serving || 0), 0
    );

    const proteinsTotal = trackedFoods.reduce(
        (acc, food) => acc + Number(food.nutriments.proteins_serving || 0), 0
    );

    const fatsTotal = trackedFoods.reduce(
        (acc, food) => acc + Number(food.nutriments.fats_serving || 0), 0 //needs `|| 0` to prevent NaN cases
    )

    return (
       <div className="unified-summary-card">
            <div className="card-top">
                <span className="card-label">TOTAL CALORIES</span>
                <h2 className="main-calories">
                    {caloriesTotal.toFixed(0)}
                    <span className="unit">kcal</span>
                </h2>
            </div>

            <div className="divider"></div>

            <div className="macros-row">
                <div className="detail-item">
                    <div className="accent-bar carbs"></div>
                    <p className="label">CARBS</p>
                    <p className="value">{carbsTotal.toFixed(1)}g</p>
                </div>

                <div className="detail-item">
                    <div className="accent-bar protein"></div>
                    <p className="label">PROTEIN</p>
                    <p className="value">{proteinsTotal.toFixed(1)}g</p>
                </div>

                <div className="detail-item">
                    <div className="accent-bar fats"></div>
                    <p className="label">FATS</p>
                    <p className="value">{fatsTotal.toFixed(1)}g</p>
                </div>
            </div>
        </div>
    )

}

export default NutritionSummary;