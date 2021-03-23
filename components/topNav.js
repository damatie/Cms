import TopNavStyles from '../styles/TopNav.module.css'
import Link from 'next/link'
import Images from 'next/image'

export default function TopNav(){

	return(
		<div className="container">
			<div className="row" style={{background:"none", borderBottom:" 1px solid #E7E7E7", paddingLeft:"30px",paddingRight:"30px", backgroundColor:"white", paddingBottom:"12px"}}>
				<div className=" col-lg-1 col">
				<button className={TopNavStyles.expandNavIcon}><i className="material-icons center" > dehaze</i></button>
				</div>
				{/* Ends Expand icon */}
				<div className="col col-lg-2 ">
				<Images
						className={TopNavStyles.logo}
						src="/../public/assets/logo/kusnap-logo.svg" 
						height={75} 
						width={220} 
						alt="avatar"
					/>
				</div>
				{/* Ends logo */}
				<div className="col-lg-7 col-7">
					<form className={TopNavStyles.topNavSearchInput} >
						<div className="row" id={TopNavStyles.topNavSearchDiv}> 
						<div className="col-1"><i className="material-icons" style={{float:"left"}}> search</i> </div>
							<div className="col-11"><input type="text"  placeholder="Search"/></div>
							</div>
					</form>
				</div>
				{/* Ends Search container */}
				<div className="col-lg-2">
					<div className="row" style={{margin:"0px"}}>
						<div className="col"><a className={[TopNavStyles.topNavIcons,TopNavStyles.active ].join(" ")}> <i className="material-icons " >notifications</i></a ></div>
						
						<div className="col"> <a className={TopNavStyles.topNavIcons}> <i className="material-icons " >mail</i></a></div>
						<div className="col"><a className={TopNavStyles.topNavIcons}> <i className="material-icons ">home</i> </a></div>
					</div>
				</div>
				{/* Notification box */}
				<div  id={TopNavStyles.notificationBoxContainer} className={TopNavStyles.notificationBoxContainer}>
								<div className={TopNavStyles.notificationBox}>
									<div className={TopNavStyles.notificationBoxHeader}>
											<div className={TopNavStyles.headerText}> Notifications</div> <div className= {TopNavStyles.count}> <span>20</span></div>
									</div>

									<div className={TopNavStyles.notificationItem}>
										<div className={TopNavStyles.notificationImg}>
											<Images
											className={TopNavStyles.logo}
											src="/../public/assets/avatar/avatar2.svg" 
											height={50} 
											width={40} 
											alt="avatar"
										/>
										</div>  
										<div className={TopNavStyles.notificationText}>
											<h5><span>Ero Klein</span> posted a product</h5>
											<span>1hr ago</span>
										</div>

									</div>

									<div className={TopNavStyles.notificationItem}>
										<div className={TopNavStyles.notificationImg}>
											<Images
											className={TopNavStyles.logo}
											src="/../public/assets/avatar/avatar3.svg" 
											height={50} 
											width={40} 
											alt="avatar"
										/>
										</div>  
										<div className={TopNavStyles.notificationText}>
											<h5><span>Bradely </span> posted a product</h5>
											<span>1hr ago</span>
										</div>

									</div>

									
									<div className={TopNavStyles.notificationItem}>
										<div className={TopNavStyles.notificationImg}>
											<Images
											className={TopNavStyles.logo}
											src="/../public/assets/avatar/avatar3.svg" 
											height={50} 
											width={40} 
											alt="avatar"
										/>
										</div>  
										<div className={TopNavStyles.notificationText}>
											<h5><span>Benjamin</span>   requested a call...</h5>
											<span>1hr ago</span>
										</div>

									</div>
									{/* End item list */}
									</div>
									<a href="#" className={TopNavStyles.notificationAll}>
										<div className={TopNavStyles.notificationFooter}>
										View All
									</div>
								</a>
								
							</div>
						{/* Ends notification box */}
			</div>

		</div>
		// Ends Top nav container
	)
}