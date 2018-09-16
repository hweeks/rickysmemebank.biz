import styled from 'styled-components'

export const MemeTainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 80vw;
  margin-bottom: 30px;
  border-radius: 4px;
  background-image: repeating-linear-gradient(to right,
  #c4e17f 0px, #c4e17f 50px,
  #f7fdca 50px, #f7fdca 100px,
  #fad071 100px, #fad071 150px,
  #f0766b 150px, #f0766b 200px,
  #db9dbe 200px, #db9dbe 250px,
  #c49cdf 250px, #c49cdf 300px,
  #6599e2 300px, #6599e2 350px,
  #61c2e4 350px, #61c2e4 400px);
  padding: 30px;
  min-height: 70vh;
`;

export const MemeImg = styled.img`
  min-height: 30vh;
  height: auto;
  max-width: 80vw;
`;

export const MemeTitle = styled.div`
  font-size: 41px;
  line-height: 69px;
  font-weight: bolder;
   background: -webkit-linear-gradient(-91deg, #EEF85B 5%, #7AEC8D 53%, #09E5C3 91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
   -webkit-text-stroke-color: black;
`;
