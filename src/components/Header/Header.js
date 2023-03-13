import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants'
import Icon from '../Icon'
import Logo from '../Logo';
import MobileMenu from '../MobileMenu'
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton'
import VisuallyHidden from '../VisuallyHidden'

const FlipNavLink = ({ href, children }) => {
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


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <FlipNavLink href="/sale">Sale</FlipNavLink>
          <FlipNavLink href="/new">New&nbsp;Releases</FlipNavLink>
          <FlipNavLink href="/men">Men</FlipNavLink>
          <FlipNavLink href="/women">Women</FlipNavLink>
          <FlipNavLink href="/kids">Kids</FlipNavLink>
          <FlipNavLink href="/collections">Collections</FlipNavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" strokeWidth={1} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndBelow} {
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
    padding-left: 16px;
    padding-right: 16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 4.5vw - 1.25rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;
  margin-left: auto;
  /* gap: clamp(1rem, 3.2vw + 0.2rem, 2rem); */

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 16px;
  }
`

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndBelow} {
    flex: revert;
  }
`

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`

const ShoppingBagButton = styled(UnstyledButton)`
  // add it so that it's optically equal distance bag-search and search-hamburger.
  transform: translateX(-2px);
`



export default Header;
