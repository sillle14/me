import { FunctionComponent } from 'react';
import { Grid, Link, Typography, useMediaQuery, useTheme, styled } from '@mui/material'

import Page from '../helpers/page'
import headshot from '../../assets/headshot.jpg'

const StyledGrid = styled(Grid)({
    '& p': { fontSize: 'large' }
})
const StyledImage = styled('img')({
    width: '100%',
})

const Home: FunctionComponent = () => {
    const theme = useTheme()
    const desktop = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Page maxWidth="md">
            <Typography variant="h2" component="h1">Lewis Silletto</Typography>
            <Grid container spacing={desktop ? 10 : 2}>
                <Grid item xs={12} sm={6}>
                    <StyledImage src={headshot} alt="Lewis hiking" />
                </Grid>
                <StyledGrid item xs={12} sm={6}>
                    <Typography>Software engineer at <Link href="https://inboxhealth.com" underline="hover">Inbox Health</Link> with a background in math and data science.</Typography>
                    <br />
                    <Typography>Experience with Python, React, Docker, Redis, Postgres, and more.</Typography>
                    <br />
                    <Typography>Loves hiking, climbing, board games, and cooking.</Typography>
                </StyledGrid>
            </Grid>
        </Page>
    );
}

export default Home