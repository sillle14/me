import React, { FunctionComponent } from 'react'
import {
    Container,
    Paper,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Home: FunctionComponent<{path: string}> = () => (
    <Container maxWidth="md">
        <Paper>
            <Typography variant="h2" component="h1">Lewis Silletto</Typography>
        </Paper>
    </Container>
)

export default Home