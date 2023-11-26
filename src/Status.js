import Card from './Card'
import './Status.css'
import Insights from './Insights'
import { database } from './firebase-config'
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from 'react'

const group_1 = "/times/group_status1/"
const group_2 = "/times/group_status2/"
const group_3 = "/times/group_status3/"
const group_4 = "/times/group_status4/"

let group1 = ref(database, group_1);
let group2 = ref(database, group_2);
let group3 = ref(database, group_3);
let group4 = ref(database, group_4);


export default function Status() {
    const [groupStatus, setGroupStatus] = useState({
        'Group 1': 0,
        'Group 2': 0,
        'Group 3': 0,
        'Group 4': 0,
    })
    useEffect(() => {
        onValue(group1, (snapshot) => {
            const data = snapshot.val()
            let stat = "Off"
            if(data){
                stat = "On"
            }
            setGroupStatus(previousState=>({
                ...previousState,
                'Group 1': stat,
            }))
        })
    }, [])
    useEffect(() => {
        onValue(group2, (snapshot) => {
            const data = snapshot.val()
            let stat = "Off"
            if(data){
                stat = "On"
            }
            setGroupStatus(previousState=>({
                ...previousState,
                'Group 2': stat,
            }))
        })
    }, [])
    useEffect(() => {
        onValue(group3, (snapshot) => {
            const data = snapshot.val()
            let stat = "Off"
            if(data){
                stat = "On"
            }
            setGroupStatus(previousState=>({
                ...previousState,
                'Group 3': stat,
            }))
        })
    }, [])
    useEffect(() => {
        onValue(group4, (snapshot) => {
            const data = snapshot.val()
            let stat = "Off"
            if(data){
                stat = "On"
            }
            setGroupStatus(previousState=>({
                ...previousState,
                'Group 4': stat,
            }))
        })
    }, [])
    const stats = {
        Yesterday: 10,
        Today: 16,
        Difference: "+6"
    }
    // const groups = {
    //     Group1: "On",
    //     Group2: "Off",
    //     Group3: "On",
    //     Group4: "Off"
    // }
    const groups= {
        Group5: "On",
        Group6: "Off",
        Group7: "On",
        Group8: "Off"
    }
    return (
        <>
            <div className="status-container">
                <Card heading={"Energy Consumption"} data={stats}></Card>
                <Card heading={"Group Status"} data={groupStatus} data1={groups}></Card>
                <Insights heading={"Insights"}></Insights>
            </div>
        </>
    )
}