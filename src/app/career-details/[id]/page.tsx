import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import EbookMain from '@/components/e-book/EbookMain';
import CareerDetailsMain from '@/components/career-details/careerDetailsMain';

const CareerDetails = ({ params }: { params: { id: string } }) => {

    const id = decodeURIComponent(params.id)
    return (
        <>
            <Wrapper>
                <main>
                    <CareerDetailsMain id={id}/>
                    {/* <div>E-book</div> */}
                </main>
            </Wrapper>
        </>
    );
};

export default CareerDetails;