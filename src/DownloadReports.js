import './DownloadReports.css'

export default function DownloadReports() {
    return (
        <>
            <center>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span><button className="button" onClick={() => window.open("https://report-generator-pbeq.onrender.com/generate")}>Download Report</button></span>
            </center>
        </>
    )
}