import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { toastNotify } from '../../utils/app.utils';
import { SaveAuthTokenParams } from './spotify.types';

export default class SpotifyService {

    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_SPOTIFY_API_URL,
    })

    constructor() {
        // Interceptor for request
        this.http.interceptors.request.use((request: AxiosRequestConfig) => this.addRequestAuthorization(request));
        
        // Interceptor for response
        this.http.interceptors.response.use(
            (response: AxiosResponse) => response.data,
            () => toastNotify({ type: 'error', message: 'Se conecte no spotify para utilizar este site!' }));
    }

    /**
     * @description Adds token auth on request header 
     * @param {AxiosRequestConfig} request 
     */
    private addRequestAuthorization(request: AxiosRequestConfig): AxiosRequestConfig {
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

    /**
     * @description Saver auth token on the browser cookies
     * @param param0 
     */
    saveAuthOnCookie({ expires_in, ...tokenData }: SaveAuthTokenParams): void {
        const authString = JSON.stringify(tokenData);
        document.cookie = `token=${authString};Max-Age=${expires_in}`;
    }

    /**
     * @description Gets an object by the key name from the cookie
     * @param {string} cookieName
     * @returns Object if exists and empty string if don't 
     */
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

    getTracksByName(musicName: string): Promise<any> {
        return this.http.get(`/search?q=${musicName}&type=track`);
    }

    /**
     * @description Gets artist top 10 tracks
     * @param {string} artistId 
     */
    getArtistTopTracks(artistId: string): Promise<any> {
        return this.http.get(`/artists/${artistId}/top-tracks?market=ES`);
    }

    getAlbumData(albumId: string): Promise<any> {
        return this.http.get(`/albums/${albumId}`);
    }
}