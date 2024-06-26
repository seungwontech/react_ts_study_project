import React from 'react'
import {Menu} from "./src/model/resturant";

interface OwnProps extends Omit<Menu, 'price'> {
    showBestMenuName(name: string): string
}

// 타입으로 extends 할 수 있음
/*type OwnProps = Menu & {
    showBestMenuName(name: string): string
}*/

const BestMenu: React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
    return (
        <div>{name}</div>
    )
}

export default BestMenu