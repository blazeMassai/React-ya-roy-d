import React from 'react';
import styled from 'styled-components';
// import './Link.css';

const Innerlink = styled.a`
color: #3E5AA1;
`;

const Link = ({ url, title }) => (
    <Innerlink

        href="{url}"
        target='_blank'
        rel='noopener noreferrer'>
        {title}
    </Innerlink>
);

export default Link;