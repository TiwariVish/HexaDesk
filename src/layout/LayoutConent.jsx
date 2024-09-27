// src/components/LayoutContent.js
import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import MainHeader from '../components/header/MainHeader';
import Sidebar from '../components/SideNavbar/Sidebar';

const { Content } = Layout;

const LayoutContent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('data1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };


  const handleMenuSelect = (menuKey) => {
    setSelectedMenu(menuKey); // Update the selected menu item
  };

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <MainHeader collapsed={collapsed} toggleCollapse={toggleCollapse} />
      <Layout style={{ height: 'calc(100vh - 64px)' }}>
        <Sidebar collapsed={collapsed} onMenuSelect={handleMenuSelect} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: '100%',
            overflow: 'auto',
          }}
        >
           {children(selectedMenu)}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutContent;
