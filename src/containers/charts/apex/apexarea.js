import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Apexarea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'area',
                    toolbar: {
                        show: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                colors: ['#4090cb', '#e74c5e'],
                xaxis: {
                    categories: ['1', '2', '3', '4', '5'],
                },
                grid: {
                    yaxis: {
                        lines: {
                            show: true,
                        }
                    }
                },
            },
                series : [{
                    name: 'Series 1',
                    data: [22, 54, 42, 84, 48]
                }, {
                    name: 'Series 2',
                    data: [11, 32, 60, 32, 34]
                }]
            
            }
        }

    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" width="100%" height="299" />
            </React.Fragment>
        );
    }
}

export default Apexarea;   