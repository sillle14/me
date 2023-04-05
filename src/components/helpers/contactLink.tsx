import { ReactNode } from 'react';
import { IconButton } from '@mui/material'

type ContactLinkProps = {
    ariaLabel: string,
    href: string,
    children: ReactNode
}
const ContactLink = ({ ariaLabel, href, children }: ContactLinkProps) => (
    <IconButton
        aria-label={ariaLabel}
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        size="large">
        {children}
    </IconButton>
)

export default ContactLink