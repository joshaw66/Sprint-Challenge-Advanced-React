import React from 'react';
import axios from 'axios';

export class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
        }
    }
    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/players`)
            .then(res => {
                this.setState({
                    players: res.data
                })
            })
        }
    render() {
        return(
            <div>
                {this.state.players.map(player => 
                    <li key = {player.id}> (
                        <div className = 'content'>
                            <h1>Player Namer: {player.name}</h1>
                            <h2>Results: {player.searches}</h2>
                            <h2>Player Country: {player.country}</h2>
                        </div>
                    </li>
                )}
            </div>
        )
    }
}
