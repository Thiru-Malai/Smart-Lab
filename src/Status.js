import Card from './Card'
import './Status.css'
import Insights from './Insights'


export default function Status() {
    const stats = {
        Yesterday: 10,
        Today: 16, 
        Difference: "+6"
    }
    const groups = {
        Group1: "On",
        Group2: "Off",
        Group3: "On",
        Group4: "Off"
    }
    const group1 = {
        Group5: "On",
        Group6: "Off",
        Group7: "On",
        Group8: "Off"
    }
    return (
        <>
            <div className="status-container">
                <Card heading={"Energy Consumption"} data={stats}></Card>
                <Card heading={"Group Status"} data={groups} data1={group1}></Card>
                <Insights heading={"Insights"}></Insights>
            </div>
        </>
    )
}