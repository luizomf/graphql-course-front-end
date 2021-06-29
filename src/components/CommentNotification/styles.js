import styled, { css } from 'styled-components';

export const ToastNotificationContainer = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;
