import InputStyles from '../styles/components/input.module.css'
export default function TopDateFilter(){
	return(
		<div className="row  mb-3 mt-4">
			<div className="col-lg-10"></div>
			<div className="col-lg-2">
				<div className={InputStyles.filterDate }>
					<div><i className="material-icons center" > event</i></div>
					<div>
						<form>
							<select className={InputStyles.selectIcon} aria-label=".form-select-lg example">
								<option >Today</option>
								<option value="1">Monday</option>
								<option value="1">Tusday</option>
							</select>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}