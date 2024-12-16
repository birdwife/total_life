import react from "react";
import { useEffect, useState } from "react";
import './styles.css'

function Main() {

  const [data, setData] = useState()

  async function fetchDataFunction() {

    try {
      const add_points = await fetch('http://localhost:3001', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      })
      const response = await add_points.text()
      setData(response)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => { fetchDataFunction()}, [] )

  return (
   <div className="flex justify-center bg-red-100 h-screen">
    <div className="bg-blue-200 h-32 p-12 rounded-2xl bruno-ace-regular text-3xl">Appointments</div>
   </div>
  );

}

export default Main;