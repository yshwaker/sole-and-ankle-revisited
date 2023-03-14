/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from '@reach/dialog'
import React from 'react';
import styled, { keyframes } from 'styled-components/macro'
import { WEIGHTS } from '../../constants'

import Icon from '../Icon'
import UnstyledButton from '../UnstyledButton'
import VisuallyHidden from '../VisuallyHidden';

const LINKS = [
  {
    href: '/sale',
    name: 'Sale',
  },
  {
    href: '/new',
    name: 'New&nbsp;Releases',
  },
  {
    href: '/men',
    name: 'Men',
  },
  {
    href: '/women',
    name: 'Women',
  },
  {
    href: '/women',
    name: 'Women',
  },
  {
    href: '/kids',
    name: 'Kids',
  },
  {
    href: '/collections',
    name: 'Collections',
  },
]

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
          {LINKS.map(({ href, name }, index) => (
            <NavLink key="name" href={href} animationDelay={200 + index * 50}>
              {name}
            </NavLink>
          ))}
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-gray-700-transparent);
  /* width: 300px; */
  animation: ${fadeIn} 300ms both;
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
  animation: ${slideIn} 400ms 100ms both cubic-bezier(0.21, 0.58, 0.72, 0.89),
    ${fadeIn} 500ms 200ms both;
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

  animation: ${fadeIn} 500ms both;
  animation-delay: ${(props) => props.animationDelay}ms;
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
