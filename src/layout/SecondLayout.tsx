import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

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

export default function SecondLayout() {
    return (
        <ReduxContainer>
            <div className="top">
                <ul>
                    <li>
                        <Link to="/react/State">State</Link>
                    </li>
                    <li>
                        <Link to="/react/Props">Props</Link>
                    </li>
                    <li>
                        <Link to="/react/Events">Events</Link>
                    </li>
                    <li>
                        <Link to="/react/Antd">Antd</Link>
                    </li>
                    <li>
                        <Link to="/react/Lifecycle">Lifecycle</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </ReduxContainer>
    );
}
