const { countProducts, fetchProduct } = require('../main');

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
    console.log(result);
    //then
    expect(result[0].price).toBe(5);
    expect(result[0].name).toBe("Pepsi-Cola");

    expect(result[1].name).toBe("Coca Cola");
});
