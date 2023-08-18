import React from 'react';
import { formatNumber } from '../helpers';

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{formatNumber(product.totalRevenue)}</td>
        </tr>
    );
};

export default ProductRow;
