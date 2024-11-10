import React from 'react';
import {Pie} from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Graph from './Graph';
import lineChartData from '../data/FakeData';
import BarData from '../data/FakeDataBar';
import pieChartData from '../data/PieData'
import './CssFiles/Graph.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


// Register the components
ChartJS.register(CategoryScale, LinearScale, ArcElement, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Graph2 = () => {
    // Sample data
    const options = {};


    return (
        <div className='main bg-black text-center m-10'>
            <Pie options={options} data={pieChartData} />

        </div>
    );
}

export default Graph2;