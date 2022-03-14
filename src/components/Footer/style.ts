import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    height: 30vh;
    background: white;
    display: flex;
    justify-content: space-evenly;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 25vh;
`;

export const TitleColumn = styled.span`
    font-family: 'Sacramento' !important;
    font-size: 2rem;
`;

export const Info = styled.span`
    font-size: 1rem;
    cursor: pointer;
    margin: ${px2vw(15)} 0 ${px2vw(5)} 0;
`;

export const Link = styled.a`
    font-size: 1rem;
    cursor: pointer;
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin: ${px2vw(15)} 0 ${px2vw(5)} 0;

    svg {
        margin-right: 0.5rem;
    }
`;