import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/Home';
import './index.css';
import registerServiceWorker from 'utils/registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
