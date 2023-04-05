import { FunctionComponent } from 'react';
import { Container, Paper, styled } from '@mui/material'

import Copyright from './copyright'

const StyledContainer = styled(Container)(({theme}) => ({
    marginTop: theme.spacing(13),
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(18)
    }
}))
const StyledPaper = styled(Paper)(({theme}) => ({
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    [theme.breakpoints.up('sm')]: {
        padding: `${theme.spacing(4)} ${theme.spacing(6)}`
    }
}))
const Page: FunctionComponent<{ maxWidth: "sm" | "md" | "lg" }> = ({ maxWidth, children }) => {

    return (
        <>
            <StyledContainer maxWidth={maxWidth}>
                <StyledPaper>
                    {children}
                </StyledPaper>
            </StyledContainer>
            <Copyright />
        </>
    )
}

export default Page