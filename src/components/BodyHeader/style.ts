import styled, { keyframes } from "styled-components";
import px2vw from "../../utils/px2vw";

import { GitHubButton } from "../Header/style";

export const Container = styled.div`
    width: 99vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background:
        linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)
        ),
        url('./header.jpg');
    background-size: cover;
`;

export const Name = styled.h1`
    margin-bottom: ${px2vw(10)};
    font-family: 'Sacramento' !important;
    font-size: calc(3rem + 28 * ((100vw - 414px)/ 1266));
    line-height: calc(3.5rem + 24 * ((100vw - 414px)/ 1266));
    margin-bottom: calc(1rem + 8 * ((100vw - 414px)/ 1266));
    color: white;
    text-shadow: 1px 1px black;
`;

export const Description = styled.span`
    color: white;
    font-size: 1.5rem;
    margin-bottom: ${px2vw(5)};
    text-shadow: 1px 1px black;
`;

export const SubDescription = styled(Description)`
    font-size: 1.3rem;
    margin-bottom: calc(1rem + 8 * ((100vw - 414px)/ 1266));
`;

export const SeeMoreButton = styled(GitHubButton)`
    width: ${px2vw(120)};
    height: 8vh;

    &:hover {
        background: rgba(30,150,40,1);
    }
`;

export const SeeMoreArrowContainer = styled.div`
    bottom: 1.5rem;
    position: absolute;
    left: calc(50% - 24px);
`;

export const SeeMoreAnimation = keyframes`
    0% {
        padding: ${px2vw(0)} 0 0 0;
    }
    25% {
        padding: ${px2vw(4)} 0 0 0;
    }
    50% {
        padding: ${px2vw(8)} 0 0 0;
    }
    75% {
        padding: ${px2vw(4)} 0 0 0;
    }
    100% {
        padding: ${px2vw(0)} 0 0 0;
    }
`;

export const SeeMoreArrow = styled.img`
    width: ${px2vw(20)};
    height: ${px2vw(20)};
    animation-name: ${SeeMoreAnimation};
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        width: ${px2vw(24)};
        height: ${px2vw(24)};
    }
`;
