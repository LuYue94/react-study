import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const AppAside = styled.div`
    position: fixed;
    z-index: 999;
    background: #fff;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    border-right: 1px solid #409eff;
    text-align: center;
    ul {
        li {
            width: 100%;
            display: block;
            line-height: 2;
            color: #409eff;
            cursor: pointer;
            margin-bottom: 10px;
        }
        a {
            display: block;
            width: 100%;
            height: 100%;
        }
        a.active {
            color: #fff;
            background: #409eff;
        }
    }
    .App-logo {
        position: absolute;
        bottom: 0;
        left: 44px;
    }
`;
const AppContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding-left: 200px;
    box-sizing: border-box;
    overflow-y: auto;
    .app_content {
        padding: 10px;
        box-sizing: border-box;
        height: 100%;
    }
`;

export default function Layout() {
    return (
        <>
            {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
            <AppAside>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/nothing-here">Nothing Here</Link>
                        </li>
                        <li>
                            <Link to="/redux">Redux</Link>
                        </li>
                        <li>
                            <Link to="/react">React</Link>
                        </li>
                    </ul>
                </nav>
            </AppAside>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
            <AppContainer>
                <Outlet />
            </AppContainer>
        </>
    );
}
