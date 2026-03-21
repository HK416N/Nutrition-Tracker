import exampleData from "../exampleData";

//? Food Search
export const getFoodSearch = async (query) => { //remember to add await

    return exampleData.products; //pass exammple data from exampleData.js to FoodCard for testing
}


//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}