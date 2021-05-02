import ButtonStyles from '../styles/components/button.module.css'
export default function Button(props){
	const className = `${props.type}` 
	return(
		<button className={className} type="button" data-bs-toggle={props.data} data-bs-target={props.target} onClick={props.updateUser}>
     {props.icon && props.icon}
		 {props.label}

   </button>
	)      
    
}