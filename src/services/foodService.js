import exampleData from "../exampleData";

const AIRTABLE_BASE_URL = import.meta.env.VITE_AIRTABLE_BASE_URL;
const AIRTABLE_KEY = import.meta.env.VITE_AIRTABLE_KEY;

const OPEN_FOOD_FACTS_BASE_URL = import.meta.env.VITE_FOOD_SEARCH_BASE_URL;

//just added "Tracker" to target specific table but keep it 
// separate from base in case I want to do something else with the BASE_URL
const AIRTABLE_URL = `${AIRTABLE_BASE_URL}Tracker/`



// extracted header from the Airtable functions for future use
const airtableHeader = {
    Authorization: `Bearer ${AIRTABLE_KEY}`,
    'Content-Type': 'application/json'
}

//? GET tracked foods:

export const getTrackedFood = async () => {
  try {
    const response = await fetch(AIRTABLE_URL, {
        headers: airtableHeader,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    
    const trackedFoods = result.records.map(record => ({
        id: record.id,
        timestamp: record.fields.timestamp,
        product_name: record.fields.product_name,
        nutriments: {
            "energy-kcal_serving": record.fields.calories_serving, // Match Airtable column
            "carbohydrates_serving": record.fields.carbs_serving,
            "proteins_serving": record.fields.protein_serving,
            "fat_serving": record.fields.fats_serving,
        }
    }))
    
    return trackedFoods;
  } catch (error) {
    console.error(error.message);
  }
}

//! getAllPets pets example
// export async function getAllPets() {
//   const url = "https://api.airtable.com/v0/appqu0bmXr7L70dI2/pets";

//   const response = await fetch(url, {
//     headers: {
//       // "Content-Type": "application/json",
//       authorization: `Bearer ${TOKEN}`,
//     },
//   });
//   if (!response.ok) {
//     throw new Error(`Response status: ${response.status}`);
//   }

//   const result = await response.json();
//   return result;
// }

//?POST tracked foods:

export const addTrackedFood = async (foodItem) => {
    const data = {
        fields: {
            //was mismatched, i was not sending the same key-value pairs to airtable
            "product_name": String(foodItem.product_name), //!double check this
            "id": String(foodItem._id || ""), 
            "calories_serving": String(foodItem.nutriments?.["energy-kcal_serving"] ?? 0),
            "carbs_serving": String(foodItem.nutriments?.carbohydrates_serving ?? 0),
            "protein_serving": String(foodItem.nutriments?.proteins_serving ?? 0),
            "fats_serving": String(foodItem.nutriments?.fat_serving ?? 0),
            "timestamp": Number(Date.now()) 
        }
    };

    const options = {
        method: "POST",
        headers: airtableHeader,
        body: JSON.stringify(data),
    } 

  try {
    const response = await fetch(AIRTABLE_URL, options);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    
    return {
        id: result.id,
        timestamp: result.fields.timestamp,
        product_name: result.fields.product_name,
        nutriments: {
            "energy-kcal_serving": result.fields.calories_serving, // Match Airtable column
            "carbohydrates_serving": result.fields.carbs_serving,
            "proteins_serving": result.fields.protein_serving,
            "fat_serving": result.fields.fats_serving,
        }
    };
  } catch (error) {
    console.error(error.message);
  }
}


//!createPet example
// export async function createPet(pet) {
//   const url = "https://api.airtable.com/v0/appqu0bmXr7L70dI2/pets";
//   const data = {
//     fields: pet, // { ...pet, age: Number(pet.age) }, // { name: "example", breed: "bbb", age: 10 },
//   };
//   // data.fields.age = Number(data.fields.age);
//   const options = {
//     method: "POST",
//     headers: {
//       authorization: `Bearer ${TOKEN}`,
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     // console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error.message);
//   }
// }






//? DELETE Tracked Foods

export const deleteTrackedFood = async (timestamp) => {
    
    const url = `${AIRTABLE_URL}${timestamp}`

    try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: airtableHeader,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
    
}


//! deletePet example
// export async function deletePet(petId) {
//   // const petId = "rec23AmVDNGCfOUEk";
//   const url = `https://api.airtable.com/v0/appqu0bmXr7L70dI2/pets/${petId}`;
//   try {
//     const response = await fetch(url, {
//       method: "DELETE",
//       headers: {
//         authorization: `Bearer ${TOKEN}`,
//         "content-type": "application/json",
//       },
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     // console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error.message);
//   }
// }






//? Food Search

// export const getFoodSearch = async (query) => { //remember to add await
    
//     return exampleData.products; //pass exammple data from exampleData.js to FoodCard for testing
// }


// //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const getFoodSearch = async (query) => {
  const url = `${OPEN_FOOD_FACTS_BASE_URL}?search_terms=${query}&search_simple=1&action=process&json=1&fields=product_name,nutriments,_id,image_url`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.products || [];
  } catch (error) {
    console.error(error.message);
    return []; //to prevent map from crashing the page
  }
}
