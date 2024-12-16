import { useEffect, useState } from "react";
import './styles.css'

function Main() {

    const [data, setData] = useState([])


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
                    <input type="text" placeholder="Name"></input>
                    <br></br><br></br>
                    <input type="text" placeholder="Time"></input>
                    <br></br><br></br>
                    <input type="text" placeholder="Status"></input>
                </form>
            </div>
        </div>
    );

}

export default Main;