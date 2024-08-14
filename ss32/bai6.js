let productList = [
    {
        id: 1,
        name: "iphone12",
        price: 20000000
    },
    {
        id: 2,
        name: "iphone11",
        price: 10000000
    },
    {
        id: 3,
        name: "iphone10",
        price: 50000000
    }
]

productList.sort((a, b) => (a.price - b.price));
console.log(productList);