import styled from "styled-components";
import { Box } from "../../core";
import Layout from "../../layout";
import {
  OverlayHeader,
  SideOverLayModal,
  SideOverlayProps,
} from "../../SideOverlay/SideOverlay";

const OverLayModal = styled(SideOverLayModal)<SideOverlayProps>`
  left: 0;
  top: unset;
  width: 100%;
  // max-height: 30%;
  transform: translateY(${(props) => (props.isOpen ? 0 : "calc(-1 * -80rem)")});
  transition: none;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: unset;
`;

const Wrapper = styled(Box)`
  height: 18rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.surface};
`;

export const BottomOverlayHeadder = styled(OverlayHeader)`
  padding: 0;
  background-color: ${(props) => props.theme.color.surface};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export default function BottomOverlay(props: SideOverlayProps) {
  const { children, headerChildren, isOpen, toggle } = props;
  return (
    <div
      onClick={() => {
        toggle();
      }}
    >
      <OverLayModal isOpen={isOpen} toggle={toggle} fade={false}>
        <Wrapper>
          <div
            className="h-100 w-100"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <Layout.Container stretch>
              {headerChildren}
              {children}
            </Layout.Container>
          </div>
        </Wrapper>
      </OverLayModal>
    </div>
  );
}
