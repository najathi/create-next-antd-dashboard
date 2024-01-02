'use client';

import React from 'react';
import { Layout, theme } from 'antd';

import HeaderCmp from '@/components/layout/header';
import SideBar from '@/components/layout/sideBar';
import FooterCmp from '@/components/layout/footer';
import BreadcrumbCmp from '@/components/Breadcrumb';

type DashboardLayoutProps = {
  children: React.ReactNode
};

const { Content } = Layout;

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        <HeaderCmp />
        <Content style={{ margin: '16px 0' }}>
          <BreadcrumbCmp />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <FooterCmp />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
