import React from 'react';
import axios from 'axios';

export class PlayerCard extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            users:[],
        }
    }
    componentDidMount(){
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
        }
    render(){
        return(
            <div className = 'mainContainer'>
                {this.state.users.map(user => 
                    <li key = {user.id}> (
                        <div className = 'content'>
                            <h1>Player Namer: {user.name}</h1>
                            <h2>Results: {user.searches}</h2>
                            <h3>Player Country: {user.country}</h3>
                        </div>
                    </li>
                )}
            </div>
        )
    }
}

export default PlayerCard;