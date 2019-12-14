import styled from 'styled-components';

export const StyledMusicCardsBox = styled.section`
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr;    
    grid-gap: 30px;
    min-height: 0;
    min-width: 0;
    padding: 10px 40px;
    margin-top: 50px;
    max-height: 350px;
    overflow-y: scroll;
`;