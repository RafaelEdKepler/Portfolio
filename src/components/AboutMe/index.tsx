import React from "react";

import { Container, ContentContainer, PhotoContainer, ResumeContainer } from './style';

const AboutMe = () => {
    return (
        <Container>
          <ContentContainer>
            <PhotoContainer>
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFSe3WliPm8dQ/profile-displayphoto-shrink_800_800/0/1542812160374?e=1652918400&v=beta&t=8IIWHwWQBrZ2HM-0IWO3csMRTB1aFbrNcatoDBfAmoc"/>
            </PhotoContainer>
            <ResumeContainer>
              <span>Olá! Meu nome é Rafael Eduardo Kepler</span>
              <span>Tenho 26 anos, sou graduando em Ciências da Computação pela UNIJUÍ, e trabalho com desenvolvimento de softwares desde 2015! Me considero uma pessoa calma, bem auto-didata, que consigo sair de muitos problemas apenas usando essa majestosa <a href="http://www.google.com" target="_blank">ferramenta</a>!</span>
              <span>Meus hobbies envolvem programar, jogar (jogos de videogame/computador, jogos de mesa, jogos de carta, jogos de jogos...) e assistir filmes, séries ou animes.</span>
            </ResumeContainer>
          </ContentContainer>
        </Container>
    );
}

export default AboutMe;