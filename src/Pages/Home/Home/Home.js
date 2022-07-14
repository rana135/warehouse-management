import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import LuxuryEdge from '../LuxuryEdge/LuxuryEdge';
import ModernTable from '../ModerTable/ModernTable';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import StarModernHome from '../StarModernHome/StarModernHome';
import CustomerHighlight from './CustomerHighlight/CustomerHighlight';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StarModernHome></StarModernHome>
            <CustomerHighlight></CustomerHighlight>
            <Services></Services>
            <ModernTable></ModernTable>
            <LuxuryEdge></LuxuryEdge>
            <Facilities></Facilities>
            <Reviews></Reviews>
            <RelatedProduct></RelatedProduct>
        </div>
    );
};

export default Home;