export default function calculateItemRevenue(data) {
    const productRevenueMap = {};
    data.forEach(file => {
        file.products.forEach(product => {
            if (!productRevenueMap[product.name]) {
                productRevenueMap[product.name] = {
                    name: product.name,
                    revenue: 0
                };
            }
            productRevenueMap[product.name].revenue += product.unitPrice * product.sold;
        });
    });

    const roundedProductRevenues = Object.values(productRevenueMap).map(product => ({
        name: product.name,
        revenue: parseFloat(product.revenue.toFixed(0))
    }));
    const sortedProductRevenues = roundedProductRevenues.sort((a, b) => a.name.localeCompare(b.name));
    // console.log(productRevenueMap);
    return Object.values(sortedProductRevenues);
}
