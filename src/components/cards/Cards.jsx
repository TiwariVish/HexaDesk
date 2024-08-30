import UilellipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Dropdown from '../../components/dropdown/Dropdownpt';
import Heading from '../../components/heading/Heading';


function Cards(props) {
  const {
    title,
    children,
    more,
    moreText,
    size,
    headless,
    caption,
    isbutton,
    bodyStyle,
    headStyle,
    border,
    bodypadding,
    className,
    icon,
    total,
    status,
    statusRate,
    statusColor,
  } = props;

  return (
    <>
      {!headless ? (
        <Card
          size={size}
          title={title}
          bodyStyle={bodyStyle && bodyStyle}
          headStyle={headStyle && headStyle}
          bordered={border.toString()}
          className={className}
          bodypadding={bodypadding && bodypadding}
          extra={
            <div className="flex items-center gap-[15px]">
              {isbutton && isbutton}
              {more && (
                <Dropdown content={more} placement="bottom">
                  <Link className="flex items-center group" onClick={(e) => e.preventDefault()} to="#">
                    {!moreText ? (
                      <UilellipsisH className="w-[24px] h-[24px] text-light dark:text-white60 dark:group-hover:text-white87" />
                    ) : (
                      'More'
                    )}
                  </Link>
                </Dropdown>
              )}
            </div>
          }
          style={{ width: '100%' }}
        >
          <div className="flex items-center">
            {icon && <img src={`/path/to/icons/${icon}`} alt="icon" className="w-[24px] h-[24px]" />}
            <div className="ml-4">
              <Heading as="h4">{title}</Heading>
              <p>{caption}</p>
              <p>Total: {total}</p>
              <p>Status: <span className={`status-${statusColor}`}>{status}</span></p>
              <p>Status Rate: {statusRate}</p>
              {children}
            </div>
          </div>
        </Card>
      ) : (
        <Card
          bodypadding={bodypadding && bodypadding}
          bodyStyle={bodyStyle && bodyStyle}
          size={size}
          style={{ width: '100%' }}
          bordered={border.toString()}
          className={className}
        >
          {title && <Heading as="h4">{title}</Heading>}
          {caption && <p>{caption}</p>}
          <p>Total: {total}</p>
          <p>Status: <span className={`status-${statusColor}`}>{status}</span></p>
          <p>Status Rate: {statusRate}</p>
          {children}
        </Card>
      )}
    </>
  );
}

Cards.defaultProps = {
  border: false,
};

Cards.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  size: PropTypes.string,
  more: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  bodyStyle: PropTypes.object,
  headStyle: PropTypes.object,
  isbutton: PropTypes.node,
  headless: PropTypes.bool,
  border: PropTypes.bool,
  caption: PropTypes.string,
  bodypadding: PropTypes.string,
  className: PropTypes.string,
  moreText: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
  icon: PropTypes.string,
  total: PropTypes.string,
  status: PropTypes.string,
  statusRate: PropTypes.string,
  statusColor: PropTypes.string,
};

export default Cards;
