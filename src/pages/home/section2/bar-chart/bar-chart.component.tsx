import React, { useEffect, useContext, useState, useCallback } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import moment from 'moment';

import { HomePageContext } from '../../home.context';
import { AppContext } from '../../../../app/App.context';

export default () => {
  const { spotifyService } = useContext(AppContext);
  const { chartData, setMusicsListed } = useContext(HomePageContext);
  const [chart, setChart] = useState();
  
  const handleColumnChartBackgroundColor = (fill: any, target: any) => {
    if (target.dataItem) {
      const dataContext = target.dataItem.dataContext as any;
      return target.dataItem ? dataContext.color : fill;
    }
  }

  const handleChartItemClick = useCallback(
    async (ev: any) => {
      const dataItem = ev.target.dataItem as any;
      const itemValues = dataItem.dataContext;

      const albumData = await spotifyService.getAlbumData(itemValues.albumId)
      if (albumData) {
        const mapToMusicsListed = albumData.tracks.items.map(({ name, track_number, disc_number, popularity, explicit }: any) => ({
          explicit,
          popularity,
          albumId: itemValues.albumId,
          diskNumber: disc_number,
          trackNumber: track_number,
          musicName: name, 
        }))

        setMusicsListed(mapToMusicsListed);
      }
    }, 
    [setMusicsListed, spotifyService]
  );

  const handleColumnChartStyle = (_: any, target: any) => {
    var pattern = new am4core.LinePattern();
    pattern.width = 10;
    pattern.height = 10;
    pattern.strokeWidth = 1;
    if (target.dataItem) {
      const dataContext = target.dataItem.dataContext as any;
      pattern.stroke = dataContext.color;
    }
    pattern.rotation = 45;
    return pattern;
  }

  useEffect(() => {
    if (chart) {
      const data = chartData.map(({ releaseDate, ...data }) => ({
        ...data,
        releaseDate: moment(releaseDate).toDate(),
      }))

      chart.data = data;
    }
  }, [chartData, chart]);

  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    const chartRef = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chartRef.data = [];

    // Create axes
    const dateAxis = chartRef.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.date = "releaseDate";
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;

    dateAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      // & 2 == 2
      if (target.dataItem && target.dataItem.index && dy) {
        return dy + 25;
      }
      return dy;
    });
    // Set to show only the year, on a interval of year by year
    dateAxis.baseInterval = {
      timeUnit: 'year',
      count: 1,
    }

    chartRef.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series = chartRef.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "totalTrack";
    series.dataFields.dateX = "releaseDate";
    series.name = "Total de músicas";
    series.columns.template.tooltipText = "[bold]{albumName}[/]";
    series.columns.template.fillOpacity = .8;

    // Get data on item click
    series.columns.template.events.on("hit", handleChartItemClick);

    // Set columns lines style chart color
    series.columns.template.adapter.add("fill", handleColumnChartStyle);

    // Change columns background color
    series.columns.template.background.adapter.add("fill", handleColumnChartBackgroundColor);

    const activeState = series.columns.template.states.create("active");
    activeState.properties.fillOpacity = .5;

    // Erases border from columns
    const columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 0;

    if (series.tooltip) {
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#212121");
    }

    // Add X scrollbar
    chartRef.scrollbarX = new am4core.Scrollbar();

    setChart(chartRef);
  }, [handleChartItemClick]);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "400px" }}></div>
  )
}