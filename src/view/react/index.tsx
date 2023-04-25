import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Routes, Route } from 'react-router-dom';
import SecondLayout from '../../layout/SecondLayout';
import Events from './children/Events';
// import State from './children/State';
// import Props from './children/Props';
// import Lifecycle from './children/Lifecycle';
// import Layout from '../../layout';

const ReduxContainer = styled.div`
    .top {
        ul {
            border-bottom: 1px solid #409eff;
            display: flex;
            li {
                padding: 8px;
                list-style: none;
            }
            a.active {
                color: red;
                font-weight: bold;
            }
        }
    }
    .bottom {
    }
`;

const Redux: React.FC = () => {
    return <ReduxContainer>111</ReduxContainer>;
};

export default Redux;
