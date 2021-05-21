import styles from "./Preloader.module.css"

const Preloader: React.FC = () => {
	return (
		<div className={styles.preloader}>
		    <div className={styles.ldsSpinner}>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    			<div></div>
    		</div>
		</div>
	)
}

export default Preloader