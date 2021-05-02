import React, {useEffect } from 'react';
import SideNavStyles from '../styles/components/SideNav.module.css'
import Link from 'next/link'
// import Link from './utils/ActiveLink.js'
import Images from 'next/image'
import {useRouter } from "next/router";
import Router from "next/router";
import {myCookie,deleteCookie,getCookie, Host,AuthToken,checkIfLoggedIn,sendToken} from '../pages/utils/Auth'



export default function SideNav(){
	async function LoginOut(){
		if(!deleteCookie("Bearer")){
			Router.push("/login")
		}
		
		
	}
	
	const router = useRouter();
	
	useEffect(() => {
		let toggleChild= document.getElementById("navChild");
		if (router.pathname !== "/all-users" && router.pathname !== "/active-users" &&  router.pathname !== "/blocked-users") {
			toggleChild.style.display ="none"
		}else{
			toggleChild.style.display ="block"
		} 
		
  });

	
	function handleNavChild(e) {
    e.preventDefault();
    // console.log('The link was clicked.');
	 let toggleChild= document.getElementById("navChild");
		if (toggleChild.style.display ==="block") {
			toggleChild.style.display = "none";
			
		} else {
			toggleChild.style.display = "block";
			}
		}
		

	return(
			
		<div className={SideNavStyles.sidebar}>
			<div className={SideNavStyles.navProfilecontainer}>
				<div className={SideNavStyles.flexRow}>
					<div className={SideNavStyles.pImg}>
					<Images
						className={SideNavStyles.navAvatar}
						src="/assets/avatar/avatar.png"
						height={144} 
						width={144} 
						alt="avatar"
					/>
					</div>
					<div className={SideNavStyles.pInfo}> 
						<a>
							<p className={SideNavStyles.mainText}>Kusnap Admin</p>
							<p className={SideNavStyles.subText}> admin@kusnap.com  </p> 
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
						<a className={router.pathname == "/" ? SideNavStyles.active : ""}><i className="las la-border-all"></i>  Dashboard</a>
						
					</Link>
					</li>
			
					<li className={SideNavStyles.linkItem}>
						<a onClick={handleNavChild} className={router.pathname !== "/all-users" ? router.pathname !=="/active-users" ? router.pathname !=="/blocked-users" ? " ":SideNavStyles.active : SideNavStyles.active : SideNavStyles.active }  role="button" aria-expanded="false" aria-controls="collapseChildNav">  <i className="las la-user-friends"></i>Users Management
						<i className="las la-angle-right" style={{marginTop:"-10px", float:"right"}}></i> </a> 
					</li>

					{/* Starts sub nav */}
					<ul className={[SideNavStyles.navChild].join(" ")}  id= "navChild">
						<div className="navToggle" >

						<li className={SideNavStyles.linkItem}>
							<Link href="/all-users">
								<a className={router.pathname == "/all-users" ? SideNavStyles.navChildActive  : ""}> All Users</a>
							</Link>
							</li>
							
							<li className={SideNavStyles.linkItem}>
							<Link href="/active-users">
								<a className={router.pathname == "/active-users" ? SideNavStyles.navChildActive  : ""}>Active Users</a>
							</Link>
							</li>

							<li className={SideNavStyles.linkItem}>
							<Link href="/blocked-users">
								<a className={router.pathname == "/blocked-users" ? SideNavStyles.navChildActive  : ""}> Blocked Users</a>
							</Link>
							</li>
						</div>
					</ul>
					{/* Ends sub nav */}

					<li className={SideNavStyles.linkItem}>
					<Link href="/#">
						<a data-bs-toggle="collapse" id={SideNavStyles.collapseChildNav} data-bs-target="#admin-management" role="button" aria-expanded="false" aria-controls="collapseChildNav">  <i className="las la-users-cog"></i> Admin Management
						 <i className="las la-angle-right" style={{marginTop:"-10px", float:"right"}}></i> </a> 
					</Link> 
					</li>

					{/* Starts sub nav */}
					<ul className={SideNavStyles.navChild}>
						<div className="collapse" id="admin-management"  >

						<li className={SideNavStyles.linkItem}>
							<Link href="/all-admin">
								<a> All Admin</a>
							</Link>
							</li>
							
							<li className={SideNavStyles.linkItem}>
							<Link href="/active-admin">
								<a>Active Admin</a>
							</Link>
							</li>

							<li className={SideNavStyles.linkItem}>
							<Link href="/blocked-admin">
								<a> Blocked Admin</a>
							</Link>
							</li>
						</div>
					</ul>
					{/* Ends sub nav */}

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
		
						<button type="button" className="navLogout" onClick={()=>LoginOut()}><i className="las la-power-off"></i> Logout</button>
					
					</li>
				</ul>
			</div>
			{/* Ends nav links */} 
			
		</div>
			
	)
}