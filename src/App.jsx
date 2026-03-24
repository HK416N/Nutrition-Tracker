// src/App.jsx

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/FoodSearchPage";
import NutritionLogPage from "./pages/NutritionLogPage";
import NotFound from "./pages/NotFound";
import { getTrackedFood, addTrackedFood, deleteTrackedFood } from "./services/foodService";

const App = () => {

  const [trackedFoods, setTrackedFoods] = useState([]);
  
  useEffect(() => {
    const fetchTrackedFoods = async () => {
      const trackedFoodsData = await getTrackedFood();

      setTrackedFoods(trackedFoodsData);

      console.log(trackedFoodsData);
    }

    fetchTrackedFoods();
  }, [])



  //state to be shared between: App -> AddPage -> FoodCard and App -> TrackedFoodPage

  //? handleAddTrackedFoods is passed down to FoodCard via prop drilling and when callback-ed,
  //?  will setTrackedFoods which is then passed as props to TrackedFoodPage to be displayed.
  const handleAddTrackedFood = async (foodItem) => {

    const newFood = await addTrackedFood(foodItem);
    if (newFood) {
      //use spread operator to keep old food items while adding the new tracked food
      setTrackedFoods([...trackedFoods, newFood]);
    }
  }

  const handleDeleteTrackedFoods = async (airtableId) => {
    await deleteTrackedFood(airtableId);

    setTrackedFoods(trackedFoods.filter((food) => food.id !== airtableId));
  };

  return (
    <>
      <h1>Nutrition Tracker</h1>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />
          }
        />
        {/*
        pass handleAddTrackedFood to AddPage as props where FoodCard lifts "name" state to.
        The "name" state will be handled in AddPage and lifted back up to App for it 
        to be passed as props to TrackedFoodPage 
        */}
        <Route
          path="/foods"
          element={<AddPage
            onAddTrackedFood={handleAddTrackedFood}
          />
          }
        />
        <Route
          path="/logs"
          element={<NutritionLogPage
            trackedFoods={trackedFoods}
            onDelete={handleDeleteTrackedFoods}
          />
          }
        />
        <Route
          path="*"
          element={<NotFound />
          }
        />
      </Routes>
    </>
  )
};

export default App;