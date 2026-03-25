import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router";
import { editTrackedFood, getTrackedFoodById } from "../services/foodService";

//update airtable to accept serving size (default 1 serving, allow users to change it here)

const initialState = {
  "product_name": "",
  "id": "",
  "calories_serving": "",
  "carbs_serving": "",
  "protein_serving": "",
  "fats_serving": "",
  "timestamp": "",
}


const EditTrackedFood = ({ onEdit }) => {
  const [formData, setFormData] = useState(initialState);
  const { trackedFoodId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getTrackedFoodById(trackedFoodId);

      setFormData({
        product_name: data.product_name,
        calories_serving: data.nutriments["energy-kcal_serving"],
        carbs_serving: data.nutriments.carbohydrates_serving,
        protein_serving: data.nutriments.proteins_serving,
        fats_serving: data.nutriments.fat_serving,
        timestamp: data.timestamp
      }); 

    };
    getData();

  }, [trackedFoodId]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedFoodData = {
      product_name: formData.product_name,
      timestamp: formData.timestamp,
      nutriments: {
        "energy-kcal_serving": formData.calories_serving,
        "carbohydrates_serving": formData.carbs_serving,
        "proteins_serving": formData.protein_serving,
        "fat_serving": formData.fats_serving,
      }
    };

    await editTrackedFood(trackedFoodId, updatedFoodData);

    if (onEdit) await onEdit();

    navigate('/logs');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Food</h2>

      <label>
        Name:
        <input
          name="product_name"
          value={formData.product_name}
          onChange={handleChange}
        ></input>
      </label>
      <br></br>

      <label>
        Calories:
        <input
          name="calories_serving"
          value={formData.calories_serving}
          onChange={handleChange}
        ></input>
      </label>
      <br></br>

      <label>
        Carbs:
        <input
          name="carbs_serving"
          value={formData.carbs_serving}
          onChange={handleChange}
        ></input>
      </label>
      <br></br>

      <label>
        Proteins:
        <input
          name="protein_serving"
          value={formData.protein_serving}
          onChange={handleChange}
        ></input>
      </label>
      <br></br>

      <label>
        Fats:
        <input
          name="fats_serving"
          value={formData.fats_serving}
          onChange={handleChange}
        ></input>
      </label>
      <br></br>

      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default EditTrackedFood;

// (<label>
//           Name:
//           <input name="name" value={formData.name} onChange={handleChange} />
//         </label>)




// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { getOnePet } from "../services/petService";


// export default function EditPetForm({ addPet }) {
//   const [formData, setFormData] = useState(initialState);
//   const { petId } = useParams();

//   useEffect(() => {
//     const getData = async () => {
//       const data = await getOnePet(petId);

//       setFormData(data.fields);
//     };
//     getData();
//   }, [petId]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "age") {
//       setFormData({ ...formData, age: event.target.valueAsNumber });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const pet = { ...formData, age: Number(formData.age) };
//     // const newPet = await updatePet(pet);
//     // updateState();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset>
//         <legend>Edit {petId}</legend>

//         <label>
//           Name:
//           <input name="name" value={formData.name} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Breed:
//           <input name="breed" value={formData.breed} onChange={handleChange} />
//         </label>

//         <br />
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button>Edit</button>
//       </fieldset>
//     </form>
//   );
// }
