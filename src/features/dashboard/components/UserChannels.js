import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {source : "KAKAMEGA SHOP", count : "26,345", Bill : "26,345"},
    {source : "GATE SALES", count : "21,341", Bill : "26,345"},
    {source : "FIELD SALES", count : "34,379", Bill : "26,345"},
    
]

function UserChannels(){
    return(
        <TitleCard title={"User Signup Source"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">ACCOUNTS</th>
                        <th className="normal-case">TODAY SALES</th>
                        <th className="normal-case">TODAY BILLS</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.source}</td>
                                        <td>{u.count}</td>
                                        <td>{u.Bill}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels