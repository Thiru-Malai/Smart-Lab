import './Dashboard.css'
import Dropdown from './Dropdown'
import Status from './Status'
import SystemCard from './SystemCard'
import { database } from './firebase-config'
import { onValue, ref, update  } from "firebase/database";
import { useEffect, useState } from 'react'
// import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from "google-auth-library";

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

    // const serviceAccountAuth = new JWT({
    //     email: "sheets1@sheets-406314.iam.gserviceaccount.com",
    //     key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC7eGxTQaACfXcS\n6JlO0DusHQTfv7QgYuTdOITOtst5LepKSB914jEqkkPKCqtX+0ToBeaJCZHCFnnI\nHlXGzS9KhEQwNSUtFsHH03dMRQh1TvF9LUmmshEzV96sBoR3D2ZTBA+s6FaJXG67\nCQAEWEofiR+geoVU7eKZg6Hg1RWqQwdYAucnM/ALeEwsRrJoipTDc273mUzS8omR\nV7axJJjGH0PQpMO7+5+4uuXxtIGAMaqkeDFQeQTF1Zz7SEPFfZ1uQQlMnRxoHtxV\nEvlQA7Q6rjEYmQxlLQa96wSlkOZS+Sg4v3cVYEzk3gIsWI19AZP7vy0M1D0oNbZ9\nuMH1ln9ZAgMBAAECggEACFnQPtKDitjalFsMHo35ZSyoakHN3PYgH8KZbTkzTc3q\ndoNJSM+vRP2IS4MM0uR8ffa//Ya8RBsK3baMN54tkceGihHepWgyxZtOix/gGpRO\nVDck5WoKiMZMmE50rsu0Jn/d0DlL8Ykj3ZevCoKBpW9O8K/Ef14BZA6QXXA11i8G\npmK3Up+cJom7DnaK33hMMMC6gMCGBUKH7RI7+m0VfJVl5wirS1gkreL/X0OIbG64\ndd5phMdwJhOO9lz1P0EjzAbxb/05hIr+RchDlhV8NPMltpWvvYlepKM6G2xH3mUi\nL6WPgyLZRGIZF/8a1h/UUsodjHbb1cecd6XgFs5coQKBgQDlVQiqPPS+j1V8IKW4\nXgMerj2OxPJph1q/TRJGomL0Ndp9PBJ70rbQVfgnHrU4TxIQ+j3eapnJx0t7+4pf\nuB24FVJw3OjyOT7ACPKqo9apmwX43CqQ1dsJkg1172QAQZ/1v+EF71suQiMqsN9C\noU3gpTUG5pZt9DCBArls9/jZHQKBgQDRRTXzuLUKeoJuhAjre7k9wFyVad2oCPUq\nPF1uetDZrNY9+lwtBJ6LoIYR0NAxopzNs64wPj1FYmqV/GqeSjLJ8aASL91sQ6SG\noMn1I3WB53H35Ojt+jTNHau98w68j01WTHX83gXnG1TukOlY5d/MmOmk9WQTMhTL\n2SXSgTrmbQKBgQCxKx5Elk7loMoD2Rzt8AMtAqMf1tsH17+tppcF5pHX5Hrk4THO\nYx1EmgXaAwkxdTSZ1RlS6LvifIq+P7fI9u5Otno4IxH7f2oQ5VjDp0tBQDg+56gi\nuHQ9Uo3/nG9/GzO+oPvwn9erRwDwDDCOwxrs//SVXjK8wzdtk3M40eF3qQKBgQCs\nLBQSW9HfOCHdiRXJn/YsvvmtF/d8izohsJ5yCeuQW2m8fiGeDCHg4IXNXI4deBso\nBf92w44naqwkkBKr/oHAseGvdN/oddKDzP+7hpvj76ZNfHDDckpEw3eMBNAIBKJt\nMOUV0RjsJgl/aYwCTsYND3WS+S2HuXlwqUw734S1FQKBgQCpV0JaVB5+xAUP5AsK\ndhG3Gpclxts+tjuYa53AUx4PCdnFU9vM2ykk8FeluqJ080KOEpoCK/0z0zmR5Mkb\nx2luQSi2w09GHX2oQl4GGOt84TP/r1MO6RMS9qpy3TBM0wJs6bmjiVYpsu2ioLsA\nmamOwAeiFi7n79lRGhck+vkKIQ==\n-----END PRIVATE KEY-----\n",
    //     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    //   });

    //   const doc = new GoogleSpreadsheet(
    //     "1E1y8fIgkAMoHUtiDLYeIJQ-lWFdIHuclkV0WsMNZ-rA",
    //     serviceAccountAuth
    //   );

    // const loadDoc = async () => {
    //     await doc.loadInfo();
    //     let sheet = doc.sheetsByIndex[0];
    //     console.log(sheet.title);
    // };
    // loadDoc();

    useEffect(() => {
        onValue(group_1, (snapshot) => {
            const data = snapshot.val()
            setGroup1(data)
        })
    }, [])

    useEffect(() => {
        onValue(group_2, (snapshot) => {
            const data = snapshot.val()
            setGroup2(data)
        })
    }, [])

    useEffect(() => {
        onValue(group_3, (snapshot) => {
            const data = snapshot.val()
            setGroup3(data)
        })
    }, [])

    useEffect(() => {
        onValue(group_4, (snapshot) => {
            const data = snapshot.val()
            setGroup4(data)
        })
    }, [])

    function handleShutdownStatus() {
        var dataRefShutdown = ref(database, 'times/');
        console.log("Shutdown Called")
        let shutdownData = {
            shutdown: 1
        }
        // dataRefShutdown.update({shutdownData})
        update(dataRefShutdown, shutdownData);
    }

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
                <span><button className="button" onClick={handleShutdownStatus}>Shutdown</button></span>
            </div>
        </>
    )
}