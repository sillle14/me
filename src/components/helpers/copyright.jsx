import { Typography, styled } from '@mui/material'

const Root = styled(Typography)(({theme}) => ({
    margin: theme.spacing(3, 'auto'),
    fontSize: 'smaller',
    opacity: 0.5
}))

export default function Copyright() {
    return <Root align="center">{`© ${new Date().getFullYear()} Lewis Silletto`}</Root>
}
