import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Surtaday'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'field sales',
            data: labels.map(() => { return Math.random() * 18000 + 500 }),
            backgroundColor: 'rgba(53, 162, 235, 1)',
          },
            {
            label: 'kakamega shop',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: 'blue',
          },
          {
            label: 'Total Expenses',
            data: labels.map(() => { return Math.random() * 19000 + 500 }),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          
        
        ],
      };

    return(
      <TitleCard title={"Weekly Accounts sales"}>
            <Bar options={options} data={data} />
      </TitleCard>

    )
}


export default BarChart