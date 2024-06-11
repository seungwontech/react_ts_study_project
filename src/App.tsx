import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from "./Store";
import {Address, Restaurant} from "./model/resturant";
import BestMenu from "../BestMenu";

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
    const showBestMenuName = (name: string) => {
        return name
    }
    return (
        <div className="App">
            <Store info={myRestaurant} changeAddress={changeAddress}/>
            <BestMenu name="불고기피자" category="피자" price={1000} showBestMenuName={showBestMenuName}/>
        </div>
    );
}

export default App;
