import React, { useState } from 'react';
import './App.css';

import Editor from './container/Editor';
import Previewer from './container/Previewer';

export const NONE = 'NONE';
export const EDITOR = 'EDITOR';
export const PREVIEWER = 'PREVIEWER';

function App() {
  const [maximizedWindow, setMaximizedWindow] = useState(NONE);

  const styles = {
    body: {
      paddingBottom: 20,
      backgroundColor: '#87B5B5',
      height: '100%',
      width: '100vw',
      position: 'absolute',
    },
  };

  const onIconClickHandler = clickedWindow => {
    if (clickedWindow === EDITOR && maximizedWindow !== EDITOR) {
      setMaximizedWindow(EDITOR);
    } else if (clickedWindow === PREVIEWER && maximizedWindow !== PREVIEWER) {
      setMaximizedWindow(PREVIEWER);
    } else {
      setMaximizedWindow(NONE);
    }
  };

  return (
    <div className="App" style={styles.body}>
      <Editor
        onIconClick={onIconClickHandler}
        isMaximized={maximizedWindow === EDITOR}
        isEnabled={maximizedWindow === NONE || maximizedWindow === EDITOR}
      />
      <Previewer
        onIconClick={onIconClickHandler}
        isMaximized={maximizedWindow === PREVIEWER}
        isEnabled={
          maximizedWindow === NONE || maximizedWindow === PREVIEWER
        }
        htmlText={"<script></script><h1>Test 1 2 3</h1>"}
      />
    </div>
  );
}

export default App;
