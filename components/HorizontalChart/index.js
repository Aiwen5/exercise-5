import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [5, 7, 16, 27, 33, 2, 31,],
                    borderColor: 'rgb(53, 162, 235',
                    backgroundColor: 'rgba(53, 152, 235, 0.4)'
                },
                {
                    label: 'Data 2',
                    data: [10, 23, 12, 23, 31, 2, 1,],
                    borderColor: 'rgb(100, 255, 235',
                    backgroundColor: 'rgba(53, 152, 235, 0.4)'
                },
                {
                    label: 'Data 3',
                    data: [1, 23, 12, 3, 21, 28, 19,],
                    borderColor: 'rgb(200, 23, 235',
                    backgroundColor: 'rgba(53, 152, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <div>
            <Bar data={chartData} options={chartOptions} style={{ width: "500px", height: "300px"}} />
        </div>
    )
}