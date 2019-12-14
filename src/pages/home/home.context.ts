import React from 'react';

export const HomePageContext = React.createContext({ 
    chartData: [{
        albumId: '',
        albumName: '',
        releaseDate: '',
        totalTrack: 0,
    }], 
    setChartData: (param: any) => {},
    musicsListed: [{
        albumId: '',
        diskNumber: 0,
        trackNumber: 0,
        musicName: '',
        popularity: 0,
        explicit: false,
    }],
    setMusicsListed: (param: any) => {},
});