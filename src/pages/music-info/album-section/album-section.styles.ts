import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledCardHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

export const StyledReturnButton = styled(NavLink)`
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    background-color: ${({ theme }) => theme.spotify.green.primaryColor};
    padding: 8px 25px;
    height: fit-content;

    :hover {
        text-decoration: none;
        color: #fff;
    }
`;

export const StyledMusicInfoComponent = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    @media(max-width: 650px) {
        margin-bottom: 50px;
    }
`;

export const StyledTrackComponent = styled.header`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 40px;
    min-height: 0;
    min-width: 0;
    min-width: 0;

    @media(max-width: 650px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledAlbumImageBox = styled.div`
    min-width: 0;
    img {
        width: 100%;
    }
`;

export const StyledTrackInfo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${({ theme }) => theme.spotify.dark.terciaryColor};

    p {
        margin: 5px 0;
    }
`;

export const StyledMusicsBox = styled.section`

`;