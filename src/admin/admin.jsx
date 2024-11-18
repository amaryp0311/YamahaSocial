import './admin.css'
{/*import Gallery from './gallery/gallery.jsx'*/}
import Report from './report/report'
import Registerpeople from './register people/registerpeople'
{/*import { HashRouter, Route, Routes } from 'react-router-dom'*/}

function Admin() {
    return (
      <div>
        <h1>Admin</h1>
        <div className='tab'>
          
        </div>
        <Registerpeople />
        <Report />
      </div>
    )
  }
  
  export default Admin