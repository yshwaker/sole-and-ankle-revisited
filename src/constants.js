export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
    transparent: 'hsl(220deg 5% 40% / 0.8)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
}

const BREAKPOINTS = {
  laptopMax: 1300,
  tabletMax: 950,
  phoneMax: 600,
}

export const QUERIES = {
  laptopAndBelow: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  phoneAndBelow: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
}
