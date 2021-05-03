import Head from 'next/head'
import SideNav from './NavSide.js'
import TopNav from './NavTop.js'
import {useState,useEffect} from 'react'
import {checkIfLoggedIn} from '../pages/utils/Auth'
import ButtonStyles from '../styles/components/button.module.css'
import  Router  from 'next/router'
export default function Layout({ children }) {
	const [page, setPage] = useState("")
	useEffect( () => {
		if(checkIfLoggedIn()){
			// Router.push("/login")
			setPage('LoggedIn')
		}else{
			setPage('LoggedOut')
		}
		
	})
	return (
		<div>
				<Head>
			<title> Kusnap:: Admin</title>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
			<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
			{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link> */}
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
		</Head>
		
		<main>
		{(page=="LoggedOut")?  <div className="container">
			<div className="row securePage">
			<div className="col-12 icon"><i className="las la-lock"></i></div>
			<div className="col-12 "><h1>Access Denied (Not loggedin!)</h1></div> 
			<div className="col-12 "> <a  href="/login" id=" LoginBtn"type="button" className={[ButtonStyles.btn,ButtonStyles.xlgBtn,ButtonStyles.primary].join(" ")}> Click To Login</a></div>
			</div> 
		</div> : null}

		{(page=="LoggedIn")?  <> 
		
			<SideNav></SideNav>
			<div className="mainContentWrapper">
				<TopNav></TopNav>
			{children}
			</div> 
		</> :null}
			
			</main>

		{/* CDN JS */}
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
		
	</div>
	)
  }