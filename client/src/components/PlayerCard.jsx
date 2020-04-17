import React from 'react';
import axios from 'axios';

class Card extends React.Component {
    constructor (){
        super();
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/players')

        .then(res=>{
            console.log(res.data)
            this.setState({
                users:res.data
            })
        })
    }
    render(){
        return(
            <div className = 'mainContainer' data-testid = 'axiosReturnTest'>
                {this.state.users.map(users=>(
                    <div className = 'content'>
                        <h1>{users.name}</h1>
                        <h2>Results: {users.searches}</h2>
                        <h3>{users.country}</h3>
                        <img className = 'image'></img>
                    </div>
                ))}
            </div>
        )
    }
}

export default PlayerCard;