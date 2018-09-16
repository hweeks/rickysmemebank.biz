import styled, { injectGlobal, keyframes } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
${reset}
html {
  font-family: 'Open Sans', sans-serif;
}
`;

export const MemeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

function rotationBuilder(degree) {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-${degree}deg);
    }
    50% {
      transform: rotate(0deg);
      opacity: .9
    }
    75% {
      transform: rotate(${degree}deg);
    }
  `;
  return rotation;
}

export const MemesLoading = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 420px;
  animation: ${rotationBuilder(10)} 1s linear infinite;
  overflow: hidden;
`;


export default baseStyles;
