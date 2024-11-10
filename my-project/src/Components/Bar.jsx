import React from 'react';
import { Bar } from 'react-chartjs-2';
import lineChartData from '../data/FakeData'
import './CssFiles/Graph.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    // PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Bar = () => {
    // Sample data
    const options = {};


    return (

        <div className='main'>

            <Bar data={data} options={lineChartData} />
        </div>
    );
}

export default Bar;