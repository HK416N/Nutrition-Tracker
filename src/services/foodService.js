import exampleData from "../exampleData";

//? Food Search
export const getFoodSearch =async (query) => { //remember to add await
    // if(!exampleData || !exampleData.products){
    //     return[];
    // }
    return exampleData.products; //pass exammple data from exampleData.js to FoodCard for testing
}


