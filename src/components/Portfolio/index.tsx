import React from "react";
import AboutMe from "../AboutMe";

import { Container, TitleContainer, Title, SubTitle, ProjectsContainer, ProjectsRow, Project } from "./style";

const Portfolio = () => {

    const openRepository = (repository: string) => {
        if (repository === 'trello') {
            window.open('https://github.com/RafaelEdKepler/TrelloReact', '_blank');
        }
        if (repository === 'moveit') {
            window.open('https://github.com/RafaelEdKepler/moveit-nextjs', '_blank');
        }
        if (repository === 'proffy') {
            window.open('https://github.com/RafaelEdKepler/proffy_front_end', '_blank');
        }
        if (repository === 'rpg') {
            window.open('https://github.com/RafaelEdKepler/character-sheet-generator', '_blank');
        }
    }

    return (
        <Container>
            <AboutMe/>
            <TitleContainer>
                <Title>Portfólio</Title>
                <SubTitle>Projetos desenvolvidos por mim.</SubTitle>
            </TitleContainer>
            <ProjectsContainer>
                <ProjectsRow>
                    <Project onClick={() => openRepository('trello')} image='./trello.png' />
                    <Project onClick={() => openRepository('moveit')} image='./moveit.png' />
                </ProjectsRow>
                <ProjectsRow>
                    <Project onClick={() => openRepository('proffy')} image='./proffy.png' />
                    <Project onClick={() => openRepository('rpg')} image='./rpg.png' />
                </ProjectsRow>
            </ProjectsContainer>
        </Container>
    );
}

export default Portfolio;