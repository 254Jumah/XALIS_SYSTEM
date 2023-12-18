import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AmountStats({}){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Weekly Purchases</div>
                <div className="stat-value">25,600 <FaDollarSign className='w-4 h-4'/></div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Purchases</button> 
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Weekly Bills</div>
                <div className="stat-value">5,600  <FaDollarSign className='w-4 h-4'/> </div>
                <div className="stat-actions">
                    
                    <button className="btn btn-xs">View bills</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats