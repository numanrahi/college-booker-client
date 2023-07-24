import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css'

const TopNavbar = () => {
    return (
        <div className='d-flex bg-white-cus justify-content-around py-3'>
            <div className='fs-5'>College Booker</div>
            <div className='d-flex'>
                <Link to="/" className='px-2 text-decoration-none text-black fs-5'>Home</Link>
                <Link to="/colleges" className='px-2 text-decoration-none text-black fs-5'>Colleges</Link>
                <Link className='px-2 text-decoration-none text-black fs-5'>Admission</Link>
                <Link className='px-2 text-decoration-none text-black fs-5'>My College</Link>
            </div>
            <div>
                <Link to="/login" className='btn btn-primary'>Login</Link>
            </div>
        </div>
    );
};

export default TopNavbar;