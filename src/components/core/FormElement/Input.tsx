import { Sizes } from '../props';
import styled, { css } from 'styled-components';
import { InputHTMLAttributes, useRef } from 'react';
import { commonFormStyle, formPropertyStyles } from './formProps';
import { Box } from '..';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldSize?: Sizes;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}
export function componentIconStyle(fieldSize: Sizes) {
  switch (fieldSize) {
    case Sizes.md:
      return css`
        font-size: 1rem;
      `;
    case Sizes.sm:
      return css`
        font-size: 0.75rem;
      `;
    default:
      return css`
        font-size: 0.875rem;
      `;
  }
}

const StyledIcon = styled(Box)<InputProps>`
  color: ${formPropertyStyles.iconColor};
  ${(props) => {
    return `
      ${componentIconStyle(props.fieldSize as Sizes)}
    
    `;
  }};
`;

const StyledInput = styled.input<InputProps>`
  ${commonFormStyle}
  flex-grow:1;
  &:disabled {
    background-color: #e9ecef;
  }
`;
const LeftIconContainer = styled(StyledIcon)`
  margin-right: 1rem;
  display: inline-flex;
`;
const RightIconContainer = styled(StyledIcon)`
  margin-left: 1rem;
  display: inline-flex;
`;

const StyledInputWrapper = styled.div<InputProps>`
  ${commonFormStyle}
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;

  ${StyledInput} {
    border: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

export default function Input({ fieldSize = Sizes.md, ...args }: InputProps) {
  const { leftIcon, rightIcon } = args;

  const focusPoint = useRef<HTMLDivElement>(null);
  const handleFocus = () => {
    focusPoint && focusPoint.current && focusPoint.current.focus();
  };
  return (
    <>
      {leftIcon || rightIcon ? (
        <StyledInputWrapper {...args} fieldSize={fieldSize} ref={focusPoint}>
          {leftIcon && (
            <LeftIconContainer component="span" {...args}>
              {leftIcon}
            </LeftIconContainer>
          )}
          <StyledInput {...args} fieldSize={fieldSize} onFocus={handleFocus} />
          {rightIcon && <RightIconContainer {...args}>{rightIcon}</RightIconContainer>}
        </StyledInputWrapper>
      ) : (
        <StyledInputWrapper {...args} fieldSize={fieldSize} ref={focusPoint}>
          <StyledInput {...args} fieldSize={fieldSize} />
        </StyledInputWrapper>
      )}
    </>
  );
}
