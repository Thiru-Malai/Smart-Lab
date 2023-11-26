import './SystemCard.css'

export default function SystemCard(props) {
    console.log(props.systems)
    return (
        <>
            <div className='system-status'>
                <div className="system-card-container">
                    <div className="card-heading">
                        {props.cardname}
                    </div>
                    <div className='card-table'>
                        <table align='center'>
                            <tr>
                                <th>
                                    System#
                                </th>
                                <td></td>
                                <th>
                                    Status
                                </th>
                            </tr>
                            {props.systems && 
                            Object.entries(props.systems).map(([itemName, itemDetails]) => (
                                <tr key={itemName}>
                                    <td>{itemName}</td>
                                    <td>&emsp;&emsp;</td>
                                    <td>{itemDetails.status}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
} 