import { useEffect, useState } from "react";
import './styles.css'

function MainPage() {

    const [data, setData] = useState([])
    const [name, setName] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [status, setStatus] = useState()
    const [pee, setPee] = useState()

    async function insertDataFunction() {
        
        const date = (hour + ':' + minute).toString()

        try {
            const result = await fetch('http://localhost:3001/makeappt', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, date, status}),
                //mode: 'no-cors'
            })

        } catch (err) {
            console.log(err)
        }

    }

    async function fetchDataFunction() {

        try {
            const result = await fetch('http://localhost:3001/getappts', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        const response = await result.json()
        setData(response)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {console.log(data);}, [data]); 

    useEffect(() => { fetchDataFunction()}, [] )

    return (
        <div className="flex justify-center bg-red-100 h-screen">
            <div className="bg-blue-200 h-[fit-content] p-12 rounded-2xl mt-12">
                <div className="bruno-ace-regular text-3xl p-2">Appointments</div>
            <div>{data && Array.isArray(data) ? data.map( (item) => 
                <div className="grid grid-cols-3 p-2">
                    <div>{item.name}</div>
                    <div>{item.time}</div>
                    <div>{item.status}</div>
                </div> 
            )
            : 
            <div> Sorry, appointments unavailable currently. </div>}
            </div>
            </div>

            <div className="bg-blue-200 h-[fit-content] p-12 rounded-2xl mt-12 ml-6">
                <div className="bruno-ace-regular text-3xl p-2 mb-6">Enter an appointment</div>
                <form>
                    <input type="text" placeholder="Name" className="rounded p-1" onChange={(e) => setName(e.target.value)}></input>
                    <br></br><br></br>
                    <input type="text" placeholder="12" size={2} className="pr-2 rounded p-1" onChange={(e) => setHour(e.target.value)}></input>
                    <label className="px-2">:</label>
                    <input type="text" placeholder="00" size={4} className="rounded p-1" onChange={(e) => setMinute(e.target.value)}></input>
                    <br></br><br></br>
                    <input type="text" placeholder="Status" className="rounded p-1" onChange={(e) => setStatus(e.target.value)}></input>
                    <br></br><br></br>
                    <input type="submit" value="Enter" className="flex justify-center bg-blue-400 rounded p-2 px-4 cursor-pointer hover:bg-blue-500" onClick={() => insertDataFunction()}></input>
                </form>
            </div>
        </div>
    );

}

export default MainPage;