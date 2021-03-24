import Layout from '../components/layout'
import Link from 'next/link'
import TopDateFilter from '../components/topDateFilter'
import ButtonStyles from '../styles/components/button.module.css'

export default function UsersManagement(){
	return(
		<Layout>
			<div className="container contentContainer" >
				<TopDateFilter></TopDateFilter>
				<div  className="row">
					<div className="col-lg-3">
						<Link href="/">
							<div className={ButtonStyles.largeButtonBox}>
							<i className="material-icons">person</i>
								<p>Admin</p>
							</div>
						</Link>
					</div>
					<div className="col-lg-3"> 1</div>
					<div className="col-lg-3"> 1</div>
					<div className="col-lg-3"> 1</div>
				</div>
			</div>
		</Layout>
		
	)
}