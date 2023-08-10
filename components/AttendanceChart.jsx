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
  time,
} from 'chart.js';

// Custom plugin to add shading below a specified value
class ShadingBelowValue {
  beforeDraw(chart) {
    const ctx = chart.ctx;
    const xAxis = chart.scales['x'];
    const yAxis = chart.scales['y'];
    const belowValue = 75;

    if (xAxis && yAxis) {
      const yPixel = yAxis.getPixelForValue(belowValue);
      ctx.fillStyle = 'rgba(255, 0, 0, 0.1)'; // Red shading color with opacity
      ctx.fillRect(xAxis.left, yPixel, xAxis.width, yAxis.bottom - yPixel);
    }
  }
}

const AttendanceChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    { id: 'shadingBelowValue', beforeDraw: (chart, args, options) => new ShadingBelowValue(chart, options) }
  );

  var dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var attendancePercentage = [100, 99.87, 98, 91, 88, 79, 74, 66, 68, 69, 70, 74, 81];
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Attendance Percentage',
        data: attendancePercentage,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Minimum Attendance (75%)',
        data: Array(dates.length).fill(75),
        borderColor: 'red',
        borderWidth: 1,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        type: time,
        time: {
          unit: 'day', // Display unit as 'day'
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default AttendanceChart;
