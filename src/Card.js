
import './Card.css'

export default function Card(props) {
    var stats = props.data
    var stats1 = props.data1
    console.log(stats)
    return (
        <>
            <div className="card-container">
                <div className="card-heading">
                    {props.heading}
                </div>
                <br></br>
                <div className='card-contents'>
                    <table style={{paddingLeft: "12px"}}>
                        {Object.keys(stats).map(key => {
                            return (
                                <>
                                    <tr>
                                        <td>{key}</td>
                                        <td>&emsp;&emsp;</td>
                                        <td>{stats[key]}</td>
                                    </tr>
                                    <tr>
                                    </tr>
                                </>
                            );
                        })}
                    </table>
                    {stats1 != null &&
                        <table style={{paddingLeft: "48px"}}>
                           {Object.keys(stats).map(key => {
                            return (
                                <>
                                    <tr>
                                        <td>{key}</td>
                                        <td>&emsp;&emsp;</td>
                                        <td>{stats[key]}</td>
                                    </tr>
                                    <tr>
                                    </tr>
                                </>
                            );
                        })} 
                        </table>
                    }
                </div>
            </div>
        </>
    )
} 