import StatBoxStyles from '../styles/components/statBox.module.css'

export default function StatBox(){
	return(
		<div className="row">
      <div className="col-lg-2">
          <div className={[StatBoxStyles.statSmallerBox, StatBoxStyles.statSmallerBoxW].join(" ")}>
            <h4>50,000</h4>
            <span className={StatBoxStyles.statSubText}>Total Users</span>
              
          </div>
      </div>
      <div className="col-lg-2">
        <div className={[StatBoxStyles.statSmallerBox, StatBoxStyles.statSmallerBoxG].join(" ")}>
          <h4>50,000</h4>
          <span className={StatBoxStyles.statSubText}>TActive Users</span>
        </div>
      </div>
      <div className="col-lg-2">
        <div className={[StatBoxStyles.statSmallerBox, StatBoxStyles.statSmallerBoxB].join(" ")}>
          <h4>50,000</h4>
          <span className={StatBoxStyles.statSubText}>Inactive Users</span>
        </div>	
      </div>
      <div className="col-lg-2">
        <div className={[StatBoxStyles.statSmallerBox, StatBoxStyles.statSmallerBoxR].join(" ")}>
          <h4>50,000</h4>
          <span className={StatBoxStyles.statSubText}>Blocked Users</span>
        </div>	
      </div>
    </div>
    
	)

}