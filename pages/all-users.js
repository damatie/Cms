import Layout from '../components/CmsLayout.js'
import Link from 'next/link'
import Images from 'next/image'
import InputStyles from '../styles/components/input.module.css'
import Button from '../components/Btn.js'
import StatBox from '../components/BoxStats.js'
import SortUsers from '../components/UsersSort.js'
import AddUser from '../components/ModalUser.js'
import EditUser from '../components/ModalUser.js'
import {handleUserUpdate} from '../components/ModalUser.js'
import ButtonStyles from '../styles/components/button.module.css'
import UserTableStyles from '../styles/components/usersTable.module.css'
import {useEffect, useState} from 'react'
import * as cookie from 'cookie'
import {Host} from './utils/Auth'

import  Router  from 'next/router'


export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
	const Access = parsedCookies.Bearer
	// console.log(Access)
  const res =  await fetch(`${Host()}/user/all`, { 
    method: 'GET', 
    headers: {
      'Authorization': `Bearer ${Access}`,
      'Content-Type': 'application/json',
    }, 
  });
  const data = await res.json()
	
    // console.log(data.name)

  return { 

    props: { users:data}// will be passed to the page component as props
  }
}


export default function AllUsers({users}){
	
	const totalUsers = users.data.filter(function(user){
		return user;
	}).length;
	// console.log(totalUsers)

	const activeUsers = users.data.filter(function(user){
		return user.active==true;
	}).length;
	// console.log(activeUsers)

	const inactiveUsers = users.data.filter(function(user){
		return user.active==false;
	}).length;
	// console.log(inactiveUsers)

	const blockedUsers = users.data.filter(function(user){
		return user.blocked;
	}).length;
	// console.log(blockedUsers)
	

	return(
		<Layout>
				
			{/* {names.data.map((data, i) =>(<li key={i}> {data.id} {data.name}</li>))} */}
			<div className="container contentContainer" >
				<div className="breadcrumbs"><span className="parent">Users Management </span> <i className="las la-angle-right"></i> <span className="child"> All Users</span></div>
					<StatBox TotalUsers={totalUsers} ActiveUsers={activeUsers} InactiveUsers={inactiveUsers} BlockedUsers={blockedUsers}></StatBox>
				{/* End smaller box */}
				<SortUsers></SortUsers>
				<AddUser title="Create New User" target="addUser" label="REGISTER"/>
				{users.data.map((data, i)=>
				<EditUser key={i} title="Edit User" user_id={data.userId} name={data.name}  username={data.username} email={data.email}  phoneNumber={data.phoneNumber} target={`Edit-`+data.id} label="SAVE CHANGES"/>)}
				{/* Ends sort section */}

				<div className="row mt-2">
					<div className="col-lg-12 user_Table">
					<table className={UserTableStyles.usersTable}>
						
							<thead>
								<tr>
									<th scope="col">No.</th>
									<th scope="col" width="170px">Username</th>
									<th scope="col">Email</th>
									<th scope="col">Product</th>
									<th scope="col">Group</th>
									<th scope="col">Likes</th>
									<th scope="col">Status</th>
									<th scope="col">Created </th>
									<th scope="col" width="24%">Actions</th>
									
								</tr>
							</thead>
							<tbody>
									{users.data.map((data, i) =>( 
								<tr  key={i}>
							
									<th scope="row">
									<input className="form-check-input" type="checkbox" value="" id=""/>
										<label className="form-check-label" htmlFor="check">
										</label>
										
									</th>
									<td>
									
										<span className={UserTableStyles.tableAvatar}>
										{(data.imageId== null)? 
										
										<Images
										className={UserTableStyles.img}
										src={`/assets/avatar/default.png`}
										height={25} 
										width={25} 
										alt="avatar"
									/>
										
										
										: <Images
										className={UserTableStyles.img}
										src={`https://res.cloudinary.com/kusnap/image/upload/v1598992387/${data.imageId}.jpg`}
										height={25} 
										width={25} 
										alt="avatar"
									/>
										}
										
										
									
										</span> 
									<span className={UserTableStyles.tableName}> {data.username}</span>
									</td>
									<td>{data.email}</td>
									<td>{data.products}</td>
									<td>{data.createdGroups}</td>
									<td>{data.userfollowers}</td>
									<td><span className="status_active">
										{(data.active== true)? "Active" : "Pending"} </span></td>
									<td>{data.joined}</td>
									<td>
									<Button 
										label="View User"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.green].join(" ")}
										/>
										<Button 
										label="Edit"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.warning].join(" ")}
										data="modal"
										target={`#Edit-`+data.id}
										/>
										<Button 
										label="Block User"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.danger].join(" ")}
										/>
									</td>
								</tr>
								))}
								
							</tbody>
						</table>
					</div>
				</div>
				{/* Ends table */}
			</div>
		</Layout>
		
	)
}