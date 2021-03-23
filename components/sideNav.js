import SideNavStyles from '../styles/SideNav.module.css'
import Link from 'next/link'
import Images from 'next/image'


export default function SideNav(){
	// function handleNavChild(e) {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
	//  let childNav= document.getElementById(SideNavStyles.navChild);
	// 	if (childNav.style.display === "block") {
	// 		childNav.style.display = "none";
	// 	} else {
	// 		childNav.style.display = "block";
	// 	}

	// }
	
	return(
			
		<div className={SideNavStyles.sidebar}>
			<div className={SideNavStyles.navProfilecontainer}>
				<div className={SideNavStyles.flexRow}>
					<div className={SideNavStyles.pImg}>
					<Images
						className={SideNavStyles.navAvatar}
						src="/../public/assets/avatar/avatar.png" 
						height={144} 
						width={144} 
						alt="avatar"
					/>
					</div>
					<div className={SideNavStyles.pInfo}> 
					<a data-bs-toggle="collapse" href="#profileDropdown" role="button" aria-expanded="false" aria-controls="profileDropdown">
						<p className={SideNavStyles.mainText}>Suki</p>
						<p className={SideNavStyles.subText} style={{color:"#C0C5CC !important"}}> suki@kusnap.com <i className="material-icons" style={{marginTop:"-10px", float:"right"}}>expand_more</i> </p> 
						</a> 
						
					</div>
				</div>
				
			</div>
			{/* Drop down */}
			<div className="collapse " id="profileDropdown">
				<div className={SideNavStyles.cardBody}>
					
						<div className={SideNavStyles.flexRow}>
							<div className={SideNavStyles.dropDownIcon}>
							<a href="#settings">
								<i className="material-icons center" >account_circle</i>
							</a>
							</div>
							<div className={SideNavStyles.dropDownText}> 
							<a href="#settings">
								<p className={SideNavStyles.mainText}> Profile</p>
								<p className={SideNavStyles.subText}> Account settings and more</p>
							</a>
						</div>
						</div>
					
					
					<div className={SideNavStyles.flexRow}>
						<div className={SideNavStyles.dropDownIcon}>
						<a href="#logout">
							<i className="material-icons center" > settings_power</i>
						</a>
						</div>
						<div className={SideNavStyles.dropDownText}> 
						<a href="#logout">
							<p className={SideNavStyles.mainText}> Logout</p> 
						</a> 
						
					</div>
					</div>
					
				</div>
				{/* Ends cards body */}
			</div>
			{/* Ends drop down  */}

			{/* Nav links */}
			<div className="">
				<ul className={SideNavStyles.navLink}>
					<li className={SideNavStyles.linkItem }>
						<Link href="/">
						<a className={SideNavStyles.active}><i className="material-icons " style={{marginTop:"0px"}}> dashboard</i>  Dashboard</a>
					</Link>
				</li>
			
					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a data-bs-toggle="collapse" id={SideNavStyles.collapseChildNav} href="#collapseChildNav" role="button" aria-expanded="false" aria-controls="collapseChildNav">  <i className="material-icons " > view_agenda</i> Task
						 <i className="material-icons" style={{marginTop:"-10px", float:"right"}}> keyboard_arrow_right</i> </a> 
					</Link>
					</li>
					
					<ul className={SideNavStyles.navChild}>
					<div className="collapse" id="collapseChildNav"  >
					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a>  <i className="material-icons"> group</i>Users Management  </a>
					</Link>
					</li>

					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a>  <i className="material-icons " > library_add </i> Post Management </a>
					</Link>
					</li>

					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a> <i className="material-icons " >notifications_active </i> Notifications Management </a>
					</Link>
					</li>

					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a> <i className="material-icons">chat </i> Message Management  </a>
					</Link>
					</li>

					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a>  <i className="material-icons " >call_merge </i>Group Management </a>
					</Link>
					</li>
					</div>
					</ul>
					{/* Ends child nav */}

					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a><i className="material-icons " > person</i>  Users Stats</a>
					</Link>
					</li>

					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a> <i className="material-icons "> delete</i>  Trash</a>
					</Link>
					</li>
				</ul>
			</div>
			{/* Ends nav links */} 
			
		</div>
			
	)
}