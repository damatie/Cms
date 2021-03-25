import ButtonStyles from '../styles/components/button.module.css'
export default function Button(props){
	// const className = `ButtonStyles ${props.type}` 
	return(
		<button className={ButtonStyles.largeButtonBox} >
     {props.label}
   </button>
	)      
    
}