import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    background: black;
`;

export const NameContainer = styled.div`
    width: ${px2vw(150)};
    margin: ${px2vw(20)};
`;

export const InfoContainer = styled.div`
    width: ${px2vw(350)};
    margin: ${px2vw(20)};
    display: flex;
    justify-content: space-evenly;
`;

export const Name = styled.span`
    font-size: 1.2rem;
    color: white;

    b {
        font-family: 'Sacramento' !important;
        font-size: 2rem;
    }
`;

export const InfoLinks = styled.a`
    color: white;
    font-size: 1rem;
`;

export const GitHubButton = styled.button`
    background: rgba(31,164,78,1);
    color: white;
    border-style: none;
    border-radius: 5px;
    font-size: 1rem;
    width: ${px2vw(70)};
    height: 5vh;
    margin-top: ${px2vw(-10)};
    transition: 0.2s;

    &:hover {
        background: rgba(30,150,40,1);
    }
`;