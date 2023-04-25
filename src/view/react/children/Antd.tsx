import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Layout, Space, Button, Input } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Events: React.FC = () => {
    function onClick(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) {
        console.log('e :>> ', e);
    }
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <Button type="primary" onClick={(e) => onClick(e)}>
                        test
                    </Button>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Space>
    );
};

export default Events;
