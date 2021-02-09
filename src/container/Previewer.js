import React from 'react';

import { PREVIEWER } from '../App';

import Window from '../components/Window';

const Previewer = props => {

    const styles = {
        container: {
            width: props.isMaximized ? '95vw' : 800,
            backgroundColor: '#C0D8D8',
            height: props.isMaximized ? '95vh' : 'auto',
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: props.isEnabled ? 'block' : 'none'
        }
    }

    return (
        <div style={styles.container}>
            <Window headerText="Previewer" isMaximized={props.isMaximized} onIconClick={props.onIconClick.bind(this, PREVIEWER)}/>
        </div>
    )
};

export default Previewer;