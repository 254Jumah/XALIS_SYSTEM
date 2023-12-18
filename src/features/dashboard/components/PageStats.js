import BoltIcon  from '@heroicons/react/24/outline/BoltIcon'
import { FaDollarSign } from 'react-icons/fa';

function PageStats({}){
    return(
        <div className="stats bg-base-100 shadow">
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <FaDollarSign className='w-8 h-8'/>
    </div>
    <div className="stat-title">Weekly Cash Sales</div>
    <div className="stat-value">25,9099</div>
    <div className="stat-desc">21% more than last week</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <FaDollarSign className='w-8 h-8'/>
    </div>
    <div className="stat-title">Weekly MPESA Sales</div>
    <div className="stat-value">360000</div>
    <div className="stat-desc">14% more than last WEEK</div>
  </div>
</div>
    )
}

export default PageStats