import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('./who.jpg');
  background-size: cover;
`;

export const ContentContainer = styled.div`
  width: 60%;
  height: 80%;
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  margin: 5rem;
  display: flex;
`;

export const PhotoContainer = styled.div`
  height: 100%;
  width: 50%;
  margin: 5rem;

  img {
    border-radius: 10rem;
    width: 10rem;
    height: 10rem;
  }
`;

export const ResumeContainer = styled.div`
  width: 50%;
  margin: 5rem;
  display: flex;
  flex-direction: column;

  span {
    text-justify: justify;
    margin-bottom: 1rem;
  }
`;