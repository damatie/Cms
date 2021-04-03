import Button from './button.js'
import InputStyles from '../styles/components/input.module.css'
import ButtonStyles from '../styles/components/button.module.css'

export default function SortUsers(){
  return(
    <div>
      <div className="row mt-3 mb-4">
					<div className="col-lg-10"> </div>
					<div className="col-lg-2">
						<Button 
						label="Create New User"
						type={[ButtonStyles.btn,ButtonStyles.mdBtn,ButtonStyles.primary].join(" ")}
						icon={<i className="las la-plus-circle"></i>}
						data="modal"
						target="#addUser"
						 />
					</div>
				</div>
				{/* Ends button section*/}

        <div className="row">
					<div className="col-lg-6">
						<div className="row sortSection">
						<div className="col-lg-1">
						<span className="text">Sort:</span>
						</div>
							<div className="col-lg-4">
								
								<div className={[InputStyles.selectCustom,InputStyles.Sblue].join(" ")}>  
									<select>
										<option>Aphabetical</option>
										<option >Random</option>
									</select> 
								</div>
							</div>
							<div className="col-lg-7">
								<div className="row">
									<div className="col">
										<div className={[InputStyles.selectCustom, InputStyles.Swhite].join(" ")}>  
											<select >
												<option>Order</option>
											</select> 
										</div>
									</div>
									<div className="col">
										<div className={[InputStyles.selectCustom,InputStyles.Swhite].join(" ")}>  
												<select >
													<option >Date</option>
												</select> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Ends */}
					<div className="col-lg-3"></div>
					<div className="col-lg-3">
						<div className="pagination">
							<span className="pNav">Previous</span>
							<span className=" page pActive"> 1</span> <span className=" page"> <a href="#2">2</a></span> <span className="page"> <a href="#2">3</a></span><span className="page" >..</span> <span className="page"> <a href="#2">4</a></span>
							<span className="pNav">Next</span>
						</div>
					</div>
					{/* Ends */}
				</div>
    </div>
  )
}