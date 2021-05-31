import styled, { keyframes } from "styled-components";
import px2vw from "../../utils/px2vw";

import { GitHubButton } from "../Header/style";

export Container = styled.div`
    width: 100vw;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://cio.com.br/wp-content/uploads/2019/11/shutterstock_1445888471.jpg');
`;

export Name = styled.span`
    margin-bottom: ${px2vw(10)};
    font-family: 'Sacramento';
    font-size: 1.5rem;
    color: white;
`;

export Description = styled.span`
    color: white;
    font-size: 1rem;
    margin-bottom: ${px2vw(5)};
`;

export SubDescription = styled(Description)`
    font-size: 0.9rem;
    margin-bottom: ${px2vw(10)};
`;

export SeeMoreButton = styled(GutHubButton)`
    width: ${px2vw(80)};
    height: 4vh;
`;

export SeeMoreArrowContainer = styled.div`
    bottom: 1.5rem;
    position: absolute;    
    left: calc(50% - 24px);
`;

export SeeMoreAnimation = keyframes`
    0% {
        margin: ${px2vw(0)};
    }
    25% {
        bottom: ${px2vw(2)};
    }
    50% {
        bottom: ${px2vw(4)};
    }
    75% {
        bottom: ${px2vw(2)};
    }
    100% {
        bottom: ${px2vw(0)};
    }
`;

export SeeMoreArrow = styled.img`
    width: ${px2vw(20)};
    height: ${px2vw(20)};
    animation: ${SeeMoreAnimation};
    animation-duration: 1.5s;
`;
