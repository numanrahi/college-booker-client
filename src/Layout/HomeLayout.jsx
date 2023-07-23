import React from 'react';
import TopNavbar from '../components/TopNavbar/TopNavbar';
import Banner from '../components/Banner/Banner';
import './HomeLayout.css'

const HomeLayout = () => {
    return (
        <div>
            <div className='bg-img'>
            <TopNavbar></TopNavbar>
            <Banner></Banner>
            </div>
        </div>
    );
};

export default HomeLayout;