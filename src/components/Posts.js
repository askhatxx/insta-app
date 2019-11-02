import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className='left'>
                <Post src='https://images.unsplash.com/photo-1571217668979-f46db8864f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='inst'/>
                <Post src='https://cdn.shopify.com/s/files/1/0037/0956/7076/files/westboundary-photography-chris-gill-60180-unsplash_1200x734.jpg?v=1545660299' alt='second'/>
            </div>
        )
    }
}