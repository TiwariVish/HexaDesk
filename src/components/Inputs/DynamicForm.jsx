import { Row, Col, Input, Button, Typography } from 'antd';
import React, { useState } from 'react';

const { Text } = Typography;

const DynamicForm = () => {
  const [initialInput, setInitialInput] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [additionalInputs, setAdditionalInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
  });


  const handleInitialInputChange = (e) => setInitialInput(e.target.value);

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileUploaded(true);
    }
  };

  const handleShowForm = () => {
    setFormVisible(true); 
  };

  const handleAdditionalInputChange = (e) => {
    const { name, value } = e.target;
    setAdditionalInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Initial Input:', initialInput);
    console.log('Additional Inputs:', additionalInputs);
  };

  return (
    <div>
      <Row gutter={16} className="mb-4" align="middle">
        <Col span={20}>
          <Input
            placeholder="Enter initial text"
            value={initialInput}
            onChange={handleInitialInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Col>
        <Col span={4}>
          <input
            type="file"
            onChange={handleFileUpload}
            className="w-full px-4 py-2 border rounded-md cursor-pointer"
          />
        </Col>
      </Row>

      {fileUploaded && (
        <Row justify="end" className="mb-4">
          <Button
            type="primary"
            size="small"
            onClick={handleShowForm}
            className="text-white bg-blue-500 px-4 py-2 rounded-md"
          >
            Upload
          </Button>
        </Row>
      )}

      {formVisible && (
        <form onSubmit={handleSubmit}>
          <Text style={{ fontWeight: 500, fontSize: '16px' }} className="mb-10">Enter project name</Text>
          <Input
            placeholder="Enter the name of your project"
            name="input1"
            value={additionalInputs.input1}
            onChange={handleAdditionalInputChange}
            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Text style={{ fontWeight: 500, fontSize: '16px' }} className="mb-10">Enter project description</Text>
          <Input
            placeholder="Enter project description"
            name="input2"
            value={additionalInputs.input2}
            onChange={handleAdditionalInputChange}
            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Text style={{ fontWeight: 500, fontSize: '16px' }} className="mb-10">Enter project cost</Text>
          <Input
            placeholder="Enter project cost"
            name="input3"
            value={additionalInputs.input3}
            onChange={handleAdditionalInputChange}
            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Row justify="end">
            <Button
              type="primary"
              size="small"
              htmlType="submit"
              className="text-white bg-blue-500 px-4 py-2 rounded-md"
            >
              Submit
            </Button>
          </Row>
        </form>
      )}
    </div>
  );
};

export default DynamicForm;
