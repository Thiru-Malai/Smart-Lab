import Dashboard from './Dashboard'
import DownloadReports from './DownloadReports'
import './SideMenu.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function SideMenu() {
    return (
        <BrowserRouter>
            <div className="container-1">
                <div className='heading'>
                    <h1>Smart Lab</h1>
                </div>
                <div className='Contents'>
                    <h3 className="sub-heading">General</h3>
                    <ul>
                        <Link className="sub-contents" to='/'>Dashboard</Link>
                        <br></br>
                        <br></br>
                        <Link className="sub-contents" to='/download-reports'>Download Reports</Link>
                    </ul>
                </div>
                <div className='footer'>
                    #smartlab
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='/download-reports' element={<DownloadReports/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}