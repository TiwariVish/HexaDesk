
import CustomPageHeader from '../../components/page-headers/CustomPageHeader';
import { Row, Col, Skeleton } from 'antd';
import React, { lazy, Suspense } from 'react';
import Cards from '../../components/cards/Cards'
import OverviewDataList from '../../demoData/overviewData.json'
import Header from '../../components/header/Header'
import LayoutContent from '../../layout/LayoutConent'




function DashboardBase() {
 console.log(OverviewDataList,'====================================');
  const PageRoutes = [ 
    { path: '/', breadcrumbName: 'Home' },
    { path: '/dashboard', breadcrumbName: 'Dashboard' },
  ];
  return (
    <>
    <LayoutContent>
    <Header name="vishal" />
      <CustomPageHeader
         routes={PageRoutes}
         title="Dashboard"
         className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
     <main className="min-h-[715px] lg:min-h-[580px] flex-1 px-8 xl:px-[15px] pb-[30px] bg-transparent">
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
        {/* <Row justify="center" gutter={25}>
          <Col xxl={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SaleRevenue />
            </Suspense>
          </Col>
          <Col xxl={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SourceRevenueGenerated />
            </Suspense>
          </Col>
          <Col xxl={8} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <NewProduct />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <BestSeller />
            </Suspense>
          </Col>
        </Row> */}
      </main>
      </LayoutContent>
  
    </>
  );
}

export default DashboardBase;
