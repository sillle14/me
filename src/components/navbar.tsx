import {
    AppBar,
    Box,
    Link,
    Toolbar,
    styled
} from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import green from '@mui/material/colors/green'

import ContactLink from './helpers/contactLink'

const StyledAppBar = styled(AppBar)({
    background: green[900]
})
const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    overflow: 'auto',
    whiteSpace: 'nowrap'
})
const StyledLinkBox = styled(Box)(({theme}) => ({
    '& a': {
        fontSize: 'x-large',
        marginRight: theme.spacing(2)
    }
}))

const NavBar = () => {
    return (
        <StyledAppBar>
            <StyledToolbar>
                <StyledLinkBox>
                    <Link
                        to="/"
                        component={RouterLink}
                        color="inherit"
                        underline="hover">Home</Link>
                    <Link
                        to="projects"
                        component={RouterLink}
                        color="inherit"
                        underline="hover">Projects</Link>
                    <Link
                        to="road-trip"
                        component={RouterLink}
                        color="inherit"
                        underline="hover">Road Trip 2023</Link>
                </StyledLinkBox>
                <Box display="flex">
                    <ContactLink ariaLabel="GitHub" href="https://github.com/sillle14"><GitHub /></ContactLink>
                    <ContactLink ariaLabel="LinkedIn" href="https://www.linkedin.com/in/lewis-silletto/"><LinkedIn /></ContactLink>
                    <ContactLink ariaLabel="Email Me" href="mailto:lewis.silletto@gmail.com"><Email /></ContactLink>
                </Box>
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default NavBar