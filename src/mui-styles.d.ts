import { Theme } from '@mui/material';

declare module '@mui/private-theming' {
  interface DefaultTheme extends Theme {}
}