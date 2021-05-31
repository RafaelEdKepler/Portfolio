import React from "react";

import {Container, TitleContainer, Title, SubTitle, ProjectsContainer, ProjectsRow, Project } from "./style";

const Portfolio = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>Portfólio</Title>
                <SubTitle>Projetos desenvolvidos por mim.</SubTitle>
            </TitleContainer>
            <ProjectsContainer>
                <ProjectsRow>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                </ProjectsRow>
                <ProjectsRow>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                </ProjectsRow>
                <ProjectsRow>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                </ProjectsRow>
                <ProjectsRow>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                </ProjectsRow>
                <ProjectsRow>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                </ProjectsRow>
                <ProjectsRow>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                    <Project image='https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'/>
                </ProjectsRow>
            </ProjectsContainer>
        <Container/>
    );
}

export default Portfolio;