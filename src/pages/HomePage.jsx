import NutritionSummary from "../components/NutritionSummary";
import "../style/HomePage.css"

const HomePage = ({trackedFoods}) => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1 className="hero-title">
                    Fueling your <br />
                    <span className="highlight">Obsidian Potential.</span>
                </h1>
                <p className="hero-subtitle">DAILY OVERVIEW</p>
            </header>
            <div className="dashboard-grid">
            <NutritionSummary trackedFoods={trackedFoods}></NutritionSummary>
            </div>
            <p className="muted-text">Click "Add Foods" to log your first meal.</p>
        </div>
        )
}

export default HomePage;