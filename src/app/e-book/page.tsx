import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import EbookMain from '@/components/e-book/EbookMain';

const Ebook = () => {
    return (
        <>
            <Wrapper>
                <main>
                   <EbookMain/>
                    {/* <div>E-book</div> */}
                </main>
            </Wrapper>
        </>
    );
};

export default Ebook;