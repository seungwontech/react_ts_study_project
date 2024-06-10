// let data = {
//     name: "승원네 식당",
//     category: "western",
//     address: {
//         city: "incheoi",
//         detail: "somewhere",
//         zipCode: 2323
//     },
//     menu: [{name: "rose pasta", price: 2000, category: "pasta"}]
// }

export type Restaurant = {
    name : string;
    category : string;
    address : {
        city : string;
        detail : string;
        zipCode : number;
    };
    menu : {
        name : string
        price : number;
        category : string;
    }[];
}