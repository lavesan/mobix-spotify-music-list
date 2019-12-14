import * as yup from 'yup';

export const searchMusicValidations = yup.object().shape({
    music: yup.string().required(),
});