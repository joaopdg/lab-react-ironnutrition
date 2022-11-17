import './App.css';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [dishes, setDishes] = useState(foods);
  const [show, setShow] = useState(false);
  const [searchDish, setSearchDish] = useState(foods);

  const addDish = (newDish) => {
    const updateDishes = [newDish, ...dishes];
    setDishes(updateDishes);
    setSearchDish(updateDishes);
  };

  const foodSearch = (search) => {
    let updateDishes = dishes.filter((dish) =>
      dish.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setSearchDish(updateDishes);
  };

  const deleteDish = (dishName) => {
    const updateDishes = dishes.filter((dish) => {
      return dish.name !== dishName;
    });
    setDishes(updateDishes);
    setSearchDish(updateDishes);
  };

  return (
    <div className="App">
      <div className="appBody">
        <Divider />
        <h1>IRON NUTRITION</h1>

        <Search foodSearch={foodSearch} />

        <Divider>Food List</Divider>

        <Row style={{ width: '100%', justifyContent: 'center' }}>
          <div className="notFound">
            {dishes && <FoodBox dishes={searchDish} deleteDish={deleteDish} />}
            {dishes.length === 0 && (
              <img src="https://i.ibb.co/pz4149B/noFood.png" alt="noFood" />
            )}
          </div>
        </Row>
        <Divider />
        <Button onClick={() => setShow(!show)}>
          {show ? 'Hide Form' : 'Add New Food'}
        </Button>
        {show && <AddFoodForm addDish={addDish} />}
        <Divider />
      </div>
    </div>
  );
}

export default App;
