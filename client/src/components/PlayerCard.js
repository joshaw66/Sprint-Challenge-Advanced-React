import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f0ead6; 
    padding-top: 3%;
`

const Container = styled.div`
    margin: 1.5%;
    display: flex;
    border: solid 2px grey;
    max-width: 25%;
    margin-left: 35%;
    padding-left: 3%;
    background-color: white;
    border-radius: 7px;
`

const Name = styled.h1`
    display: flex;
    justify-content: flex-start;
    color: darkblue;
`

const Headline = styled.h1`
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    text-decoration: bold;
    background-color: lightgrey;
    padding: 3%;
`

const PlayerSearches = styled.h2`
    display: flex;
    justify-content: flex-start;
    color: lightblue;
`

const Country = styled.h2`
    display: flex;
    justify-content: flex-start;
    color: grey;
`

export class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`).then(response => {
            console.log(response.data);
                this.setState({
                    players: response.data
                });
            });
        }

    render() {
        return(
            <Page>
                <Headline>
                    INTERNATIONAL WOMEN'S SOCCER ROSTER 
                </Headline>
                {this.state.players.map(player => 
                    <Container key = {player.id}>
                        <div className = 'content'>
                            <Name>{player.name}</Name>
                            <PlayerSearches>Search Count: {player.searches}</PlayerSearches>
                            <Country>{player.country}</Country>
                        </div>
                    </Container>
                )}
            </Page>
        )
    }
}

