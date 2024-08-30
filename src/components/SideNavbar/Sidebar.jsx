import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreAddOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  RightOutlined,
} from '@ant-design/icons';
import './Sidebar.css'; 

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const [isDashboardExpanded, setIsDashboardExpanded] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardExpanded(!isDashboardExpanded);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={250} style={{ backgroundColor: 'white' }}>
      <div className="demo-logo-vertical" />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ backgroundColor: 'transparent' }}
        className="custom-menu" // Add custom class
      >
        <Menu.SubMenu
          key="sub1"
          icon={<AppstoreAddOutlined />}
          title={<span>Dashboard</span>}
          onTitleClick={toggleDashboard}
        >
          {isDashboardExpanded && (
            <>
              <Menu.Item key="1-1">Data 1</Menu.Item>
              <Menu.Item key="1-2">Data 2</Menu.Item>
              <Menu.Item key="1-3">Data 3</Menu.Item>
            </>
          )}
        </Menu.SubMenu>
        {/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2 <RightOutlined style={{ float: 'right' }} />
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3 <RightOutlined style={{ float: 'right' }} />
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
