import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from "./Store";
import {Address, Restaurant} from "./model/resturant";

let data: Restaurant = {
    name: "승원네 식당",
    category: "western",
    address: {
        city: "incheoi",
        detail: "somewhere",
        zipCode: 2323
    },
    menu: [{name: "rose pasta", price: 2000, category: "pasta"}]
}
const App: React.FC = () => {
    // 데이터를 useState에 넣기 useState<제네릭>
    const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
    const changeAddress = (address: Address) => {
        setMyRestaurant({...myRestaurant, address})
    }
    return (
        <div className="App">
            <Store info={myRestaurant} changeAddress={changeAddress}/>
        </div>
    );
}

export default App;
