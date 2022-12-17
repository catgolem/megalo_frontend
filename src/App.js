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
  //debug
  function AddEventMenu(){
        const [stage, setStage] = useState(0);
        const [options, setOptions] = useState([]);
        const [flgs, setFlgs] = useState({addLocation: false, addUrl: false});
        const {register, handleSubmit} = useForm({mode: "onSubmit"});
        const onSubmit = data=> console.log(data);

        const tagsItem = ["none", "meeting", "odekake"].map(t=><option value={t}>{t}</option>);
        
        
        const optionsItem = options.map((o)=>o);
        return (
            <div id="overlay">
                <div id="modalContent" className="bg-[#ddddbb] rounded-md p-10">
                    <div className="grid grid-cols-[1fr,_60px] grid-rows-[30px]">
                        <p className="text-center">AddEvent</p>
                        <button className='btn px-1'>Cansel</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-[80px,_220px]">
                        <p>Title</p>
                        <input type="text" {...register("title", {required: true})} />
                        <p>Start</p>
                        <input type="time" {...register("start", {required: true})}/>
                        <p>end</p>
                        <input type="time" {...register("end", {required: true})}/>
                        <p>tag</p>
                        <select {...register("tag", {required: false})}>{tagsItem}</select>
                        <p>content</p>
                        <textarea {...register("content", {required: false})}/>
                        {optionsItem}
                        <button type="submit" className="btn">add</button>
                    </form>
                </div>
            </div>
        )
    }
    //debug
  return (
    <div className='grid grid-rows-[100px,_30px,_1000px]'>
      <RecentSchedule data={data}/>
      <div className='fixed bottom-10 right-10 p-2'><AddEventButton/></div>
      <button className="btn p-10">+</button>
            <AddEventMenu/>
    </div>
  );
}

export default App;
