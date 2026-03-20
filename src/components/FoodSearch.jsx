const FoodSearch = () => {
    const [ food , setFood ] = useState("");

    const handleChange = (event) => {
        setFood(event.target.value);
        console.log(food);
    }

    return (
        <label>
            <input type="text" value={ food } onChange={handleChange}></input> 
        </label>
    )
}

export default FoodSearch;