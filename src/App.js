import './App.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Todaysche from './Todayschedule';
import Calendar from './monthschedelu';
import Setting from './setting';
import { RecentSchedule } from './RecentSchedule';
import {useEffect, useState, useLayoutEffect } from "react";
import { AddEventButton } from './AddEventButton';
import axios from 'axios';

function App() {
  const [data ,setData] = useState([
    { title: "adobi", content: "", date:20221217, start:900},
    { title: "kadai", content: "", date:20221217, start:1300},
    { title: "kadai", content: "", date:20221218, start:1100},
    { title: "kadai", content: "", date:20221219, start:1500}
  ]);
  const[userId,setUserId] = useState("");

  async function getUserInfo() {
    // try{
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      setUserId(clientPrincipal.userId)
    // }catch(e){
    //   console.log(e);
    //   return "123456789";
    // }
  }

  async function getTask(key){
    const requestUrl = "https://func-schedule.azurewebsites.net/api/TaskGet?code=I-A05Xoz0TAhmmrO6liS3S3eqXy0QHj7XihVcwVdrX4hAzFuMH5UbQ==&userId="+ key;
    try{
      var response = await axios.get(requestUrl)
      console.log(response)
      setData(response.data)
    }catch(e){
      console.log(e);
    };
    console.log(data)
  }

  useLayoutEffect(()=>{
    getUserInfo();
    if(userId === ""){
      console.log("getfailed");
    }
    // setUserId("123456789")
    console.log("userId:"+userId);
    getTask(userId);
    // getTask(userId);
  });
  return (
    <div>
      <div className='grid grid-rows-[100px,_30px,_1000px]'>
        <RecentSchedule data={data}/>
        <div className='fixed bottom-10 right-10 p-2'><AddEventButton userId={userId} data={data}/></div>
      </div>
      <Tabs className="Tab">
        <TabList>
            <Tab>1日のスケジュール</Tab>
            <Tab>月のスケジュール</Tab>
            <Tab>設定</Tab>
        </TabList>
        <TabPanel>
          <Todaysche/>
        </TabPanel>
        <TabPanel>
            <h2>
              <Calendar/>
            </h2>
        </TabPanel>
        <TabPanel>
            <h2>
                <Setting/>
            </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
