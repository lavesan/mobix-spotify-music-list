import React, { useContext } from 'react';
import { StyledH2 } from '../home.styles';
import { BarChartComponent } from './bar-chart';
import { HomePageContext } from '../home.context';

export default () => {
    const { chartData } = useContext(HomePageContext);

    return (
        <>
            <StyledH2>PAINEL DE ÁLBUNS</StyledH2>
            <BarChartComponent chartData={chartData} />
        </>
    )
}