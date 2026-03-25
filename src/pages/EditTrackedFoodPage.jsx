import { useState } from "react"

//update airtable to accept serving size (default 1 serving, allow users to change it here)
const intitalState = {
            "product_name": "",
            "id": "",
            "calories_serving": "",
            "carbs_serving": "", 
            "protein_serving": "",
            "fats_serving": "",
            "timestamp": "",
}

export editTrackedFoods = () => {
    const [formData, setFormData] = useState(initialState);
    const {}
}