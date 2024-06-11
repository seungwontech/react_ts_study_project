export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
}

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
}

export type Menu = {
    name: string;
    price: number;
    category: string;
}

// Address 에서 zipCode 빼고 싶을 때 Omit<>
export type AddressWithoutZipCode = Omit<Address, 'zipCode'>
// Restaurant 에서 category만 가져오고 싶을 때 Pick<>
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

// Api에서 타입스크립트 사용하기
export type ApiResponse<T> = {
    data: T[];
    totalPage: number;
    page: number;
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
