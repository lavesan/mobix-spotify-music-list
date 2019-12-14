import styled, { css } from 'styled-components';

export const StyledArtistsFilterBox = styled.section`
    display: grid;
    grid-template-columns: 3fr 4fr 7fr;
    grid-column-gap: 30px;
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

export const StyledLogSpotifyLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
    width: 50%;
    margin: 0 auto;

    ${({ theme }) => 
        css`
            background-color: ${theme.spotify.green.primaryColor};
            color: ${theme.spotify.dark.primaryColor};

            
            :hover {
                color: ${theme.spotify.dark.primaryColor};
                text-decoration: none;
            }
        `
    };
`;