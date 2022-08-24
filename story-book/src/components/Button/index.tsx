import React from "react";
import "./button.css";
import styled from "@emotion/styled";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  borderRadius?: number;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  onHover?: () => void;
}

const ButtonComp = styled.button<ButtonProps>`
  &:hover {
    opacity: 0.8;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  borderRadius,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <ButtonComp
      label={label}
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${backgroundColor}`,
        `storybook-button--${size}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor, borderRadius }}
      onMouseEnter={props.onHover}
      {...props}
    >
      {label}
    </ButtonComp>
  );
};
