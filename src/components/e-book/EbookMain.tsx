import EbookHome from '@/sheardComponent/EbookHome';
import React from "react";
import EbookForm from "./EbookForm"
import EbookWorkShop from "./EbookWorkShop"

const EbookMain = () => {
    return (
        <>
            <EbookHome pageTitle='' />
            <EbookForm />
            <EbookWorkShop />
        </>
    );
}
export default EbookMain