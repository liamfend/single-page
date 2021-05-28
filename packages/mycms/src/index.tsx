 
import { registerMicroApps, start } from 'qiankun';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'
import './index.css'

registerMicroApps([ 
  {
    name: 'cmsv2',
    entry:  '//localhost:4000' ,
    container: '#root',
    activeRule: '/v2',
  },
]);

start();
ReactDOM.render(<App />,document.getElementById('root') )  