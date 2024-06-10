import React from 'react'
import {Restaurant} from "./model/resturant";

interface OwnProps {
    info: Restaurant
}

const Store: React.FC<OwnProps> = (props) => {
    return (<div>Store</div>)
}

export default Store