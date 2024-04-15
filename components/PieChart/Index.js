import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Green", "Orange", "Purp", "Goib"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 23, 12, 23, 31, 2,],
                    borderColor: 'rgb(53, 162, 235',
                    backgroundColor: [
                        'rgba(255, 152, 255, 0.4)',
                        'rgba(53, 255, 255, 0.4)',
                        'rgba(255, 0, 23, 0.4)',
                        'rgba(2, 133, 235, 0.4)',
                        'rgba(49, 152, 235, 0.4)',
                        'rgba(53, 152, 235, 0.4)'
                    ],
                    borderWidth: 1
                }
            ]
        })

        setChartOptions({
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
            <Pie data={chartData} options={chartOptions} />
        </div>
    )
}