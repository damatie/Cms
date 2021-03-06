import Button from './Btn.js'
import ButtonStyles from '../styles/components/button.module.css'
import InputStyles from '../styles/components/input.module.css'
import {useState,useEffect} from 'react'
import {myCookie,deleteCookie,getCookie,AuthToken,Host,checkIfLoggedIn} from '../pages/utils/Auth'
import * as cookie from 'cookie'

export default function UserModal(props,Access){
	const [user_id, setUserId] = useState('')
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [phone_number, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
	

	function showPwd(e) {
    console.log('Show PWD.');
	 	let maskPwd = document.getElementById('password');
		 let maskPwd2 = document.getElementById('confirm_password');
		let I = document.getElementById("mask");
		let I2 = document.getElementById("mask2");
		if (maskPwd.type === "password" && maskPwd2.type === "password") {
			maskPwd.type = "text";
			I.className="las la-eye"
			maskPwd2.type = "text";
			I2.className="las la-eye"
		} else {
			maskPwd.type = "password";
			maskPwd2.type = "password";
			I.className="las la-eye-slash"
			I2.className="las la-eye-slash"
		}
	}
	// let Blabel ={props.btnLabel};

	async function handleUserUpdate(){
		const res = fetch(`${Host()}/user/update`, { 
			method: 'POST', 
			headers: {
				'Authorization': `Bearer ${AuthToken()}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				user_id:props.user_id,
				username,
        email,
       	phone_number,
      }) 
			}).then((response) => {
				return response.json();
			})
			.then((updatedUser) => {
				console.log(updatedUser)
				return updatedUser;
			});
		
}
	return(
			
		<div className="modal fade" id={props.target} tabIndex="-1"  aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="Mheader">
								<h5>{props.title}</h5>
						</div> 
						
						<div className="modal-body">
							<form>
								<div className="row">
									<div className="col-12">
										<label htmlFor="email" className="form-label">Name</label>
										<input type="text" className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")}  defaultValue={props.name} onChange={(e)=> setName(e.target.value)}  id="name" placeholder=""/>
									</div>
									<div className="col-12">
										<label htmlFor="userName" className="form-label">Username</label>
										<input type="text" className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")} defaultValue={props.username} onChange={(e)=> setUsername(e.target.value)} id="username"  placeholder=""/>
										</div>
									<div className="col-12">
										<label htmlFor="email" className="form-label">Email Address</label>
										<input type="email" className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")}  defaultValue={props.email}  onChange={(e)=> setEmail(e.target.value)}  id="email" placeholder=""/>
									</div>
									<div className="col-12">
										<label htmlFor="phone" className="form-label">Phone Number</label>
										<input type="text" className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")} defaultValue={props.phoneNumber}  onChange={(e)=> setPhoneNumber(e.target.value)} id="phone" placeholder=""/>
									</div>
									<div className="col-6">
										<label htmlFor="password" className="form-label">Password</label>
										<div className={[InputStyles.pwdFieldWrapper].join(" ")} >
											<input type="password" className={[InputStyles.pwdField].join(" ")} onChange={(e)=> setPassword(e.target.value)} id="password" defaultValue="" placeholder=""/> <i className="la la-eye-slash "id="mask" onClick={showPwd}></i>
										</div>	
									</div>
									<div className="col-6">
										<label htmlFor="password" className="form-label">Confirm Password</label>
										<div className={[InputStyles.pwdFieldWrapper].join(" ")} >
											<input type="password" className={[InputStyles.pwdField].join(" ")} onChange={(e)=> setConfirmpassword(e.target.value)} id="confirm_password" placeholder=""/> <i className="la la-eye-slash "id="mask2" onClick={showPwd}></i>
										</div> 
									</div>
									<div className="col-12">
									<Button
									updateUser={()=>handleUserUpdate()}
										label={props.label}
										type={[ButtonStyles.btn,ButtonStyles.mdBtn,ButtonStyles.primary].join(" ")}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
  )
}