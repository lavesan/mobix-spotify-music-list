import React, { useContext } from 'react';
import { StyledH2 } from '../home.styles';
import { StyledArtistsFilterBox, StyledLogSpotifyLink } from './section1.styles';
import { SelectComponent } from './select';
import { RangePickerComponent } from './range-picker';
import { AppContext } from '../../../app/App.context';
import { HomePageContext } from '../home.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default () => {
    const options = [
        { value: '1on7ZQ2pvgeQF4vmIA09x5', label: 'Charlie Brown Jr.' },
        { value: '14pVkFUHDL207LzLHtSA18', label: 'Pantera' },
        { value: '1dfeR4HaWDbWqFHLkxsg1d', label: 'Queen' },
        { value: '3lDpdwM8KILepMHqBWUhIA', label: 'The Struts' },
        { value: '2ZofT7n9AlTKf7KDCoHGgD', label: 'Luiz Gonzaga' },
    ];
    const { spotifyService } = useContext(AppContext);
    const { setChartData } = useContext(HomePageContext);
    const handleChooseArtist = async ({ value }: any) => {
        const albums = await spotifyService.getArtistAlbums(value);
        if (albums) {
            setChartData(albums.items.map(({ id, name, release_date, total_tracks }: any) => ({
                id: id,
                name: name,
                releaseDate: release_date,
                totalTrack: total_tracks,
            })))
        }
    }

    return (
        <>
            <StyledH2>FILTRO DOS ARTISTAS</StyledH2>
            <StyledArtistsFilterBox>
                <SelectComponent
                    options={options}
                    placeholder="Artistas"
                    onChange={handleChooseArtist} />
                <RangePickerComponent
                    label="Periodo"
                    initialValue={2019} />
                <StyledLogSpotifyLink href="https://accounts.spotify.com/pt-BR/authorize?client_id=f27147875f9843e9898af17332049543&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000%2Fhome">
                    <FontAwesomeIcon icon={faSpotify} />&nbsp;&nbsp;Logar-se no spotify
                </StyledLogSpotifyLink>
            </StyledArtistsFilterBox>
        </>
    )
}