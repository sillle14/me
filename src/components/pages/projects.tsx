import { FunctionComponent } from 'react';
import { Link, Typography } from '@mui/material'

import Page from '../helpers/page'
import Project from '../helpers/project'
import lhog from '../../assets/lhog.png'
import normalization from '../../assets/normalization.png'
import thesis from '../../assets/thesis.pdf'

const Projects: FunctionComponent = () => {

    return (
        <Page maxWidth="lg">
            <Typography variant="h3" component="h1">Projects</Typography>
            <Project title="Lewis' House of Games" imgSrc={lhog} altText="Lewis' House of Games Screenshot">
                <Typography>
                    A lobby framework for <Link
                    href="https://boardgame.io/"
                    rel="noopener"
                    target="_blank"
                    underline="hover">boardgame.io</Link> games
                    with basic login, persistent storage, and a simple leaderboard. I've implemented&nbsp;
                    <Link
                        href="https://boardgamegeek.com/boardgame/148228/splendor"
                        rel="noopener"
                        target="_blank"
                        underline="hover">Splendor</Link>,&nbsp;
                    <Link
                        href="https://boardgamegeek.com/boardgame/2651/power-grid"
                        rel="noopener"
                        target="_blank"
                        underline="hover">Power Grid</Link>, and&nbsp;
                    <Link
                        href="https://boardgamegeek.com/boardgame/42/tigris-euphrates"
                        rel="noopener  noreferrer"
                        target="_blank"
                        underline="hover">Tigris &#38; Euphrates</Link>,
                    but the LHoG framework can support any boardgame.io game.
                </Typography>
                <Typography>
                    Check it out <Link
                    href="https://lhog.lewissilletto.com/"
                    rel="noopener  noreferrer"
                    target="_blank"
                    underline="hover">here</Link>!
                </Typography>
                <br />
                <Typography>
                    Note that I've only developed these games for Chrome on desktop. Your mileage may vary on other browsers!
                </Typography>
            </Project>
            <Project title="A Parameterization of Convex Projective Groups" imgSrc={normalization} altText="Triangle group normalization">
                <Typography>
                    This is the senior thesis I wrote at Brown, advised by Professor Richard Schwartz. During this project, I first computationally
                    calculated convex projective groups using gradient descent. The results showed a one-parameter family of groups, which I then
                    was able to express as a one parameter formula.
                </Typography>
                <Typography>
                    I also made a conjecture about the geometry of these groups, which I backed up with some computational evidence.
                </Typography>
                <Typography>
                    Read the full paper <Link href={thesis} target="_blank" underline="hover">here</Link>.
                </Typography>
            </Project>
        </Page>
    );
}

export default Projects