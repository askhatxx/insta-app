import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        users: []
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    onUsersLoaded = (users) => {
        this.setState({
            error: false,
            users
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            return (
                <User 
                    key={item.id}
                    src={item.src}
                    alt={item.alt}
                    name={item.name}
                    min
                />
            )
        })
    }
    
    render() {
        const {error, users} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(users);
        
        return (
            <div className='right'>
                <User 
                    src='https://img1.looper.com/img/gallery/the-untold-truth-of-nebula/intro-1524504814.jpg'
                    alt='Nebula'
                    name='Nebula'
                />
                <div className='users__block'>
                    {items}
                </div>
            </div>
        )
    }
}