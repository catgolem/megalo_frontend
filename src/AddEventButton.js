import axios from "axios";
import { useState } from "react"
import { useForm } from "react-hook-form";
import axios from 'axios';

export function AddEventButton(){    
    const overlay = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
    
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const [showMenu, setShowMenu] = useState(false);

    const ToggleShowMenu = (bool)=>{
        setShowMenu(bool);
    }

    const PostData = async (data)=>{
        try{
            const res = await axios.post("https://func-schedule.azurewebsites.net/api/TaskPost?code=wejIPY8x1mEGchgHCKtizV9xdfQm1e87PwO_uUoDXZWxAzFubz9R5g==", data);
            console.log(res);
        }catch(e){
            console.log(e);
        }
        
    }


    const AddEventMenu=()=>{
        const [stage, setStage] = useState(0);
        const [options, setOptions] = useState([]);
        const [flgs, setFlgs] = useState({addLocation: false, addUrl: false});
        //Form
        const [title, setTitle] = useState();
        const today = new Date();
        const [date, setDate] = useState(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
        const [start, setStart] = useState();
        const [end, setEnd] = useState();
        const [tag, setTag] = useState();
        const [content, setContent] = useState();
        const [location, setLocation] = useState();
        const [url, setUrl] = useState();
        //Form
        const tagsItem = ["none", "meeting", "odekake"].map(t=><option value={t}>{t}</option>);

        const OptionStage = ()=>{
            switch(stage){
            case 0:
                return <button type="button" className="btn" onClick={()=>setStage(1)}>+Option</button>
            case 1:                
                return (
                    <select onChange={(e)=>{
                        console.log(e.target.value);
                        if(e.target.value === "location"){
                            setOptions(options.concat([
                                <p>location</p>,
                                <input type="text" value={location} onChange={e=>setLocation(e.target.value)}/>
                            ]));
                            setFlgs({addLocation: true, addUrl: flgs.addUrl});
                        }
                        else if(e.target.value === "url"){
                            setOptions(options.concat([
                                <p>url</p>, 
                                <input type="url" value={url} onChange={e=>setUrl(e.target.value)}/>
                            ]));
                            setFlgs({addLocation: flgs.addLocation, addUrl: true});
                        }
                        setStage(0)
                    }} >
                        <option value="none">---</option>
                        {flgs.addLocation?<></>: <option value="location">location</option>}
                        {flgs.addUrl?<></>:<option value="url">url</option>}
                    </select>
                )
            }
        }

        const handleSubmit = ()=>{
            const data = {
                title: title,
                content: content,
                date: date,
                start: start,
                end: end,
                tag: tag,
                place: location,
                url: url,
                userId: "123456789",
                taskNumber: 1
            }
            console.log(data);

            PostData(data);
        }
        const optionsItem = options.map((o)=>o);

        return (
            <div id="overlay" style={overlay}>
                <div id="modalContent" className="bg-[#ddddbb] rounded-md p-10">
                    <div className="grid grid-cols-[1fr,_60px] grid-rows-[30px]">
                        <p className="text-center">AddEvent</p>
                        <button onClick={()=>ToggleShowMenu(false)} className='btn px-1'>Cansel</button>
                    </div>
                    <div className="grid grid-cols-[80px,_220px]">
                        <p>Title</p>
                        <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
                        <p>Date</p>
                        <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
                        <p>Start</p>
                        <input type="time" value={start} onChange={e=>setStart(e.target.value)}/>
                        <p>end</p>
                        <input type="time" value={end} onChange={e=>setEnd(e.target.value)}/>
                        <p>tag</p>
                        <select  value={tag} onChange={e=>setTag(e.target.value)}>{tagsItem}</select>
                        <p>content</p>
                        <textarea  value={content} onChange={e=>setContent(e.target.value)}/>
                        {optionsItem}
                        <OptionStage/>
                        <button className="btn" onClick={handleSubmit}>add</button>
                    </div>
                </div>
            </div>
        )
    }

    const Test =()=>{
        const {register, handleSubmit} = useForm();
        return(
            <form onSubmit={handleSubmit(d=>console.log(d))}>
                <input {...register("tad")}/>
                <button className="btn">btn</button>
            </form>
        )
    }
    
    //const [showAddMenu, setShowAddMenu] = useState(false);
    return(
        <>
            <button onClick={()=>ToggleShowMenu(true)} className="btn p-10">+</button>
            <button onClick={()=>PostData({
                title: "title",
                content: "content",
                date: "2022-12-18",
                start: "hh:mm",
                end: "hh:mm",
                tag: "tag",
                place: "place",
                url: "url",
                userId: "123456789",
                taskNumber: 1
            })}>adddata</button>
            {showMenu && <AddEventMenu/>}
        </>
    )
}