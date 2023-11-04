import React, {useEffect, useState} from 'react';
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
import {Line} from 'react-chartjs-2';

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
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Order Chart',
        },
    },
};

const Home = () => {

    return (
        <div className={'w-full grid grid-cols-1 lg:grid-cols-2 gap-5'}>
            <App/>
            <App/>
        </div>
    );
};

export default Home;


function App() {

    const [labels, setLabels] = useState(['January', 'February']);
    const [haha, setHaha] = useState([30, 40]);


    useEffect(() => {
        setTimeout(() => {
            setLabels(['March', 'May'])
            setHaha([100, 20]);
        }, 3000)
    }, [])

    const data = {
        labels,
        datasets: [
            {
                label: 'Transactions',
                data: haha,
                borderColor: '#f24406',
                backgroundColor: '#f2440640',
            },
        ],
    };

    return (
        <div className={'w-full p-5 bg-white'}>
            <Line width={500} height={300} options={options} data={data}
            />
        </div>
    );
}

