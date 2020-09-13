// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const asdf = "Hola";

// Create a react component
const App = () => {
return <div>{asdf}</div>
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
);