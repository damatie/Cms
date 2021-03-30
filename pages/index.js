import Layout from '../components/Layout'
import TopDateFilter from '../components/TopDateFilter'
import StatBoxStyles from '../styles/components/statBox.module.css'
import InputStyles from '../styles/components/input.module.css'

export default function Dashboard(){
	return(
		<Layout>
			<div className="container contentContainer" >
				<TopDateFilter></TopDateFilter>
				<div className="row mb-4 ">
					<div className="col-lg-3">
						<div className={[StatBoxStyles.statSmallBox, StatBoxStyles.statBoxBlue].join(" ")}>
							<h5>Registered Users</h5>
							<span className={StatBoxStyles.statSubText}>+5.27% Since Last Month</span>
							<div></div>
								
						</div>
					</div>
					<div className="col-lg-3">
						<div className={[StatBoxStyles.statSmallBox, StatBoxStyles.statBoxGreen].join(" ")}>
							<h5>Total Products</h5>
							<span className={StatBoxStyles.statSubText}>+5.27% Since Last Month</span>
							<div></div>
								
						</div>
					</div>
					<div className="col-lg-3">
						<div className={[StatBoxStyles.statSmallBox, StatBoxStyles.statBoxWhite].join(" ")}>
							<h5>Total Groups</h5>
							<span className={StatBoxStyles.statSubText}>+5.27% Since Last Month</span>
							<div></div>
								
						</div>
					</div>
					<div className="col-lg-3">
						<div className={[StatBoxStyles.statSmallBox, StatBoxStyles.statBoxRed].join(" ")}>
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
					{/* Ends Medium Stat Box */}

					<div className="row mb-4" >
						<div className="col-lg-12 ">
							<div className={StatBoxStyles.statLargeBox}>
								<div className="row ">
									<div className="col-6 " style={{margin:"0px", paddingRight:"0px "}} >
										<div className={StatBoxStyles.statLargeBoxHeader}>Top 12 User Keywords</div>
										{/* Ends Header */}
										<div className={StatBoxStyles.statLargeBoxBody}>
											<div className="row">
												<div className="col-lg-12" >
													<div className={StatBoxStyles.statLargeChart}>
														
													</div>
												</div>
											</div>
										</div>
										{/* Ends Body */}
									</div>

									<div className="col-6" style={{margin:"0px", paddingLeft:"0px "}}>
										<div className={StatBoxStyles.statLargeBoxHeader}>App Download</div>
										{/* Ends Header */}
										<div className={[StatBoxStyles.statLargeBoxBody, StatBoxStyles.borderLightGray].join(" ")}>
											<div className="row">
												<div className="col-lg-12 ">
													<div className={StatBoxStyles.statLargeChart}>
														
													</div>
												</div>
											</div>
										</div>
										{/* Ends Body */}
									</div>

								</div>
							</div>
						</div>
					</div>
					{/* Ends Large Stat Box */}

			</div>
		</Layout>
	)
}