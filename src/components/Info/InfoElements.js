import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
`
export const InfoRow = styled.div`  
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`
export const Heading = styled.h1`
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
`
export const Subtitle  = styled.p`
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;