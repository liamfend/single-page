import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,

} from "react-router-dom";
import './public-path';


const NewApp = ()=><React.StrictMode>
<BrowserRouter
  // eslint-disable-next-line no-undef
  basename= {(window as any).__POWERED_BY_QIANKUN__ ? '/v2' : '/'}
>
  <App />
</BrowserRouter>
</React.StrictMode>


function render(props:any) {
  const { container } = props;
  ReactDOM.render(<NewApp />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props:any) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props:any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}



// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter
//       // eslint-disable-next-line no-undef
//       basename= {(window as any).__POWERED_BY_QIANKUN__ ? '/v2' : '/'}
//     >
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );