import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className='post'>
                <User 
                    src='https://img1.looper.com/img/gallery/the-untold-truth-of-nebula/intro-1524504814.jpg'
                    alt='Nebula'
                    name='Nebula'
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='post__name'>
                    some account
                </div>
                <div className='post__descr'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        )
    }
}