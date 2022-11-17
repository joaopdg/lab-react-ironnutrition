import React, {useState} from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
const [name, setName] = useState('')
const [image, setImage] = useState('')
const [calories, setCalories] = useState(0)
const [servings, setServings] = useState(0)

const handleName = (e) => setName(e.target.value)
const handleImage = (e) => setImage(e.target.value)
const handleCalories = (e) => setCalories(e.target.value)
const handleServings = (e) => setServings(e.target.value)

const {addDish} = props

const handleSubmit = (e) => {
    e.preventDefault()
    const newDish = {name, image, calories, servings}
    addDish(newDish)
    setName('')
    setImage('')
    setCalories(0)
    setServings(0)
}

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <Divider>Add New Food</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={handleName} />

        <label>Image</label>
        <Input value={image} type="text" onChange={handleImage} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={handleCalories} />

        <label>Servings</label>
        <Input value={servings} type="number" onChange={handleServings} />
<br />
<br />
        <button className='submitBtn' type="submit">Add Food</button>

    
      </form>
    </div>
  );
}

export default AddFoodForm;
