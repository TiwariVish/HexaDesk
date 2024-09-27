import React from 'react';
import { Row, Col, Input, Button } from 'antd'; // Import Button from antd
import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;

function CustomInputs() {
  return (
    <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
      <div className="input-wrap">
        <Row gutter={25} align="middle"> {/* Align items vertically centered */}
          <Col md={12} sm={12} xs={24} className="flex items-center justify-between">
            {/* Basic Input */}
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative flex-1">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic
                </h1>
              </div>
              <div className="p-[25px]">
                <Input placeholder="Basic usage" prefix={<UserOutlined />} />
              </div>
            </div>

            {/* Button on the right */}
            <Button className="bg-primary hover:bg-hbr-primary border border-solid border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] rounded-[4px] px-[20px] h-[44px]">
              Primary
            </Button>
          </Col>
        </Row>
      </div>
    </main>
  );
}

export default CustomInputs;
