import styled from 'styled-components/macro'
import { WEIGHTS } from '../../constants'

export const FlipNavLink = ({ href, children }) => {
  return (
    <NavLink>
      <Text href={href}>{children}</Text>
      <HoverText aria-hidden={true} href={href}>
        {children}
      </HoverText>
    </NavLink>
  )
}

const NavLink = styled.a`
  display: block;
  position: relative;
  /* Text slide up effect */
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Text = styled.span`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 500ms;

    ${NavLink}:hover & {
      transform: translateY(-100%);
      transition: transform 250ms;
    }
  }
`

const HoverText = styled(Text)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 100%;
`


