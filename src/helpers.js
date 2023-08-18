// src/helpers.js
export function formatNumber(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}

// src/helpers.js
export const mergeAndSumProducts = (data) => {
    const mergedProducts = {};

    data.forEach((branch) => {
        branch.products.forEach((product) => {
            if (mergedProducts[product.name]) {
                mergedProducts[product.name].totalRevenue += product.totalRevenue;
            } else {
                mergedProducts[product.name] = { ...product };
            }
        });
    });

    return Object.values(mergedProducts);
};
