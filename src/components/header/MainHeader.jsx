// src/components/MainHeader.js
import React from 'react';
import { Button, Layout, Popover, Avatar, Badge, Dropdown, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, MailOutlined, BellOutlined, SettingOutlined, UserOutlined, DownOutlined, FlagOutlined } from '@ant-design/icons';
import logoDark from '../../static/img/logo_dark.svg';

const { Header } = Layout;

const MainHeader = ({ collapsed, toggleCollapse }) => {
  const messageContent = <p>You have 3 new messages</p>;
  const notificationContent = <p>5 new notifications</p>;
  const settingsContent = <p>Settings options</p>;
  const flagContent = <p>Language options</p>;
  const userDetails = (
    <div>
      <p>Username: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <p>Role: Admin</p>
    </div>
  );
  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        padding: 0,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
      <div style={{ display: 'flex', alignItems: 'center', paddingRight: '16px' }}>
        <Button
          type="text"
          icon={<SearchOutlined style={{ fontSize: '20px' }} />}
          style={{ fontSize: '20px', marginRight: '16px' }}
        />
        <Popover content={messageContent} title="Messages" trigger="hover">
          <Badge count={3} style={{ position: 'absolute', top: '3px', right: '22px', transform: 'translate(50%, -50%)', transformOrigin: '100% 0%' }}>
            <Button
              type="text"
              icon={<MailOutlined style={{ fontSize: '20px' }} />}
              style={{ fontSize: '20px', marginRight: '16px' }}
            />
          </Badge>
        </Popover>
        <Popover content={notificationContent} title="Notifications" trigger="hover">
          <Badge count={5} style={{ position: 'absolute', top: '3px', right: '22px', transform: 'translate(50%, -50%)', transformOrigin: '100% 0%' }}>
            <Button
              type="text"
              icon={<BellOutlined style={{ fontSize: '20px' }} />}
              style={{ fontSize: '20px', marginRight: '16px' }}
            />
          </Badge>
        </Popover>
        <Popover content={settingsContent} title="Settings" trigger="hover">
          <Button
            type="text"
            icon={<SettingOutlined style={{ fontSize: '20px' }} />}
            style={{ fontSize: '20px', marginRight: '16px' }}
          />
        </Popover>
        <Popover content={flagContent} title="Language" trigger="hover">
          <Button
            type="text"
            icon={<FlagOutlined style={{ fontSize: '20px' }} />}
            style={{ fontSize: '20px', marginRight: '16px' }}
          />
        </Popover>
        <Popover content={userDetails} title="User Info" trigger="hover">
          <Avatar
            style={{ backgroundColor: '#87d068', cursor: 'pointer', marginRight: '8px' }}
            icon={<UserOutlined />}
          />
        </Popover>
        <Dropdown overlay={userMenu} trigger={['click']}>
          <Button type="text">
            John Doe <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </Header>
  );
};

export default MainHeader;
