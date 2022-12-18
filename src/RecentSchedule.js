import { useState } from "react";

export function SimpleSchedule(props){
    return(
        <div className="border-2">
            <div>{props.title}</div>
            <p>{props.content}</p>
            <p>{props.date}</p>
            <p>{props.start}</p>
            <p>{props.end}</p>

        </div>
    )
}

export function RecentSchedule(props){
    const today = new Date();
    const [date, setDate] = useState([today.getFullYear(), (today.getMonth()+1), today.getDate()]);

    const CheckDate = (date)=>{
        let monthday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if(date[0] % 4 === 0){
            monthday[1] = 29;
        }

        if(date[2] > monthday.at(date[1] - 1)){
            date[2] -= monthday.at(date[1]-1);
            date[1]++;
        }
        else if(date[2] < 1){
            date[2] += monthday.at(date[1]-2);
            date[1]--;
        }

        if(date[1] > 12){
            date[1] -= 12;
            date[0]++;
        }
        else if(date[1] < 1){
            date[1] += 12;
            date[0]--;
        }

        return [date[0], date[1], date[2]];
    }
    const handleClick= (n)=>{ 
        let tempdate = date[2] + n;
        
        setDate(CheckDate([date[0], date[1], tempdate]));
    }
    const ReturnSch= (d)=>{
        const dateData = props.data.filter((dt)=>dt.date===d);
        const result = [];
        dateData.map((dd)=>result.push(dd.title));

        return result;
    }


    return (
        <div className="grid grid-cols-[1fr,_6fr,_1fr]">
            <button onClick={()=>handleClick(-1)} className="btn">
                ←</button>
            <div className="grid grid-cols-3">
                <SimpleSchedule date={CheckDate(date).join('-')} schedules={ReturnSch(CheckDate(date).join('-'))}/>
                <SimpleSchedule date={CheckDate([date[0], date[1], date[2]+1]).join('-')} schedules={ReturnSch(CheckDate([date[0], date[1], date[2]+1]).join('-'))}/>
                <SimpleSchedule date={CheckDate([date[0], date[1], date[2]+2]).join('-')} schedules={ReturnSch(CheckDate([date[0], date[1], date[2]+2]).join('-'))}/>
            </div>
            <button onClick={()=>handleClick(1)} className="btn">→</button>
        </div>
    )
}