import './SystemCard.css'

export default function SystemCard(props) {
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
                                <thead>
                                    System#
                                </thead>
                                <td></td>
                                <thead>
                                    Status
                                </thead>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td></td>
                                <td>ON</td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td></td>
                                <td>ON</td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td></td>
                                <td>ON</td>
                            </tr>
                            <tr>
                                <td>004</td>
                                <td></td>
                                <td>ON</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
} 