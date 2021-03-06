import Layout from '../components/CmsLayout.js'
import Link from 'next/link'
import Images from 'next/image'
import InputStyles from '../styles/components/input.module.css'
import Button from '../components/Btn.js'
import StatBox from '../components/BoxStats.js'
import SortUsers from '../components/UsersSort.js'
import AddUser from '../components/ModalUser.js'
import EditUser from '../components/ModalUser.js'
import ButtonStyles from '../styles/components/button.module.css'
import UserTableStyles from '../styles/components/usersTable.module.css'

export default function ActiveUsers(){
 
	return(
		<Layout>
			<div className="container contentContainer" >
				<div className="breadcrumbs"><span className="parent">Users Management </span> <i className="las la-angle-right"></i> <span className="child"> Active  Users</span></div>
					<StatBox></StatBox>
				{/* End smaller box */}
				<SortUsers></SortUsers>
				<AddUser title="Create New User" target="addUser" label="REGISTER"/>
				<EditUser  title="Edit User"  target="editUser" label="SAVE CHANGES"/>
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
									<th scope="col">Actions</th>
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">
									<input className="form-check-input" type="checkbox" value="" id=""/>
										<label className="form-check-label" htmlFor="check">
										</label>
										
									</th>
									<td>
										<span className={UserTableStyles.tableAvatar}>
										<Images
											
											src="/assets/avatar/avatar2.svg" 
											height={25} 
											width={25} 
											alt="avatar"
										/>
										</span> 
									<span className={UserTableStyles.tableName}> David</span>
									</td>
									<td>David@kusnap.ng</td>
									<td>10</td>
									<td>5</td>
									<td>20</td>
									<td><span className="status_active">Active</span></td>
									<td>21-03-2021</td>
									<td>
									<Button 
										label="View User"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.green].join(" ")}
										/>
										<Button 
										label="Edit"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.warning].join(" ")}
										data="modal"
										target="#editUser"
										/>
										<Button 
										label="Block User"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.danger].join(" ")}
										/>
									</td>
								</tr>
								<tr>
									<th scope="row">
									<input className="form-check-input" type="checkbox" value="" id=""/>
										<label className="form-check-label" htmlFor="">
										</label>
										
									</th>
									<td>
										<span className={UserTableStyles.tableAvatar}>
										<Images
											src="/assets/avatar/avatar3.svg" 
											height={25} 
											width={25} 
											alt="avatar"
										/>
										</span> 
									<span className={UserTableStyles.tableName}> Mercy Daniels</span>
									</td>
									<td>daniel@kusnap.ng</td>
									<td>10</td>
									<td>5</td>
									<td>20</td>
									<td><span className="status_active">Active</span></td>
									<td>14-03-2021</td>
									<td>
									<Button 
										label="View User"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.green].join(" ")}
										/>
										<Button 
										label="Edit"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.warning].join(" ")}
										/>

										<Button 
										label="Block User"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.danger].join(" ")}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				{/* Ends table */}
			</div>
		</Layout>
		
	)
}