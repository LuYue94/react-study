import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Layout from './layout';
import SecondLayout from './layout/SecondLayout';
import Redux from './view/redux';
import ReactPage from './view/react';
import State from './view/react/children/State';
import Props from './view/react/children/Props';
import Events from './view/react/children/Events';
import Antd from './view/react/children/Antd';
import Lifecycle from './view/react/children/Lifecycle';
import styled from 'styled-components';

const GlobalStyle = styled.div`
    html,
    body,
    ul,
    li,
    ol,
    dl,
    dd,
    dt,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    form,
    fieldset,
    legend,
    img {
        margin: 0;
        padding: 0;
    }
    fieldset,
    c {
        border: none;
    }
    img {
        display: block;
    }
    address,
    caption,
    cite,
    code,
    dfn,
    th,
    var {
        font-style: normal;
        font-weight: normal;
    }
    ul,
    ol,
    li {
        list-style: none;
    }
    body {
        color: #333;
        font: 12px BASE 'SimSun', '宋体', 'Arial Narrow', HELVETICA;
        background: #fff;
    }
    a {
        color: #666;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }
    body,
    html,
    #root {
        height: 100%;
        overflow: hidden;
    }
`;

export default function App() {
    return (
        <GlobalStyle>
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="react" element={<SecondLayout />}>
                        <Route path="State" element={<State />} />
                        <Route path="Props" element={<Props />} />
                        <Route path="Events" element={<Events name={'111'} />} />
                        <Route path="Antd" element={<Antd />} />
                        <Route path="Lifecycle" element={<Lifecycle />} />
                    </Route>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="redux" element={<Redux />} />
                    <Route path="react" element={<ReactPage />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </GlobalStyle>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
