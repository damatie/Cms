import {useState,useEffect} from 'react'
import AuthLayout from '../components/AuthLayout.js'
import { useCookies } from "react-cookie"
import Router from 'next/router'
import Button from '../components/Btn.js'
import InputStyles from '../styles/components/input.module.css'
import ButtonStyles from '../styles/components/button.module.css'
import Images from 'next/image'
import {myCookie,deleteCookie,getCookie, Host,checkIfLoggedIn,sendToken} from './utils/Auth'



const Login = ()=>{
  // const [cookie, setCookie, removeCookie] = useCookies(['user'] || null)
  const [errorMsg, setErrors] = useState([''] ||null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isError =  errorMsg
  // console.log(isError)

  async function LoginTo(){
    const res =  await fetch(`${Host()}/admin/login`, { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    });
    const response = await res.json()
    
    // console.log(data)
    
    if(response.error ===true ){
      setErrors(<div className="alert alert-danger" role="alert"><i className="las la-exclamation-circle"></i> {[response.msg.email || response.msg.password||response.msg]}</div>)
      Router.push('/login')
      // console.log(response || null)
    }else{
      setErrors(<div className="alert alert-success" role="alert"><i className="las la-check-double"></i> {[response.msg]}</div>)
      Router.push('/')
      myCookie("Bearer", response.accessToken || null);
      return response
      
    }
}

useEffect( () => {
  if(!checkIfLoggedIn()){
    Router.push("/login")
  }else{
    Router.push("/")
  }		
},[])
  return(
    <AuthLayout>
     <div className="container">
       <div className="row authContainer">
         <div className="col-lg-12">
           <div className="row">
           <div className="loginLogoDiv col-lg-6">
           <Images
           className=""
						src="/assets/logo/kusnap-logo.svg" 
						height={75} 
						width={220} 
						alt="avatar"
					/>
            </div>
            <div className="loginLogoDiv col-lg-6">
				    <h3>Admin Area</h3>
            </div>
           </div>
              {isError }
            <form>
              <div className="row">
                <div className="col-lg-12">
                <input name="email" placeholder="Email"  type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")} />
                </div> 
                <div className="col-lg-12">
                <input name="password" type="password" placeholder="Password"  value={password}  onChange={(e)=> setPassword(e.target.value)} className={[InputStyles.textField,InputStyles.textFieldMd].join(" ")} />
                </div>
                
                 <button id=" LoginBtn"type="button" className={[ButtonStyles.btn,ButtonStyles.mdBtn,ButtonStyles.primary].join(" ")} onClick={()=>LoginTo()}> Admin Login</button>
               
              </div>
            </form>
         </div>
       </div>
     </div>
    </AuthLayout>
  )
}

export default Login;

     