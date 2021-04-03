import TopNavStyles from '../styles/components/TopNav.module.css'
import Link from 'next/link'
import Images from 'next/image'
import NotificationBox from './NotificationBox.js'

export default function TopNav(){
	function handleNotification(e) {
    e.preventDefault();
    console.log('The notification was clicked.');
	 let navNotification= document.getElementById(TopNavStyles.notificationBoxContainer);
	 let nIconColor= document.getElementById(TopNavStyles.active);
		if (navNotification.style.display === "block") {
			navNotification.style.display = "none";
			nIconColor.style.color = "#757575";
		} else {
			navNotification.style.display = "block";
			nIconColor.style.color = "#1976D2";
		}
	}
	return(
		<div className="container  ">
			<div className="row" style={{background:"none", borderBottom:" 1px solid #E7E7E7", paddingLeft:"30px",paddingRight:"30px", backgroundColor:"white", paddingBottom:"12px"}}>
				<div className=" col-lg-1 col">
				<button className={TopNavStyles.expandNavIcon}> <i className="las la-align-justify"></i> </button>
			
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
						<div className="col-1"><i className="material-icons" style={{float:"left"}}> search</i>  </div>
							<div className="col-11"><input type="text"  placeholder="Search"/></div>
							</div>
					</form>
				</div>
				{/* Ends Search container */}
				<div className="col-lg-2">
					<div className="row" style={{margin:"0px"}}>
						<div className="col"><a onClick={handleNotification}  className={[TopNavStyles.topNavIcons,TopNavStyles.active ].join(" ")}> <i className="lar la-bell" id={TopNavStyles.active } ></i></a ></div> 
						
						<div className="col"> <a  className={TopNavStyles.topNavIcons}> <i className="las la-envelope"></i></a></div>
						<div className="col"><a className={TopNavStyles.topNavIcons}> <i className="las la-home"></i> </a></div>
					</div>
				</div>
				{/* Notification box */}
					<NotificationBox></NotificationBox>
				{/* Ends notification box */}
				</div>
			</div>
		// Ends Top nav container
	)
}