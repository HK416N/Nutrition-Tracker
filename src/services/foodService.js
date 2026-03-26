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

//?POST tracked foods:

export const addTrackedFood = async (foodItem) => {
  const data = {
    fields: {
      "product_name": String(foodItem.product_name), //!double check this
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

//? get one food  item for edit and details (if theres time)

export const getTrackedFoodById = async (foodId) => {
  const url = `${AIRTABLE_URL}${foodId}`

  try {
    const response = await fetch(url, {
      headers: airtableHeader,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return {
      id: result.id,
      product_name: result.fields.product_name,
      timestamp: result.fields.timestamp,
      nutriments: {
        "energy-kcal_serving": result.fields.calories_serving,
        "carbohydrates_serving": result.fields.carbs_serving,
        "proteins_serving": result.fields.protein_serving,
        "fat_serving": result.fields.fats_serving,
      }
    }

  } catch (error) {
    console.error(error.message);

  }
}

//? Edit tracked Fodos

export const editTrackedFood = async (foodId, updatedData) => {
  const url = `${AIRTABLE_URL}${foodId}`;

  const data = {
    fields: {
      "product_name": String(updatedData.product_name),
      "calories_serving": String(updatedData.nutriments?.["energy-kcal_serving"] ?? 0),
      "carbs_serving": String(updatedData.nutriments?.carbohydrates_serving ?? 0),
      "protein_serving": String(updatedData.nutriments?.proteins_serving ?? 0),
      "fats_serving": String(updatedData.nutriments?.fat_serving ?? 0),
      "timestamp": Number(updatedData.timestamp)
    }
  };


  const options = {
    method: "PATCH",
    headers: airtableHeader,
    body: JSON.stringify(data),
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error(error.message);
  }

}


//? Food Search


// //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const getFoodSearch = async (query) => {
  const url = `${OPEN_FOOD_FACTS_BASE_URL}?search_terms=${query}&search_simple=1&action=process&json=1&fields=product_name,nutriments,_id,image_url&app_name=NutritionTrackerApp&app_version=1.0`
  try {
    const response = await fetch(url,
      {
        method: 'GET',
        headers: {
          'User-Agent': 'NutritionTrackerApp/1.0 (hansdarrelkoh@gmail.com)',
          'Accept': 'application/json'
        }
      });

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

