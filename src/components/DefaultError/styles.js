import { DangerousHtmlWrapper as DangerousHtml } from 'components/DangerousHtml/styles';
import styled, { css } from 'styled-components';

export const Container = styled(DangerousHtml)`
  ${({ theme }) => css`
    code {
      background: ${theme.colorGray.gray06};
      padding: ${theme.spacings.xxtiny} ${theme.spacings.tiny};
    }
  `}
`;
