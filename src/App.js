import './App.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Todaysche from './Todayschedule';
import Monthsche from './monthschedelu';
import Calendar from './monthschedelu';

function App() {
  return (
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
              タグの追加とか
          </h2>
      </TabPanel>
  </Tabs>
  );
}

export default App;
