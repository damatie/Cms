import ButtonStyles from '../styles/components/button.module.css'
export default function Button(props){
	const className = `${props.type}` 
	return(
		<button className={className}  data-bs-toggle={props.data} data-bs-target={props.target} >
     {props.icon && props.icon}
		 {props.label}
   </button>
	)      
    
}