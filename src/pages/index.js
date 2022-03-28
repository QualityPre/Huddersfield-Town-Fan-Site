import { graphql } from 'gatsby';
import React from 'react';

import Player from '../components/PlayerInfo/Player';

export default function IndexPage({ data }) {
    const players = data.players.nodes;
    return (
        <div className="mb-10 md:container mx-auto text-white  ">
            <Player players={players} />
        </div>
    );
}
export const query = graphql`
    query PlayerQuery {
        players: allSanityPlayer {
            nodes {
                name
                id
                slug {
                    current
                }
                appearances
                goals
                startYear(formatString: "YYYY")
                endYear(formatString: "YYYY")
            }
        }
    }
`;
