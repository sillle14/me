import { Box, Link, styled, Typography } from "@mui/material"
import { EntryType } from "./entryType"
import { Link as RouterLink } from 'react-router-dom'

const StyledImage = styled('img')(({theme}) => ({
    width: '100%',
    paddingTop: `${theme.spacing(2)}`
}))

const Entry = ({entry, previous, next}: {entry: EntryType, previous?: string, next?: string}) => {

    const drivingMiles = entry.drivingMiles ? 
                         <Typography sx={{fontWeight: 'bold'}}>{entry.drivingMiles} miles driven</Typography> :
                         null

    const hikingMiles = entry.hikingMiles ? 
                        <Typography sx={{fontWeight: 'bold'}}>{entry.hikingMiles} miles hiked</Typography> :
                        null

    const content = entry.content.map((content, i) => {
        if (content.type === 'p') {
            return <Typography key={i}>{content.text}</Typography>
        } else {
            return <div key={i}>
                <StyledImage alt={content.alt} src={content.source}/>
                <Box sx={{textAlign: 'center', typography: 'caption'}}>{content.caption}</Box>
            </div>
        }
    })

    const navigation = []
    if (previous) {
        navigation.push(<Link to={`../${previous}`} component={RouterLink} underline="hover">Previous</Link>)
    }
    if (previous && next) {
        navigation.push(<span>&nbsp;|&nbsp;</span>)
    }
    if (next) {
        navigation.push(<Link to={`../${next}`} component={RouterLink} underline="hover">Next</Link>)
    }

    return <>
        <Typography variant="h4" component="h1">{`${entry.date} - Day ${entry.day}`}</Typography>
        <Typography variant="h5">{entry.location}</Typography>
        {drivingMiles}
        {hikingMiles}
        {content}
        <Box sx={{textAlign: 'center'}}>{navigation}</Box>
    </>
}

export default Entry