import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { toastNotify } from '../../utils/app.utils';

export default class SpotifyService {

    private readonly http = axios.create({
        baseURL: 'https://api.spotify.com/v1',
    })

    constructor() {
        this.http.interceptors.request.use((request: AxiosRequestConfig) => this.addRequestAuthorization(request));
        this.http.interceptors.response.use(
            (response: AxiosResponse) => response.data,
            () => toastNotify({ type: 'error', message: 'Se conecte no spotify para utilizar este site!' }));
    }

    private addRequestAuthorization(request: AxiosRequestConfig) {
        const token = this.getObjectCookie('token');
        if (token) {
            const { token_type, access_token } = token;
            request.headers = {
                ...request.headers,
                Authorization: `${token_type} ${access_token}`,
            }
        }
        
        return request;
    }

    // TODO: Colocar o tipo do parâmetro
    // { access_token: string, token_type: 'Bearer', expires_in: number }
    saveAuthOnCookie({ expires_in, ...tokenData }: any): void {
        const authString = JSON.stringify(tokenData);
        document.cookie = `token=${authString};Max-Age=${expires_in}`;
    }

    getObjectCookie(cookieName: string): { [key: string]: any } | '' {
        const cookies = document.cookie.split(';');
        const cokRegex = new RegExp(`${cookieName}=`);
        const cookie = cookies.find(cok => cok.match(cokRegex));

        if (cookie) {
            const cookieRegex = new RegExp(`^ *${cookieName}=`);
            const cookieValueString = cookie.replace(cookieRegex, '');
            return JSON.parse(cookieValueString);
        }
        return '';
    }

    getArtistAlbums(artistId: string): Promise<any> {
        return this.http.get(`/artists/${artistId}/albums?market=ES&include_groups=appears_on`);
    }

    getMusicData(trackName: string): Promise<any> {
        return this.http.get(`/search?q=${trackName}&type=track`);
    }

    getMusicsByName(musicName: string): Promise<any> {
        return this.http.get(`/search?q=${musicName}&type=track`);
    }

    getArtistTopTrack(artistId: string): Promise<any> {
        return this.http.get(`/artists/${artistId}/top-tracks?market=ES`);
    }

    getPlaylistTracks(playlistId: number): Promise<any> {
        return this.http.get('/playlists/{playlist_id}/tracks');
    }
}