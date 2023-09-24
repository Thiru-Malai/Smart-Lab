import './Dashboard.css'
import Dropdown from './Dropdown'
import Status from './Status'
import SystemCard from './SystemCard'
export default function Dashboard() {
    return (
        <>
            <div className="container-2">
                <div className='header'>
                    <div className='dashboard-heading'>
                        <p>Dashboard</p>
                    </div>
                    <div className='lab-selector'>
                        <Dropdown></Dropdown>
                    </div>
                </div>
                <div className='group-status'>
                    <Status></Status>
                </div>
                <div>
                <div className='dashboard-heading'>
                        <p>Status</p>
                    </div>
                </div>
                <div className='system-status-container'>
                        <SystemCard></SystemCard>
                        <SystemCard></SystemCard>
                        <SystemCard></SystemCard>
                        <SystemCard></SystemCard>
                        <SystemCard></SystemCard>
                        <SystemCard></SystemCard>
                        <SystemCard></SystemCard>
                        <SystemCard></SystemCard>
                </div>
                <br></br>
                <br></br>
            </div>
        </>
    )
}