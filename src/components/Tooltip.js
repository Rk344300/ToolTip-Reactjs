import styles from '../css/App.module.css';

const Tooltip = ({ position }) => {
    const pos = position;
    return (
        <div className={`${styles[pos]}`}>
            Thanks for hovering {position} position!!
        </div>
    )
}
export default Tooltip;