import styled from 'styled-components';

export const StyledArtistsFilterBox = styled.section`
    display: grid;
    grid-template-columns: 3fr 3fr 1fr ;
    grid-column-gap: 30px;
    width: 50%;
    margin-bottom: 30px;
`;

export const StyledMusicCardsBox = styled.section`
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr;    
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    padding: 10px 40px;
    margin-top: 50px;
`;

export const StyledH2 = styled.h2`
    font-size: 1rem;
`;