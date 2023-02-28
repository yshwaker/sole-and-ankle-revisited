import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants'
import Icon from '../Icon'
import Logo from '../Logo';
import MobileMenu from '../MobileMenu'
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton'

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
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <ButtonGroup>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </ButtonGroup>
        <Side />
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
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndBelow} {
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
    padding: 18px 16px;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 4.5vw - 1.25rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`

const ButtonGroup = styled.div`
  margin-left: auto;
  /* gap: clamp(1rem, 3.2vw + 0.2rem, 2rem); */
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 16px;
  }
`

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndBelow} {
    &:last-of-type {
      display: none;
    }
  }
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
