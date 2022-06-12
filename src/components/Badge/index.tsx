import React from 'react';
import styled from 'styled-components';
import { Text } from '../core';
import { badgeStyles } from './badgeProps';

interface Props {
  children?: React.ReactNode;
  className?: string;
  text?: string;
  bgColor: 'primary' | 'warning' | 'danger' | 'success' | 'secondary' | 'informative';
  textColor?: string;
}

export const colors = {
  primary: '#BBDEFB',
  warning: '#FEF08A',
  danger: '#FECACA',
  success: '#30AF1D',
  secondary: '#EBEBEB',
  informative: '#DCFCE7'
};

const DefaultBadge = styled.span<Props>`
  background-color: ${(props) => colors[props.bgColor]};
  color: ${badgeStyles.textColor};
  padding: ${badgeStyles.padding};
  border-radius: ${badgeStyles.borderRadius};
  margin-right: ${badgeStyles.marginRight};
  display: inline-block;
`;
export const Badge = (props: Props) => {
  return (
    <DefaultBadge {...props}>
      <Text variant="display2" typeface="semiBold" color={props.textColor}>
        {props.text}
      </Text>
    </DefaultBadge>
  );
};
