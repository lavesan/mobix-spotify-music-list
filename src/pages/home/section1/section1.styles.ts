import styled, { css } from 'styled-components';

export const StyledArtistsFilterBox = styled.section`
    display: grid;
    grid-template-columns: 3fr 4fr 7fr;
    grid-column-gap: 30px;
    margin-bottom: 30px;
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