
import './Card.css'
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

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [120, 160, 40, 60, 80, 10, 0],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export default function Card(props) {

    return (
        <>

            <div className="card-container">
                <div className="card-heading">
                    {props.heading}
                </div>
                <div className='card-contents'>
                    <Line options={options} data={data} height="100px"/>
                </div>
            </div>
        </>
    )
} 