import styled from 'styled-components/macro'
import { WEIGHTS } from '../../constants'

export const FlipNavLink = ({ href, children }) => {
  return (
    <LinkWrapper>
      <NavLink href={href}>{children}</NavLink>
      <FlippedNavLink aria-hidden={true} href={href}>
        {children}
      </FlippedNavLink>
    </LinkWrapper>
  )
}

const NavLink = styled.a`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 200ms;
  }
`

const FlippedNavLink = styled(NavLink)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 100%;
`

const LinkWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &:first-of-type ${NavLink} {
    color: var(--color-secondary);
  }

  &:hover ${NavLink} {
    transform: translateY(-100%);
  }
`
