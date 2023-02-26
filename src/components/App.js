
import { useState } from 'react';
import styles from '../css/App.module.css';
import Tooltip from './Tooltip';


const App = () => {
  const [position, setPosition] = useState('top');
  const [hovering, setHovering] = useState(false);

  // handleclick handle the position
  const handleClick = (position) => {

    setPosition(position);
  }

  //handleMouseOver handle the hovering condition
  const handleMouseOver = () => {
    setHovering(true);
  }
  //handleMouseOver handle the hovering condition
  const handleMouseOut = () => {
    setHovering(false);
  }


  return (
    <div className={App}>

      <div className={styles.btnContainer} >
        <div className={styles.btnGrpName}>
          Select the hover position !!!
        </div>

        <button
          className={position === 'top' ? `${styles.btn} ${styles.active}` : styles.btn}
          onClick={(e) => {
            handleClick('top');
          }}
        >
          Top

        </button>

        <button
          className={position === 'left' ? `${styles.btn} ${styles.active}` : styles.btn}
          onClick={(e) => {
            handleClick('left');
          }}
        >
          Left

        </button>

        <button
          className={position === 'right' ? `${styles.btn} ${styles.active}` : styles.btn}
          onClick={(e) => {
            handleClick('right');
          }}
        >
          Right

        </button>

        <button
          className={position === 'down' ? `${styles.btn} ${styles.active}` : styles.btn}
          onClick={(e) => {
            handleClick('down');
          }}
        >
          Down

        </button>


      </div>
      {/* hover button */}
      <div className={styles.mainButton}>
        <button
          className={`${styles.btn} ${styles.hoverBtn}`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Hover Over Me !!
        </button>
        {hovering && <Tooltip position={position} />}

      </div>


    </div>
  );
}

export default App;
