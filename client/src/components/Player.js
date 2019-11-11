import React from 'react';

function Player(props) {
    
        return(
            <div className="player">
                <h2>Name: {props.players.name}</h2>
                <h3>Country: {props.players.country}</h3>
                <h3>Number of Searches: {props.players.searches}</h3>
            </div>
        );
    
};

export default Player;