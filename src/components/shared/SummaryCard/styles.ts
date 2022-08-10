import styled, { css } from "styled-components";

interface BoxProps {
  variant?: "green";
}

export const Box = styled.div<BoxProps>`
  background: ${({ theme }) => theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ theme, variant }) =>
    variant === "green" &&
    css`
      background: ${theme["green-700"]};
    `}
`;
