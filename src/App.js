import './App.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Todaysche from './Todayschedule';
import Calendar from './monthschedelu';
import Setting from './setting';
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
    <div>
      <div className='grid grid-rows-[100px,_30px]'>
        <RecentSchedule data={data}/>
        <div className='fixed bottom-10 right-10 p-2'><AddEventButton/></div>
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
