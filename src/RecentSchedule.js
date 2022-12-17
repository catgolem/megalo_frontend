import { useEffect, useLayoutEffect, useState } from "react";

export function SimpleSchedule(props){
    const item = props.schedules.map((schedule)=><p>{schedule}</p>)
    return(
        <div className="border-2">
            <p>{props.date}</p>
            {item}
        </div>
    )
}

export function RecentSchedule(props){
    const today = new Date();
    const [date, setDate] = useState(today.getFullYear()*10000+(today.getMonth()+1)*100+today.getDate());

    const handleClick= (n)=>{
        setDate(date+n);
    }
    const ReturnSch= (d)=>{
        const dateData = props.data.filter((dt)=>dt.date===d);
        const result = [];
        dateData.map((dd)=>result.push(dd.title));

        return result;
    }


    return (
        <div className="grid grid-cols-[100px,_1fr,_100px]">
            <button onClick={()=>handleClick(-1)} className="bg-yellow-100 duration-300 hover:bg-yellow-300">
                ←</button>
            <div className="grid grid-cols-3">
                <SimpleSchedule date={date} schedules={ReturnSch(date)}/>
                <SimpleSchedule date={date+1} schedules={ReturnSch(date+1)}/>
                <SimpleSchedule date={date+2} schedules={ReturnSch(date+2)}/>
            </div>
            <button onClick={()=>handleClick(1)} className="bg-yellow-100 duration-300 hover:bg-yellow-300">→</button>
        </div>
    )
}