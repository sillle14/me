import React, { FunctionComponent } from 'react'
import { Grid, Link, Typography, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Page from '../helpers/page'
import headshot from '../../assets/headshot.jpg'

const useStyles = makeStyles((theme) => ({
    text: {
        '& p': { fontSize: 'large' }
    },
    image: {
        width: '100%',
    }
}))

const Home: FunctionComponent<{ path: string }> = () => {

    const classes = useStyles()
    const theme = useTheme()
    const desktop = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Page maxWidth="md">
            <Typography variant="h2" component="h1">Lewis Silletto</Typography>
            <Grid container spacing={desktop ? 10 : 2}>
                <Grid item xs={12} sm={6}>
                    <img className={classes.image} src={headshot} alt="Lewis hiking" />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.text}>
                    <Typography>Software engineer at <Link href="https://inboxhealth.com">Inbox Health</Link> with a background in math and data science.</Typography>
                    <br />
                    <Typography>Experience with Python, React, Docker, Redis, Postgres, and more.</Typography>
                    <br />
                    <Typography>Loves hiking, climbing, board games, and cooking.</Typography>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Home