import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export Container = styled.div`
    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;    
    background: black;
`;

export NameContainer = styled.div`
    width: ${px2vw(150)};    
`;

export InfoContainer = styled.div`
    width: ${px2vw(350)};
    display: flex;
    justify-content: space-evenly;
`;

export Name = styled.span`
    font-size: 1.2rem;
    color: white;
`;

export InfoLinks = styled.a`
    color: white;
    font-size: 1rem;
`;

export GitHubButton = styled.button`
    background: green;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
    width: ${px2vw(70)};
    height: 3vh;
`;  