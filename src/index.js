/* bridge file btw app.js and index.html 
by using react dom vdom -> dom
*/
import REACTDOM from 'react-dom'
import App from './App';
 const div=document.querySelector('#root');
  const root=REACTDOM.createRoot(div);
  root.render(<App/>); // calling app component but in jsx style    