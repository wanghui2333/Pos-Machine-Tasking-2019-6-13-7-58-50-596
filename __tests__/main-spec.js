const { countProducts, fetchProduct, generateReceipts } = require('../main');

it('should count codes', () => {
    //given
    const codes = ['0003', '0003', '0001']

    //when
    const result = countProducts(codes);
    console.log(result);
    //then
    expect(result[0].count).toBe(2);
});

it('should fetch product', () => {
    //given
    const products = [
        { code: '0003', count: 2 },
        { code: '0001', count: 1 }
    ];

    //when
    const result = fetchProduct(products);
    //then
    expect(result.buyProductList[0].price).toBe(5);
    expect(result.buyProductList[0].name).toBe("Pepsi-Cola");

    expect(result.buyProductList[1].name).toBe("Coca Cola");
});

it('should print generate receipt', () => {
    //given
    const receiptInfo =
    {
        buyProductList: [
            { name: "Coca Cola", price: 3, count: 1 },
            { name: "Pepsi-Cola", price: 5, count: 2 },
            { name: "Dr Pepper", price: 7, count: 1 }
        ],
        totlePrice: 20
    };

    //when
    const result = generateReceipts(receiptInfo);

    //then
    expect(result).toBe("Receipts\n------------------------------------------------------------\nCoca Cola           3          1\nPepsi-Cola          5          2\nDr Pepper           7          1\n------------------------------------------------------------\nPrice: 20");
});
