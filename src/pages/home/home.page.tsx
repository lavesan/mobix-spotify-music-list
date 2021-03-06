import React, { useEffect, useState, useContext } from 'react';
import { StyledSectionCard } from '../../components/section-card';
import { queryStringToObject } from '../../utils/app.utils';
import { SectionOneComponent } from './section1';
import { HomePageContext } from './home.context';
import { AppContext } from '../../app/App.context';
import { SectionTwoComponent } from './section2';
import { SectionThreeComponent } from './section3';
import { MusicCardComponentProps } from './section3/music-card/music-card.types';
import { BarChartData } from './section2/bar-chart/bar-chart.types';

export default () => {
    const { spotifyService } = useContext(AppContext);
    const [chartData, setChartData] = useState<BarChartData[]>([]);
    const [musicsListed, setMusicsListed] = useState<MusicCardComponentProps[]>([]);
    const [selectedYear, setSelectedYear] = useState<number>(2019);

    useEffect(() => {
        const authToken = queryStringToObject(window.location.href);
        if (authToken) {
            spotifyService.saveAuthOnCookie(authToken);
        }
    }, [spotifyService]);

    return (
        <HomePageContext.Provider value={{ chartData, setChartData, musicsListed, setMusicsListed, selectedYear, setSelectedYear }}>
            <StyledSectionCard>
                <SectionOneComponent />
            </StyledSectionCard>
            <StyledSectionCard>
                <SectionTwoComponent />
            </StyledSectionCard>
            <StyledSectionCard>
                <SectionThreeComponent />
            </StyledSectionCard>
        </HomePageContext.Provider>
    )
}