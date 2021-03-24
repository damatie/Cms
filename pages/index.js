import Layout from '../components/layout'
import StatBox from '../components/statBox'
import StatBoxStyles from '../styles/components/statBox.module.css'
export default function Dashboard(){
	return(
		<Layout>
			<div className="container contentContainer" >
				<div className="row mb-4">
					<div className="col-lg-3">
						<div className={StatBoxStyles.statSmallBox}>
							<h5>Registered Users</h5>
							<span className={StatBoxStyles.statSubText}>+5.27% Since Last Month</span>
							<div></div>
								
						</div>
					</div>
					<div className="col-lg-3">
						<div className={StatBoxStyles.statSmallBox}>
							<h5>Total Products</h5>
							<span className={StatBoxStyles.statSubText}>+5.27% Since Last Month</span>
							<div></div>
								
						</div>
					</div>
					<div className="col-lg-3">
						<div className={StatBoxStyles.statSmallBox}>
							<h5>Total Groups</h5>
							<span className={StatBoxStyles.statSubText}>+5.27% Since Last Month</span>
							<div></div>
								
						</div>
					</div>
					<div className="col-lg-3">
						<div className={StatBoxStyles.statSmallBox}>
							<h5>Revenue</h5>
							<span className={StatBoxStyles.statSubText}>+5.27% Since Last Month</span>
							<div></div>
						</div>
					</div>
					</div> 
					{/* Ends Small stat box */}
					
					<div className="row mb-4">
						<div className="col-lg-6">
							<div className={StatBoxStyles.statMediumBox}>
								<div className={StatBoxStyles.statMediumBoxHeader}>
									<h5>Sales Overview</h5>
									<span className={StatBoxStyles.statSubText}>Showing data from March 3 - 30th 2020</span>
									<div className="row mt-3">
										<div className="col">
											<h5>OVERALL SALES</h5>
												<span></span>
											</div>
										<div className="col">
											<h5> TODAY’S SALES</h5>
											<span></span>
										</div>
									</div>
								</div>
								{/* End Header */}

								<div className={StatBoxStyles.statMediumBoxBody}>
									<div className={StatBoxStyles.statMediumBoxBodyChart}></div>
								</div>
								{/* Ends body */}
							</div>
						</div>

						<div className="col-lg-6">
							<div className={StatBoxStyles.statMediumBox}>
								<div className={StatBoxStyles.statMediumBoxHeader}>
									<h5>Visitors Overview</h5>
									<span className={StatBoxStyles.statSubText}>Showing data from March 3 - 30th 2020</span>
								</div>
								{/* End Header */}

								<div className={StatBoxStyles.statMediumBoxBody}>
									<div className={StatBoxStyles.statMediumBoxBodyChart}></div>
								</div>
								{/* Ends body */}
							</div>
						</div>
					</div>

			</div>
		</Layout>
	)
}