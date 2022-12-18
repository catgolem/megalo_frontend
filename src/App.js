import './App.css';
import { RecentSchedule } from './RecentSchedule';
import {useEffect, useState } from "react";
import { AddEventButton } from './AddEventButton';
import axios from 'axios';

function App() {
  var userId = "123456789";
  const [data ,setData] = useState([
    { title: "adobi", content: "", date:20221217, start:900},
    { title: "kadai", content: "", date:20221217, start:1300},
    { title: "kadai", content: "", date:20221218, start:1100},
    { title: "kadai", content: "", date:20221219, start:1500}
  ]);
  async function getUserInfo() {
    // try{
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal.userId;
    // }catch(e){
    //   console.log(e);
    //   return "123456789";
    // }
  }

  function getTask(){
    axios.get(`https://func-schedule.azurewebsites.net/api/TaskGet?code=I-A05Xoz0TAhmmrO6liS3S3eqXy0QHj7XihVcwVdrX4hAzFuMH5UbQ==&userId=${userId}`)
    .then(response=>setData(response.data))
    .catch(e=>console.log(e));
  }

  useEffect(() => {
    userId = getUserInfo();
    if(userId === ""){
      userId = "123456789"
    }
    console.log(userId);
    getTask();
  },[]);
  return (
    <div className='grid grid-rows-[100px,_30px,_1000px]'>
      <RecentSchedule data={data}/>
      <div className='fixed bottom-10 right-10 p-2'><AddEventButton/></div>
    </div>
  );
}

export default App;
