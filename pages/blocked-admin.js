import Layout from '../components/CmsLayout.js'
import Link from 'next/link'
import Images from 'next/image'
import InputStyles from '../styles/components/input.module.css'
import Button from '../components/Btn.js'
import StatBox from '../components/statBox.js'
import SortAdmin from '../components/AdminSort.js'
import AddAdmin from '../components/adminModal.js'
import EditAdmin from '../components/adminModal.js'
import ButtonStyles from '../styles/components/button.module.css'
import UserTableStyles from '../styles/components/usersTable.module.css'

export default function BlockedAdmin(){
	return(
		<Layout>
			<div className="container contentContainer" >
				<div className="breadcrumbs"><span className="parent">Users Management </span> <i className="las la-angle-right"></i> <span className="child"> Blocked Admin</span></div>
					<StatBox></StatBox>
				{/* End smaller box */}
				<SortAdmin></SortAdmin>
				<AddAdmin title="Create New Admin" target="addAdmin" label="REGISTER"/>
				<EditAdmin  title="Edit Admin"  target="editAdmin" label="SAVE CHANGES"/>
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
                  <th scope="col">Created</th>
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
											
											src="/../public/assets/avatar/avatar2.svg" 
											height={25} 
											width={25} 
											alt="avatar"
										/>
										</span> 
									<span className={UserTableStyles.tableName}> Anthony</span>
									</td>
									<td>anthony@kusnap.ng</td>
									<td>10</td>
									<td>5</td>
									<td>20</td>
									<td><span className="status_active">Active</span></td>
                  <td>26-02-2021</td>
									<td>
									<Button 
										label="View User"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.green].join(" ")}
										/>
										<Button 
										label="Edit"
										type={[ButtonStyles.btn,ButtonStyles.TsmBtn,ButtonStyles.warning].join(" ")}
										data="modal"
										target="#editAdmin"
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
											
											src="/../public/assets/avatar/avatar3.svg" 
											height={25} 
											width={25} 
											alt="avatar"
										/>
										</span> 
									<span className={UserTableStyles.tableName}>James Kent</span>
									</td>
									<td>james@kusnap.ng</td>
									<td>10</td>
									<td>5</td>
									<td>20</td>
									<td><span className="status_active">Active</span></td>
                  <td>31-03-2021</td>
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