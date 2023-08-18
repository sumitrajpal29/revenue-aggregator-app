import React from 'react';

function ProductTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Revenue</th>
                </tr>
            </thead>
            <tbody>
                {data.map(product => (
                    <tr key={product.name}>
                        <td>{product.name}</td>
                        <td>{product.revenue}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;
