import {Line} from 'react-chartjs-2'
// eslint-disable-next-line
import {Chart as ChartJS} from 'chart.js/auto'
import {useEffect, useState} from 'react'

const Graph = ({coinChartData, coin}) => {
  const [dateList, setDateList] = useState([])
  const [priceList, setPriceList] = useState([])

  const sortData = (data) => {
    console.log('sort data')
    console.log(data)
    data.forEach((item) => {
      setPriceList((prevList) => {
        return [...prevList, item[1]]
      })
      setDateList((prevList) => {
        return [...prevList, new Date(item[0]).toLocaleDateString('en-US')]
      })
    })
  }

  useEffect(() => {
    console.log('graph use fired')
    sortData(coinChartData)
    // eslint-disable-next-line
  }, [])

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    hover: {
      intersect: false,
    },
    plugins: {
      tooltip: {
        intersect: false,
      },
    },
  }
  const chartData = {
    labels: dateList,
    datasets: [
      {
        label: `${coin.id.charAt(0).toUpperCase() + coin.id.slice(1)} Price`,
        data: priceList,
        pointRadius: 0,
        backgroundColor: '#5e61fa',
        borderColor: '#5e61fa',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
        options: {
          scaleShowVerticalLines: false,
        },
      },
    ],
  }
  return <Line data={chartData} options={options} />
}

export default Graph
