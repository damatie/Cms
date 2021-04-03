import TopNavStyles from '../styles/components/TopNav.module.css'
import Link from 'next/link'
import Images from 'next/image'

export default function NotificationBox(){
	return(
		<div id={TopNavStyles.notificationBoxContainer} className={TopNavStyles.notificationBoxContainer}>
			<div className={TopNavStyles.notificationBox}>
					<div className={TopNavStyles.notificationBoxHeader}>
							<div className={TopNavStyles.headerText}> Notifications</div> <div className= {TopNavStyles.count}> <span>20</span></div>
					</div>

					<div className={TopNavStyles.notificationItem}>
						<div className={TopNavStyles.notificationImg}>
							<Images
							src="/assets/avatar/avatar2.svg" 
							height={50} 
							width={40} 
							alt="avatar"
						/>
						</div>  
						<div className={TopNavStyles.notificationText}>
							<h5><span>Ero Klein</span> posted a product</h5>
							<span>1hr ago</span>
						</div>

					</div>

					<div className={TopNavStyles.notificationItem}>
						<div className={TopNavStyles.notificationImg}>
							<Images
							src="/assets/avatar/avatar3.svg" 
							height={50} 
							width={40} 
							alt="avatar"
						/>
						</div>  
						<div className={TopNavStyles.notificationText}>
							<h5><span>Bradely </span> posted a product</h5>
							<span>1hr ago</span>
						</div>

					</div>
					
					<div className={TopNavStyles.notificationItem}>
						<div className={TopNavStyles.notificationImg}>
							<Images
							src="/assets/avatar/avatar3.svg" 
							height={50} 
							width={40} 
							alt="avatar"
						/>
						</div>  
						<div className={TopNavStyles.notificationText}>
							<h5><span>Benjamin</span>   requested a call...</h5>
							<span>1hr ago</span>
						</div>

					</div>
					{/* End item list */}
					</div>
			<a href="#" className={TopNavStyles.notificationAll}>
				<div className={TopNavStyles.notificationFooter}>
				View All
				</div>
			</a>
		</div>
	)
}