import React from 'react';
// import './Header.css';
// eslint-disable-next-line no-unused-vars
import Link from '../Link/Link';
import styled from 'styled-components';
import logo from '../../github.png'

const HeadWrapper = styled.div`
    background-color: #282C34;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size:calc(10px + 2vmin);
    color: white;
`;

const Logo = styled.img`
    height: 64px;
    pointer-events: none;
`

const Article = styled.article`
    margin-top: 30px;
`

const Header = () => (
    <HeadWrapper>
        <Article>
            <Logo src={logo} alt="logo"/>
            <h1>My Github Portfolio</h1>
        </Article>

    </HeadWrapper>
)

export default Header;