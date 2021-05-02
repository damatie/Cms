import StatBoxStyles from '../styles/components/statBox.module.css'

export default function StatBox(props){
	return(
		<div className="row">
      <div className="col-lg-2">
          <div className={[StatBoxStyles.statSmallerBox, StatBoxStyles.statSmallerBoxW].join(" ")}>
            <h4> {props.TotalUsers}</h4>
            <span className={StatBoxStyles.statSubText}>Total Users</span>
              
          </div>
      </div>
      <div className="col-lg-2">
        <div className={[StatBoxStyles.statSmallerBox, StatBoxStyles.statSmallerBoxG].join(" ")}>
          <h4>{props.ActiveUsers}</h4>
          <span className={StatBoxStyles.statSubText}>Active Users</span>
        </div>
      </div>
      <div className="col-lg-2">
        <div className={[StatBoxStyles.statSmallerBox, StatBoxStyles.statSmallerBoxB].join(" ")}>
          <h4>{props.InactiveUsers}</h4>
          <span className={StatBoxStyles.statSubText}>Inactive Users</span>
        </div>	
      </div>
      <div className="col-lg-2">
        <div className={[StatBoxStyles.statSmallerBox, StatBoxStyles.statSmallerBoxR].join(" ")}>
          <h4>{props.BlockedUsers}</h4>
          <span className={StatBoxStyles.statSubText}>Blocked Users</span>
        </div>	
      </div>
    </div>
    
	)

}