const generateFakeProducts = () => {
    const fakeProducts = [];

    for (let i = 1; i <= 100; i++) {
        fakeProducts.push({
            name: `Producto falso ${i}`,
            price: Math.floor(Math.random() * 100) + 1, 
            description: `Descripción del producto falso ${i}`
        });
    }

    return fakeProducts;
};

const mockingProductsController = (req, res) => {
    try {
        const fakeProducts = generateFakeProducts();
        res.json(fakeProducts);
    } catch (error) {
        res.status(500).json({ error: 'Error al generar productos falsos' });
    }
};

export default mockingProductsController;
