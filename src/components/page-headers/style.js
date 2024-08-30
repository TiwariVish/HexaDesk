import { PageHeader as AntPageHeader } from 'antd';
import Styled from 'styled-components';

const StyledPageHeader = Styled(AntPageHeader)`
  .ant-breadcrumb {
    ol {
      @media (max-width: 575px) {
        justify-content: center;
      }
    }
    li {
      display: flex;
      align-items: center;
    }
  }
`;

const HeaderWrapper = Styled.div`
  /* Your styles here */
`;

export { StyledPageHeader, HeaderWrapper };
