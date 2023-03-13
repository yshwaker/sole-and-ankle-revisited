import styled from 'styled-components/macro'
import { WEIGHTS } from '../../constants'

export const WrapNavLink = ({ href, children }) => {
  return (
    <LinkWrapper>
      <NavLink href={href}>{children}</NavLink>
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

  &::before,
  &::after {
    position: absolute;
    opacity: 0;
    transition: opacity, transform 400ms ease-out;
  }

  &::before {
    content: '[';
    left: 0;
  }

  &::after {
    content: ']';
    right: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
  }
`

const LinkWrapper = styled.div`
  position: relative;

  &:first-of-type ${NavLink} {
    color: var(--color-secondary);
  }

  &:hover ${NavLink}::before {
    opacity: 1;
    transform: translateX(-1ch);
  }

  &:hover ${NavLink}::after {
    opacity: 1;
    transform: translateX(1ch);
  }
`
