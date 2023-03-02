/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from '@reach/dialog'
import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants'

import Icon from '../Icon'
import UnstyledButton from '../Unstyle  dButton'
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={1} />
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-gray-700-transparent);
  /* width: 300px; */
`

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  /* give the button more area to click */
  padding: 16px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Filler = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
`

export default MobileMenu;
