import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { SearchInputComponent } from './search-input';
import { StyledSearchForm, StyledButtonForm } from './search-form.styles';
import { MusicSearchValues } from './search-form.types';
import { Formik } from 'formik';
import { searchMusicValidations } from './search-form.validations';
import { AppContext } from '../../../../app/App.context';
import { HomePageContext } from '../../home.context';

export default () => {
    const { spotifyService } = useContext(AppContext);
    const { setMusicsListed } = useContext(HomePageContext);
    const [initialValues] = useState<MusicSearchValues>({
        music: '',
    });

    const handleSubmit = async ({ music }: MusicSearchValues) => {
        const musics = await spotifyService.getTracksByName(music);

        if (musics) {
            const mapToMusicsListed = musics.tracks.items.map(({ name, track_number, disc_number, popularity, explicit, album: { id } }: any) => ({
                explicit,
                popularity,
                albumId: id,
                diskNumber: disc_number,
                trackNumber: track_number,
                musicName: name, 
            }))

            setMusicsListed(mapToMusicsListed);
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={searchMusicValidations}>
            {({ handleChange, handleSubmit, values, errors }) => (
                <StyledSearchForm onSubmit={handleSubmit}>
                    <SearchInputComponent
                        placeholder="buscar música"
                        name="music"
                        invalid={errors.music || ''}
                        value={values.music}
                        onChange={handleChange} />
                    <StyledButtonForm type="submit" title="Pesquisar">
                        <FontAwesomeIcon icon={faFilter} />
                    </StyledButtonForm>
                </StyledSearchForm>
            )
            }
        </Formik>
    )
}