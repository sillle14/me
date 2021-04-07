import React, { FunctionComponent } from 'react'
import { IconButton } from '@material-ui/core'

type ContactLinkProps = {
    ariaLabel: string,
    href: string
}
const ContactLink: FunctionComponent<ContactLinkProps> = ({ ariaLabel, href, children }) => (
    <IconButton
        aria-label={ariaLabel}
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
    >
        {children}
    </IconButton>
)

export default ContactLink