import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
`;

export const Title = styled.span`
    font-family: 'sacramento';
    color: yellow;
    font-size: 1.2rem;
`;

export const SubTitle = styled.span`
    margin: ${px2vw(10)} 0 ${px2vw(20)} 0;
    font-size: 0.9rem;
    color: white;
`;

export const ProjectsContainer = styled.div`
    width: 60vw;    
`;

export const ProjectsRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Project = styled.div`
    background: url('${props => props.image}');
    width: 30vw;
    height: 30vw;
    margin: 0;
    padding: 0;
`;

