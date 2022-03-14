import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    background: black;
    flex-direction: column;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    justify-content: left;
    align-items: left;
`;

export const Title = styled.span`
    font-family: 'Sacramento' !important;
    color: yellow;
    font-size: 4rem;
`;

export const SubTitle = styled.span`
    margin: ${px2vw(10)} 0 ${px2vw(20)} 0;
    font-size: 1rem;
    color: white;
`;

export const ProjectsContainer = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    margin-bottom: ${px2vw(40)};
`;

export const ProjectsRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Project = styled.div`
    background: url('${props => props.image}');
    background-size: cover;
    width: 30vw;
    height: 20vw;
    margin: 1rem 0;
    border-style: solid;
    padding: 0;
    transition: 0.2s;


    &:hover {
        cursor: pointer;
        border-color: white;
    }

    &:first-child {
        margin-right: 1rem;
    }
`;

