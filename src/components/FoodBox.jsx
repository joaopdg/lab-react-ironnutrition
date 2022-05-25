import React, {useState} from 'react'
import { Card, Row, Button } from 'antd';

function FoodBox(props) {
    const {dishes, deleteDish} = props

  return (
    <div>
    <Row>
    {dishes.map((dish) => {
        return (
      <Card
        title={dish.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={dish.image} height={60} alt="food" />
        <p>Calories: {dish.calories}</p>
        <p>Servings: {dish.servings}</p>
        <p>
          <b>Total Calories: {dish.calories * dish.servings} </b> kcal
        </p>
        <Button type="primary" onClick={()=>deleteDish(dish.name)}> Delete </Button>
      </Card>
    )
    })}
    </Row>
    </div>
  )
}

export default FoodBox