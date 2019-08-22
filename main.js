const db = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
];

function countProducts(codes) {

    let map = new Map();
    codes.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    });

    let result = [];
    map.forEach((value, key) => {
        result.push({
            code: key,
            count: value
        })
    });
    return result;
}

function fetchProduct(products) {

    let result = [];
    products.forEach(product => {
        db.forEach(element => {
            if (element.id === product.code) {
                product.price = element.price;
                product.name = element.name;
                result.push(product);
                return false;
            }
        });
    });
    return result;
}
module.exports = {
    countProducts,
    fetchProduct
};
