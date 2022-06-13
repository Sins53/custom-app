import { Box, FlexBox, Text } from "@/components/core";
import { LIGHT_THEME_ID } from "@/theme";
import { coolGray } from "@/theme/colors";
import styled, { DefaultTheme } from "styled-components";

export const getBaseColor = (theme: DefaultTheme) => {
  if (theme.id === LIGHT_THEME_ID) {
    return theme.color.primary;
  } else {
    return "#fff";
  }
};
interface IconProps {
  color?: string;
}

export const StatBox = styled(Box)`
  background-color: ${(props) => props.theme.color.background};
  border-radius: 0.25rem;
  padding: 1.5rem;
  height: 100%;
`;
export const StatDescription = styled(Text)`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.color.blackOrWhite};
`;
export const StatCount = styled(Text)`
  color: ${(props) => getBaseColor(props.theme)};
`;

export const IconContainer = styled(FlexBox)<IconProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2rem;
  }
  background-color: ${(props) => (props.color ? props.color : coolGray[500])};
`;
