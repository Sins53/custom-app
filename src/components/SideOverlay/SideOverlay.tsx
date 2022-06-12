import React from "react";
// import { Modal } from 'reactstrap';

// import { Modal } from 'reactstrap';
import styled from "styled-components";
// import styled, { css } from 'styled-components';

import { Scrollable } from "../core/Scrollable";
import { Box } from "../core";
import { overlayStyles } from "../Overlay/overlayProps";

export interface SideOverlayProps {
  toggle: () => void;
  children?: React.ReactNode;
  headerChildren?: React.ReactNode;
  width?: string;
  isOpen?: boolean;
  fade?: boolean;
}

export const SideOverLayModal = styled(Box)<SideOverlayProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${overlayStyles.overlayWidth};
  height: 100%;
  background-color: ${overlayStyles.overlayBgColor};
  flex-shrink: 0;
  max-height: 100%;
  margin: 0;
  transition: all 0.4s ease-in-out;
  transform: translateX(${(props) => (props.isOpen ? 0 : "calc(-1 * -30rem)")});
  // transition: all 0.3s ease-in-out;
  box-shadow: 0px 32px 48px rgba(0, 0, 0, 0.04),
    0px 16px 32px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.08);

  ${Scrollable},
  .toggle {
    // transform: translateX(${overlayStyles.overlayWidth});
    // right: 0;
  }
`;

// export const OverlayHeader = styled(Box)<SideOverlayProps>`
export const OverlayHeader = styled(Box)`
  background-color: ${overlayStyles.headerBgColor};
  padding: 1rem 1.5rem;
  display: flex;
  align-items: "center";
`;
// export const StyledSidebar = styled(SideOverLayModal)<Partial<Props>>`
//   margin-left: ${(props) => props.toggle && 'calc(-1 * var(--sidebar-width))'};
//   background-color: ${(props) => props.theme.color.primary};
// `;

export default function SideOverlay(props: SideOverlayProps) {
  const { children, headerChildren, isOpen, toggle, width } = props;

  return (
    <SideOverLayModal
      isOpen={isOpen}
      toggle={toggle}
      fade={false}
      width={width}
    >
      {headerChildren}
      {children}
    </SideOverLayModal>
  );
}
