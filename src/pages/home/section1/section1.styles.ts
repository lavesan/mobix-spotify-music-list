import styled, { css } from 'styled-components';

export const StyledArtistsFilterBox = styled.section`
    display: grid;
    grid-template-columns: 3fr 4fr 7fr;
    grid-gap: 30px;
    margin-bottom: 30px;
    min-width: 0;
    min-height: 0;

    @media(max-width: 1100px) {
        grid-template-columns: 3fr 4fr 4fr;
    }

    @media(max-width: 880px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;


export const StyledLogSpotifyLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
    width: 50%;
    margin: 0 auto;
    padding: 10px 20px;
    min-width: 0;

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
    
    @media(max-width: 1100px) {
        width: 80%;
    }

    @media(max-width: 880px) {
        width: 85%;
    }
`;