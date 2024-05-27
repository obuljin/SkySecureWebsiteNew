import React from 'react';

import CartArea from './CartArea';
import Breadcrumb from '@/sheardComponent/Breadcrumb';

const CartMain = () => {
    return (
        <>
            <Breadcrumb pageTitle="Cart" />
            <CartArea/>
            
        </>
    );
};

export default CartMain;