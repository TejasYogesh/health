import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Graph from './Graph';
import lineChartData from '../data/FakeData';
import BarData from '../data/FakeDataBar';
import PieChart from './Graph3'
import './CssFiles/Graph.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Graph2 = () => {
    // Sample data
    const options = {};


    return (
        <div className='main bg-black'>

            <h1 className='text-8xl p-10 text-blue-400 font-bold'>Marks Scored. <br /><span className='text-xl'>Tejas and Nithin</span></h1>
            <Line options={options} data={lineChartData} />
            <Graph />

            <h2 className='text-white my-24 text-center text-pink-700 text-4xl'>You are <span className='text-8xl font-bold'>400 Marks</span> ahead of Nithin's scores.</h2>

            <br />
            <Bar options={options} data={BarData} />
            <br />
            <PieChart/>
        </div>
    );
}

export default Graph2;