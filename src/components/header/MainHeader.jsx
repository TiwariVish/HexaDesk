// src/components/MainHeader.js
import React from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import logoDark from '../../static/img/logo_dark.svg';

const { Header } = Layout;

const MainHeader = ({ collapsed, toggleCollapse }) => {
  return (
    <Header
      style={{
        padding: 0,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '16px' }}>
        <img src={logoDark} alt="Logo" style={{ height: '40px', width: 'auto' }} />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapse}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            marginLeft: '16px',
          }}
        />
      </div>
    </Header>
  );
};

export default MainHeader;
