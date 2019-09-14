import React from 'react';

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>{this.props.player.name} from {this.props.player.country}</h1>
            </div>
        );
    }
}

export default Card;
