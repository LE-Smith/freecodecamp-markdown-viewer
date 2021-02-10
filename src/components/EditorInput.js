import React from 'react';

const EditorInput = props => {

    const styles = {
        textArea: {
            width: '100%',
            height: '100%',
            padding: 5,
            backgroundColor: '#C0D8D8',
            outline: 'none',
            border: 'none'
        }
    }
    return (
       <textarea style={styles.textArea}>
           Editor-Input
       </textarea> 
    )



}

export default EditorInput;