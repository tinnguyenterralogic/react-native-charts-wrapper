import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,processColor
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';

import {LineChart} from 'react-native-charts-wrapper';

class LineChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: true,
        textColor:  processColor('blue'),
        textSize: 12,
        position: 'BELOW_CHART_RIGHT',
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
        custom: {
          colors: [processColor('red'), processColor('blue'), processColor('green')],
          labels: ['Company X', 'Company Y', 'Company Dashed']
        }
      },
      marker: {
        enabled: true,
        type: 'oval',
        backgroundTint: processColor('teal')
      }
    };
  }

  componentDidMount() {
    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{y: 100}, {y: 110}, {y: 105}, {y: 115}],
              label: 'Company X',
              config: {
                lineWidth: 2,
                drawCircles: false,
                drawCubic: true,
                highlightColor: processColor('red'),
                color: processColor('red'),
                drawFilled: true,
                fillColor: processColor('red'),
                fillAlpha: 60,
                dashedLine: {
                  lineLength: 20,
                  spaceLength: 20
                }
              }
            }, {
              values: [{y: 90}, {y: 130}, {y: 100}, {y: 105}],
              label: 'Company Y',
              config: {
                lineWidth: 1,
                drawCubic: true,
                drawCubicIntensity: 0.4,
                circleRadius: 5,
                drawHighlightIndicators: false,
                color: processColor('blue'),
                drawFilled: true,
                fillColor: processColor('blue'),
                fillAlpha: 45,
                circleColor: processColor('blue')
              }
            }, {
              values: [{y: 110}, {y: 105}, {y: 115}, {y: 110}],
              label: 'Company Dashed',
              config: {
                color: processColor('green'),
                drawFilled: true,
                drawCubic: true,
                fillColor: processColor('green'),
                fillAlpha: 50
              }
            }],
          }
        },
        xAxis: {
          $set: {
            valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4']
          }
        }
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <LineChart
          style={styles.chart}
          data={this.state.data}
          description={{text: ''}}
          legend={this.state.legend}
          marker={this.state.marker}
          xAxis={this.state.xAxis}
          drawGridBackground={false}
          borderColor={processColor('teal')}
          borderWidth={1}
          drawBorders={true}

          touchEnabled={true}
          dragEnabled={true}
          scaleEnabled={true}
          scaleXEnabled={true}
          scaleYEnabled={true}
          pinchZoom={true}
          doubleTapToZoomEnabled={true}

          dragDecelerationEnabled={true}
          dragDecelerationFrictionCoef={0.99}

          keepPositionOnRotation={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default LineChartScreen;
