import "./App.css";

function Calendar () {
    
    const today = new Date();
    let firstday = today.getDate() - today.getDay();//その週の日曜日の日付

        while(firstday > 1){
          firstday -= 7;
        }
      
        const weeks = [];
        const monthdays = [31,28,31,30,31,30,31,31,30,31,30,31,29];
        for(let i = 0;i < 5;++i){
          const days = []
          for(let j = 0;j < 7;++j){
                firstday++;
                if(firstday < 1){
                    firstday += monthdays[today.getMonth()- 1]-1;
                }else if(firstday > monthdays[today.getMonth()]){ 
                    firstday -= monthdays[today.getMonth()];
                }
                days.push(<td width="60px" height="60px">
                            <h1>{firstday}</h1>
                            <p>data1</p>
                            <p>data2</p></td>);
            }
          const week = days.map((d)=>d);
          weeks.push(<tr>{week}</tr>);
        }
        const items = weeks.map((i)=>i);
        console.log(monthdays[today.getMonth() - 1]);

    return (
        <div>
            <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">←先月</button>
            <button class="bg-red-700 font-semibold text-white py-2 px-4 rounded">来月→</button>
            <table class="example" align="center">
                {items}
            </table>
        </div>

    );
}

export default Calendar;