import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants'
import Icon from '../Icon'
import Logo from '../Logo';
import MobileMenu from '../MobileMenu'
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton'
import VisuallyHidden from '../VisuallyHidden'

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
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
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

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`

export default Header;
