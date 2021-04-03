import Button from './Btn.js'
import ButtonStyles from '../styles/components/button.module.css'
import InputStyles from '../styles/components/input.module.css'
export default function UserModal(props){
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
										<label htmlFor="userName" className="form-label">Username</label>
										<input type="text" className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")} id="userName" placeholder="James"/>
										</div>
									<div className="col-12">
										<label htmlFor="email" className="form-label">Email Address</label>
										<input type="email" className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")} id="email" placeholder="max@gmail.com"/>
									</div>
									<div className="col-6">
										<label htmlFor="password" className="form-label">Password</label>
										<div className={[InputStyles.pwdFieldWrapper].join(" ")} >
											<input type="password" className={[InputStyles.pwdField].join(" ")} id="password"  placeholder="****"/> <i className="la la-eye-slash "id="mask" onClick={showPwd}></i>
										</div>	
									</div>
									<div className="col-6">
										<label htmlFor="password" className="form-label">Confirm Password</label>
										<div className={[InputStyles.pwdFieldWrapper].join(" ")} >
											<input type="password" className={[InputStyles.pwdField].join(" ")} id="confirm_password" placeholder="****"/> <i className="la la-eye-slash "id="mask2" onClick={showPwd}></i>
										</div> 
									</div>

									<div className="col-12">
										<label htmlFor="phone" className="form-label">Phone Number</label>
										<input type="tel" className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")} id="phone" placeholder="+23412345678"/>
									</div> 

									<div className="col-12">
										<Button 
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