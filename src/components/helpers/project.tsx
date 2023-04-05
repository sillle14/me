import { FunctionComponent } from 'react';
import { Grid, Typography, styled } from '@mui/material'

const StyledGrid = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(2)
}))
const StyledImage = styled('img')({
    width: '100%',
})

const Project: FunctionComponent<{ title: string, imgSrc: string, altText: string }> = ({ title, imgSrc, altText, children }) => {

    return (
        <StyledGrid container spacing={2}>
            <Grid item xs={12} sm={8}>
                <Typography variant="h4" component="h2">{title}</Typography>
                {children}
            </Grid>
            <Grid item xs={12} sm={4}>
                <StyledImage src={imgSrc} alt={altText} />
            </Grid>
        </StyledGrid>
    )
}

export default Project