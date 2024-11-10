import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import SourceData from '../data/sourceData.json';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const Graph = () => {
    return (
        <div>

            <div className='grid grid-cols-2 m-48'>
                <div className='h-[50vh]'>
                    <Bar
                        data={{
                            labels: SourceData.map((data) => data.label),
                            datasets: [
                                {
                                    label: "Pulse Rate",
                                    data: SourceData.map((data) => data.value),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                    ]
                                },
                                {
                                    label: "Loss",
                                    data: [200, 300, 400],
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)', // Optional: Add background color for Loss dataset
                                }
                            ],
                        }}
                        options={{
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Revenue and Loss',
                                },
                            },
                            layout: {
                                padding: {
                                    left: 20,
                                    right: 20,
                                    top: 20,
                                    bottom: 20
                                }
                            },
                            scales: {
                                x: {
                                    grid: {
                                        color: 'rgba(255, 255, 255, 90.3)', // Optional: Customize grid color
                                    }
                                },
                                y: {
                                    grid: {
                                        color: 'rgba(255, 255, 255, 90.3)', // Optional: Customize grid color
                                    }
                                }
                            },
                            elements: {
                                bar: {
                                    backgroundColor: 'rgba(255, 255, 255, 7.5)', // Background color for bars
                                }
                            }
                        }}
                    />
                </div>
                <div className='h-[50vh]'> <Bar
                    data={{
                        labels: SourceData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Revenue",
                                data: SourceData.map((data) => data.value),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                ]
                            },
                            {
                                label: "Loss",
                                data: [200, 300, 400],
                                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Optional: Add background color for Loss dataset
                            }
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Revenue and Loss',
                            },
                        },
                        layout: {
                            padding: {
                                left: 20,
                                right: 20,
                                top: 20,
                                bottom: 20
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    color: 'rgba(255, 255, 255, 90.3)', // Optional: Customize grid color
                                }
                            },
                            y: {
                                grid: {
                                    color: 'rgba(255, 255, 255, 90.3)', // Optional: Customize grid color
                                }
                            }
                        },
                        elements: {
                            bar: {
                                backgroundColor: 'rgba(255, 255, 255, 7.5)', // Background color for bars
                            }
                        }
                    }}
                /></div>
            </div>
        </div>
    );
}

export default Graph;