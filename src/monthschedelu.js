import { useState } from "react";
import "./App.css";

function Calendar () {

    const [palameta, setPalameta] = useState(0);
    
    const selectDate = (n) => {

        let mvmonth = 0;
        mvmonth += n;
        const today = new Date();
        const weeks = [];
        const monthdays = [31,28,31,30,31,30,31,31,30,31,30,31];
        let firstday = today.getDate() - today.getDay() - 1;
        if(n !== 0){
            if(n>0){
                for(let a = 0; a < mvmonth; a ++){
                    //来月
                    firstday =- monthdays[(today.getMonth()+a) % 12];
                }
            }else if(n<0){
                for(let b = 0; b > mvmonth; b--){
                    //先月
                    firstday =+ monthdays[today.getMonth()+b-1];
                }
            }
        }
    
            while(firstday > 1){
              firstday -= 7;
            }
          
            let maxday = monthdays[(today.getMonth()-1 + n) % 12];
            for(let i = 0;i < 5;++i){
              const days = []
              if(i !== 0){
                maxday = monthdays[(today.getMonth() + n) % 12];
                }
              for(let j = 0;j < 7;++j){
                    firstday++;
                    if(firstday < 1){
                        //先月の表示
                        firstday += maxday;

                    }else if(firstday > maxday){
                        //来月の表示
                        firstday -= maxday;
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
            return items;
    }

    return (
        <div>
            <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded" onClick={(e) => setPalameta(palameta - 1)}>←先月</button>
            <button class="bg-red-700 font-semibold text-white py-2 px-4 rounded" onClick={(e) => setPalameta(palameta + 1)}>来月→</button>
            <table class="example" align="center">
                <tr>
                    <th>sun</th>
                    <th>mon</th>
                    <th>tue</th>
                    <th>wed</th>
                    <th>thu</th>
                    <th>fri</th>
                    <th>sat</th>
                </tr>
                {selectDate(palameta)}
            </table>
            <h2>{palameta}月</h2>
        </div>

    );
}

export default Calendar;