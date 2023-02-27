import P from 'prop-types';
import { GridContent } from '../../components/GridContent';
import * as Styled from './styles';

export const PageNotFound = () => {
  return (
    <Styled.Container>
      <GridContent
        title="Error 404"
        contentHtml="<p>Page not found</p><a href='/'>Home</a>"
        bg={true}
      />
    </Styled.Container>
  );
};
