import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className='container profile'>
            <User 
                src='https://img1.looper.com/img/gallery/the-untold-truth-of-nebula/intro-1524504814.jpg'
                alt='Nebula'
                name='Nebula'
            />
            <Palette/>
        </div>
    )
}

export default Profile;