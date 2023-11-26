import './Dashboard.css'
import Dropdown from './Dropdown'
import Status from './Status'
import SystemCard from './SystemCard'
import { database } from './firebase-config'
import { onValue, ref} from "firebase/database";
import { useEffect, useState } from 'react'

const DB_URL = "/times"
const group_1 = ref(database, DB_URL + "/group1");
const group_2 = ref(database, DB_URL + "/group2");
const group_3 = ref(database, DB_URL + "/group3");
const group_4 = ref(database, DB_URL + "/group4");

export default function Dashboard() {
    const [group1, setGroup1] = useState({})
    const [group2, setGroup2] = useState({})
    const [group3, setGroup3] = useState({})
    const [group4, setGroup4] = useState({})

    useEffect(()=>{
        onValue(group_1, (snapshot) => {
            const data = snapshot.val()
            setGroup1(data)
        })  
    }, [])

    useEffect(()=>{
        onValue(group_2, (snapshot) => {
            const data = snapshot.val()
            setGroup2(data)
        })  
    }, [])

    useEffect(()=>{
        onValue(group_3, (snapshot) => {
            const data = snapshot.val()
            setGroup3(data)
        })  
    }, [])

    useEffect(()=>{
        onValue(group_4, (snapshot) => {
            const data = snapshot.val()
            setGroup4(data)
        })  
    }, [])

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
                    <SystemCard systems={group1}></SystemCard>
                    <SystemCard systems={group2}></SystemCard> 
                    <SystemCard systems={group3}></SystemCard>
                    <SystemCard systems={group4}></SystemCard>
                    {/* <SystemCard></SystemCard> */}
                    {/* <SystemCard></SystemCard>
                    <SystemCard></SystemCard>
                    <SystemCard></SystemCard> */}
                </div > 
                <br></br>
                <br></br>
            </div>
        </>
    )
}