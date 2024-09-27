import { Row, Col, Input, Button } from 'antd';
import React, { useState } from 'react';
import LayoutContent from '../../layout/LayoutConent';
import Cards from '../../components/cards/Cards';
import OverviewDataList from '../../demoData/overviewData.json';
import DynamicForm from '../../components/Inputs/DynamicForm'

function DashboardBase() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [uploadedData, setUploadedData] = useState(null);


  const handleUpload = () => {
    setUploadedData({
      input1,
      input2,
      input3,
    });
  };

  const renderContent = (selectedMenu) => {
    switch (selectedMenu) {
      case 'data1':
        return (
          <Row gutter={[16, 16]} justify="center">
            {OverviewDataList.map((data) => (
              <Col xs={24} sm={12} md={12} lg={12} xl={8} key={data.id}>
                <Cards
                  title={data.label}
                  total={data.total}
                  status={data.status}
                  statusRate={data.statusRate}
                  statusColor={data.statusColor}
                  caption={data.dataPeriod}
                />
              </Col>
            ))}
          </Row>
        );
      case 'data2':
        return (
          <>

    <DynamicForm />
     
      </>
        );
      case 'data3':
        return (
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={24} md={24}>
              <h2>Data 3 UI</h2>
              <p>This is a custom UI for Data 3. Add your custom component or design here.</p>

             
              <Input
                placeholder="Enter Input 1"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="mb-3"
              />
              <Input
                placeholder="Enter Input 2"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="mb-3"
              />
              <Input
                placeholder="Enter Input 3"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                className="mb-3"
              />

          
              <Button type="primary" onClick={handleUpload}>
                Upload
              </Button>

        
              {uploadedData && (
                <div className="mt-4">
                  <h3>Uploaded Data:</h3>
                  <p>Input 1: {uploadedData.input1}</p>
                  <p>Input 2: {uploadedData.input2}</p>
                  <p>Input 3: {uploadedData.input3}</p>
                </div>
              )}
            </Col>
          </Row>
        );
      default:
        return null;
    }
  };

  return (
    <LayoutContent>
      {(selectedMenu) => renderContent(selectedMenu)}
    </LayoutContent>
  );
}

export default DashboardBase;
