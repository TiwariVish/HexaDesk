import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const { Header } = Layout;

const HeaderWrapper = Styled.div`
  background-color: ${props => props.bgColor || 'inherit'};
  padding: 10px;
`;

const CustomHeader = Styled(Header)`
  background-color: transparent !important; /* Ensure background is transparent */
`;

function CustomPageHeader(props) {
  const { title, subTitle, routes, buttons, bgColor, className } = props;
  const breadcrumb = routes ? (
    <Breadcrumb
      className="flex order-2 relative top-1.5"
      separator={<span className="inline-flex bg-light-extra relative -top-0.5 w-1 h-1 rounded-full" />}
    >
      {routes.map((route, index) =>
        index + 1 === routes.length ? (
          <Breadcrumb.Item key={index} className="text-breadcrumbs dark:text-white30 text-15">
            {route.breadcrumbName}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index} className="inline-flex items-start">
            <Link
              to={route.path}
              className="text-light hover:text-primary dark:text-[#a4a5aa] dark:hover:text-white87 text-sm"
            >
              {route.breadcrumbName}
            </Link>
          </Breadcrumb.Item>
        ),
      )}
    </Breadcrumb>
  ) : null;

  return (
    <HeaderWrapper bgColor={bgColor} className={className}>
      <CustomHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
          </div>
          <div>{buttons}</div>
        </div>
        {breadcrumb}
      </CustomHeader>
    </HeaderWrapper>
  );
}

export default CustomPageHeader;
