import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from "./Store";
import {Restaurant} from "./model/resturant";

let data:Restaurant = {
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
    return (
        <div className="App">
            <Store info={data}/>
        </div>
    );
}

export default App;
