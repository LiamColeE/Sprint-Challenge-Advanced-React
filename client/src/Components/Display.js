import React from 'react';
import Card from './Card'

class Display extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/players')
            .then((res => res.json()))
            .then((res) => {
                console.log(res);
                this.setState({ players: res })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        if (this.state.players === {}) {
            return (
                <h1>Loading...</h1>
            )
        }
        else {
            return (
                <div>
                    <h1>HEY</h1>
                    {
                        this.state.players.map((player) => { return <Card player={player} key={player.id} /> })
                    }
                </div>
            );
        }
    }
}

export default Display;
