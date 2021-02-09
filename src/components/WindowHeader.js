import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpandArrowsAlt,
  faCompressAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const WindowHeader = props => {
  const [arrowColor, setArrowColor] = useState('black');

  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#4AA3A3',
      height: 27,
      borderBottom: '1px solid #1d2f2f',
      // boxShadow: '1px 1px 10px 2px #3a5f5f',
      padding: 5,
      boxSizing: 'border-box',
      position: 'relative',
    },
    headerText: {
      marginLeft: 5,
      fontWeight: 'bold',
    },
    arrows: {
      position: 'absolute',
      right: 5,
      color: arrowColor,
    },
  };

  const onMouseEnterHandler = () => {
    setArrowColor('#57e2b1');
  };

  const onMouseLeaveHandler = () => {
    setArrowColor('black');
  };

  return (
    <div style={styles.header}>
      <FontAwesomeIcon icon={faFreeCodeCamp} />
      <span style={styles.headerText}>{props.headerText}</span>
      {props.isMaximized ? (
        <FontAwesomeIcon
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          onClick={props.onIconClick}
          style={styles.arrows}
          icon={faCompressAlt}
        />
      ) : (
        <FontAwesomeIcon
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          onClick={props.onIconClick}
          style={styles.arrows}
          icon={faExpandArrowsAlt}
        />
      )}
    </div>
  );
};

export default WindowHeader;
