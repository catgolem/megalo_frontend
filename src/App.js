import logo from './logo.svg';
import './App.css';
import { RecentSchedule } from './RecentSchedule';
import { useEffect, useLayoutEffect, useState } from "react";


function App() {
  const [data ,setData] = useState([
    { title: "adobi", content: "", date:20221217, start:900},
    { title: "kadai", content: "", date:20221217, start:1300},
    { title: "kadai", content: "", date:20221218, start:1100},
    { title: "kadai", content: "", date:20221219, start:1500}
  ]);

  useLayoutEffect(() => {
    var respose;
    //APIをたたいて変数に代入する処理を書くAPIからのデータがrespose.dataに入る。

    //setDataでdataにresponse.dataを代入する。
  });

  return (
    <div>
      <RecentSchedule data={data}/>
    </div>
  );
}

export default App;
