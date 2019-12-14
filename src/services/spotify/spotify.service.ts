import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class SpotifyService {

    private readonly http = axios.create({
        baseURL: 'https://api.spotify.com/v1',
    })

    constructor() {
        this.http.interceptors.request.use((request: AxiosRequestConfig) => this.addRequestAuthorization(request));
        this.http.interceptors.response.use((response: AxiosResponse) => response.data);
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

    getArtistPlaylist(artistName: string): Promise<any> {
        const validName = artistName.replace(/ /g, '%20');

        return this.http.get(`/search?q=${validName}&type=playlist`);
    }

    getArtistAlbum(artistName: string): Promise<any> {
        const validName = artistName.replace(/ /g, '%20');

        return this.http.get(`/search?q=${validName}&type=album`);
    }

    getMusicInfo(artistName: string): Promise<any> {
        const validName = artistName.replace(/ /g, '%20');

        return this.http.get(`/search?q=${validName}&type=track`);
    }

    getPlaylistTracks(playlistId: number): Promise<any> {
        return this.http.get('/playlists/{playlist_id}/tracks');
    }
}