import React, { useState } from 'react';

import Editor from './container/Editor';
import Previewer from './container/Previewer';

export const NONE = 'NONE';
export const EDITOR = 'EDITOR';
export const PREVIEWER = 'PREVIEWER';

const placeholderText = 
`# Welcome to my React Markdown Previewer!
Heres some code, \`<div></div>\`, between 2 backticks.
## This is a sub-heading...
[links](https://www.hivomedia.de)

![React Logo w/ Text](https://goo.gl/Umyytc)

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`


**bold Text**


> Block Quotes!

- And of course there are lists.
- Some are bulleted.
   - With different indentation levels.
      - That look like this.

`

function App() {
  const [maximizedWindow, setMaximizedWindow] = useState(NONE);
  const [markdownInput, setMarkdownInput] = useState(placeholderText);

  const styles = {
    body: {
      minHeight: '100%',
      width: '100%',
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

  const onInputChangeHandler = event => {
    setMarkdownInput(event.target.value);
  };

  return (
    <div className="App" style={styles.body}>
      <Editor
        onIconClick={onIconClickHandler}
        onInputChange={onInputChangeHandler}
        isMaximized={maximizedWindow === EDITOR}
        isEnabled={maximizedWindow === NONE || maximizedWindow === EDITOR}
        textAreaValue={markdownInput}
      />
      <Previewer
        onIconClick={onIconClickHandler}
        isMaximized={maximizedWindow === PREVIEWER}
        isEnabled={maximizedWindow === NONE || maximizedWindow === PREVIEWER}
        markdownText={markdownInput}
      />
    </div>
  );
}

export default App;
