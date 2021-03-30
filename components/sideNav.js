import SideNavStyles from '../styles/components/SideNav.module.css'
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
						<a>
							<p className={SideNavStyles.mainText}>Suki</p>
							<p className={SideNavStyles.subText}> suki@kusnap.com  </p> 
						</a> 
					</div>
				</div>
			</div>
			{/* Drop down */}
			
			{/* <div className="collapse " id="profileDropdown">
				<div className={SideNavStyles.cardBody}>
					
						<div className={SideNavStyles.flexRow}>
							<div className={SideNavStyles.dropDownIcon}>
							<a href="#settings">
								<i class="las la-user-alt"></i>
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
						<i class="las la-power-off"></i>
						</a>
						</div>
						<div className={SideNavStyles.dropDownText}> 
						<a href="#logout">
							<p className={SideNavStyles.mainText}> Logout</p> 
						</a> 
						
					</div>
					</div>
					
				</div>
			</div> */}
			{/* Ends drop down  */}

			{/* Nav links */}
			<div className="">
				<ul className={SideNavStyles.navLink}>
					<li className={SideNavStyles.linkItem }>
						<Link href="/">
						<a className={SideNavStyles.active}><i className="las la-border-all"></i>  Dashboard</a>
						
					</Link>
					</li>
			
					<li className={SideNavStyles.linkItem}>
						<a data-bs-toggle="collapse" id={SideNavStyles.collapseChildNav} data-bs-target="#users-management" role="button" aria-expanded="false" aria-controls="collapseChildNav">  <i className="las la-user-friends"></i>Users Management
						<i className="las la-angle-right" style={{marginTop:"-10px", float:"right"}}></i> </a> 
					</li>

					{/* Starts sub nav */}
					<ul className={SideNavStyles.navChild}>
						<div className="collapse" id="users-management"  >

						<li className={SideNavStyles.linkItem}>
							<Link href="/all-users">
								<a> All Users</a>
							</Link>
							</li>
							
							<li className={SideNavStyles.linkItem}>
							<Link href="/users-management">
								<a>Active Users</a>
							</Link>
							</li>

							<li className={SideNavStyles.linkItem}>
							<Link href="/">
								<a> Blocked Users</a>
							</Link>
							</li>
						</div>
					</ul>
					{/* Ends sub nav */}

					<li className={SideNavStyles.linkItem}>
					<Link href="/#">
						<a data-bs-toggle="collapse" id={SideNavStyles.collapseChildNav} href="#task" role="button" aria-expanded="false" aria-controls="collapseChildNav">  <i className="las la-users-cog"></i> Admin Management
						 <i className="las la-angle-right" style={{marginTop:"-10px", float:"right"}}></i> </a> 
					</Link> 
					</li>

					<li className={SideNavStyles.linkItem }>
						<Link href="/">
						<a><i className="las la-calendar-plus"></i> Post Management</a>
						
					</Link>
					</li>
					<li className={SideNavStyles.linkItem }>
						<Link href="/">
						<a><i className="las la-bell"></i> Notifications Management</a>
						
					</Link>
					</li>
					<li className={SideNavStyles.linkItem }>
						<Link href="/">
						<a><i className="las la-comments"></i>  Message Management</a>
					</Link>
					</li>

					<li className={SideNavStyles.linkItem }>
						<Link href="/">
						<a><i className="las la-users"></i> Group Management</a>
						
					</Link>
					</li>

					<li className={SideNavStyles.linkItem }>
						<Link href="/">
						<a><i className="las la-user-clock"></i> Admin Stats</a>
						
					</Link>
					</li>

					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a><i className="las la-trash-alt"></i>  Trash</a>
					</Link>
					</li>
					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a> <i className="las la-tools"></i>  Settings</a>
					</Link>
					</li>
					<li className={SideNavStyles.linkItem}>
					<Link href="/">
						<a><i className="las la-power-off"></i> Logout</a>
					</Link>
					</li>
				</ul>
			</div>
			{/* Ends nav links */} 
			
		</div>
			
	)
}