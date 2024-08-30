import { Spin } from 'antd';
import React, { Suspense } from 'react';
import bgImage from '../../../static/img/admin-bg-light.png';
import logoDark from '../../../static/img/logo_dark.svg';
import logoWhite from '../../../static/img/logo_white.svg';


const AuthLayout = (WraperContent) => {
  return function () {
    return (
      <Suspense
        fallback={
          <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
            <Spin />
          </div>
        }
      >
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-top bg-no-repeat"
        >
          <div className="py-[120px] 2xl:py-[80px] px-[15px]">
            <div className="flex justify-center">
              <img className="dark:hidden" src={logoDark} alt="Logo Dark" />
              <img className="hidden dark:block" src={logoWhite} alt="Logo White" />
            </div>
            <WraperContent />
          </div>
        </div>
      </Suspense>
    );
  };
};

export default AuthLayout;
