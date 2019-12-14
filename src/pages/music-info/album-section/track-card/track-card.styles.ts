import styled, { css } from 'styled-components';

export const StyledTrackCard = styled.a`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    text-decoration: none;
    ${({ theme }) => 
        css`
            color: ${theme.spotify.dark.terciaryColor};

            :not(:last-child) {
                border-bottom: thin solid ${theme.spotify.dark.quaternaryColor};
            }
        `
    }
`;