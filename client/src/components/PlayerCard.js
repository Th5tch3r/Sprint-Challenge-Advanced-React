import React from 'react';
import {Card, Feed } from 'semantic-ui-react';

const PlayerCard = (props) => (
    <Card>
        <Card.Content>
            <h1>{props.players.name}</h1>
        </Card.Content>
        <Card.Content>
            <Feed>
                <Feed.Event>
                    Searches:<h4>{props.players.searches}</h4>
                </Feed.Event>
                <Feed.Event>
                    Country: <h2>{props.players.country}</h2>
                </Feed.Event>
            </Feed>
        </Card.Content>
    </Card>
)

export default PlayerCard;