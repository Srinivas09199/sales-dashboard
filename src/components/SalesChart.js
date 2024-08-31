import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const SalesChart = () => {
    const data = {
        labels: ['6/25/2024', '7/05/2024', '7/15/2024', '7/25/2024', '8/25/2024'],
        datasets: [
            {
                label: 'Orders',
                data: [1.6, 1.2, 0.8, 0.4, 0],
                fill: false,
                borderColor: '#f19336',
                tension: 0.1,
            },
            {
                label: 'Sales',
                data: [4, 3, 2, 1, 0],
                fill: false,
                borderColor: '#44a4a7',
                tension: 0.1,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales vs Orders',
            },
        },
    };

    return (
        <div className="chart-container">
            <Line data={data} options={options} />
        </div>
    );
};

export default SalesChart;
