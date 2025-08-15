import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList> 
            <FeatureJobs></FeatureJobs>
            
            <h2 className='text-center'>This is Home</h2>
        </div>
    );
};

export default Home;