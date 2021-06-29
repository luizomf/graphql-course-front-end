import PropTypes from 'prop-types';
import * as Styled from './styles';

export function DangerousHtml({ html = '' }) {
  return (
    <Styled.DangerousHtmlWrapper dangerouslySetInnerHTML={{ __html: html }} />
  );
}

DangerousHtml.propTypes = {
  html: PropTypes.string,
};
