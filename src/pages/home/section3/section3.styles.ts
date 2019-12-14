import styled from 'styled-components';

export const StyledMusicCardsBox = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    min-height: 0;
    min-width: 0;
    padding: 10px 40px;
    margin-top: 50px;
    max-height: 350px;
    overflow-y: scroll;

    @media(max-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media(max-width: 860px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;