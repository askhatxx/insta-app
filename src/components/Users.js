import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className='right'>
            <User 
                src='https://img1.looper.com/img/gallery/the-untold-truth-of-nebula/intro-1524504814.jpg'
                alt='Nebula'
                name='Nebula'
            />
            <div className='users__block'>
                <User 
                    src='https://img1.looper.com/img/gallery/the-untold-truth-of-nebula/intro-1524504814.jpg'
                    alt='Nebula'
                    name='Nebula'
                    min
                />
                <User 
                    src='https://img1.looper.com/img/gallery/the-untold-truth-of-nebula/intro-1524504814.jpg'
                    alt='Nebula'
                    name='Nebula'
                    min
                />
                <User 
                    src='https://img1.looper.com/img/gallery/the-untold-truth-of-nebula/intro-1524504814.jpg'
                    alt='Nebula'
                    name='Nebula'
                    min
                />
                <User 
                    src='https://img1.looper.com/img/gallery/the-untold-truth-of-nebula/intro-1524504814.jpg'
                    alt='Nebula'
                    name='Nebula'
                    min
                />
            </div>
        </div>
    )
}