import StatBoxStyles from '../styles/components/statBox.module.css'

export default function StatBox({ Sbox }){
	return(
		<div className={StatBoxStyles.statBoxContainer}>
				{Sbox}
		</div>
	)

}