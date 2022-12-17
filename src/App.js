import './App.css';
import { RecentSchedule } from './RecentSchedule';
import {useLayoutEffect, useState } from "react";
import { AddEventButton } from './AddEventButton';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function App() {
  const [data ,setData] = useState([
    { title: "adobi", content: "", date:20221217, start:900},
    { title: "kadai", content: "", date:20221217, start:1300},
    { title: "kadai", content: "", date:20221218, start:1100},
    { title: "kadai", content: "", date:20221219, start:1500}
  ]);

  function getTask(){
    axios.get("https://func-schedule.azurewebsites.net/api/TaskGet?code=I-A05Xoz0TAhmmrO6liS3S3eqXy0QHj7XihVcwVdrX4hAzFuMH5UbQ==&userId=123456789")
    .then(response=>setData(response.data))
    .catch(e=>console.log(e));
  }

  useLayoutEffect(() => {
    // postTask()
    getTask()
  });
  return (
    <div className='grid grid-rows-[100px,_30px,_1000px]'>
      <RecentSchedule data={data}/>
      <div className='fixed bottom-10 right-10 p-2'><AddEventButton/></div>
    </div>
  );
}

export default App;
