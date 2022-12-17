import userEvent from "@testing-library/user-event";
import { useRef, useState } from "react"
import { useForm } from "react-hook-form";



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
    const [showAddMenu, setShowAddMenu] = useState(false);

    function postTask(props){
        axios
        .post("https://func-schedule.azurewebsites.net/api/TaskPost?code=wejIPY8x1mEGchgHCKtizV9xdfQm1e87PwO_uUoDXZWxAzFubz9R5g=="
        ,{
          "title": "眠れると思うな",
          "content": "終わりはない",
          "date": "2022-12-17",
          "tag": "hackathon",
          "place": "ぐーぐるまっぷ",
          "url": "ゆーあーるえる",
          "userId": "123456789",
          "taskNumber": 4
        })
        .then(response=>console.log(response))
        .catch(e=>console.log(e));
      }

    // function AddEventMenu(){
    //     const [stage, setStage] = useState(0);
    //     const [options, setOptions] = useState([]);
    //     const [flgs, setFlgs] = useState({addLocation: false, addUrl: false});
    //     const {register, handleSubmit} = useForm({mode: "onSubmit"});
    //     const onSubmit = data=> console.log(data);

    //     const tagsItem = ["none", "meeting", "odekake"].map(t=><option value={t}>{t}</option>);
        
    //     const OptionStage = ()=>{
    //         switch(stage){
    //         case 0:
    //             return <button type="button" className="btn" onClick={()=>setStage(1)}>+Option</button>
    //         case 1:                
    //             return (
    //                 <select onChange={(e)=>{
    //                     console.log(e.target.value);
    //                     if(e.target.value === "location"){
    //                         setOptions(options.concat([<p>location</p>,<input type="text" {...register("lacation", {required: true})}/>]));
    //                         setFlgs({addLocation: true, addUrl: flgs.addUrl});
    //                     }
    //                     else if(e.target.value === "url"){
    //                         setOptions(options.concat([<p>url</p>, <input type="url" {...register("url", {required: true})}/>]));
    //                         setFlgs({addLocation: flgs.addLocation, addUrl: true});
    //                     }
    //                     setStage(0)
    //                 }} >
    //                     <option value="none">---</option>
    //                     {flgs.addLocation?<></>: <option value="location">location</option>}
    //                     {flgs.addUrl?<></>:<option value="url">url</option>}
    //                 </select>
    //             )
    //         }
    //     }
    //     const optionsItem = options.map((o)=>o);
    //     return (
    //         <div id="overlay" style={overlay}>
    //             <div id="modalContent" className="bg-[#ddddbb] rounded-md p-10">
    //                 <div className="grid grid-cols-[1fr,_60px] grid-rows-[30px]">
    //                     <p className="text-center">AddEvent</p>
    //                     <button onClick={()=>setShowAddMenu(false)} className='btn px-1'>Cansel</button>
    //                 </div>
    //                 <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-[80px,_220px]">
    //                     <p>Title</p>
    //                     <input type="text" {...register("title", {required: true})} />
    //                     <p>Start</p>
    //                     <input type="time" {...register("start", {required: true})}/>
    //                     <p>end</p>
    //                     <input type="time" {...register("end", {required: true})}/>
    //                     <p>tag</p>
    //                     <select {...register("tag", {required: false})}>{tagsItem}</select>
    //                     <p>content</p>
    //                     <textarea {...register("content", {required: false})}/>
    //                     {optionsItem}
    //                     <OptionStage/>
    //                     <button type="submit" className="btn" onClick={()=>setShowAddMenu(false)}>add</button>
    //                 </form>
    //             </div>
    //         </div>
    //     )
    // }
    function AddEventMenuTest(){
        // const [stage, setStage] = useState(0);
        // const [options, setOptions] = useState([]);
        // const [flgs, setFlgs] = useState({addLocation: false, addUrl: false});
        const {register, handleSubmit} = useForm({mode: "onSubmit"});
        const onSubmit = data=> console.log(data);

        const tagsItem = ["none", "meeting", "odekake"].map(t=><option value={t}>{t}</option>);
        
        // const OptionStage = ()=>{
        //     switch(stage){
        //     case 0:
        //         return <button type="button" className="btn" onClick={()=>setStage(1)}>+Option</button>
        //     case 1:                
        //         return (
        //             <select onChange={(e)=>{
        //                 console.log(e.target.value);
        //                 if(e.target.value === "location"){
        //                     setOptions(options.concat([<p>location</p>,<input type="text" {...register("lacation", {required: true})}/>]));
        //                     setFlgs({addLocation: true, addUrl: flgs.addUrl});
        //                 }
        //                 else if(e.target.value === "url"){
        //                     setOptions(options.concat([<p>url</p>, <input type="url" {...register("url", {required: true})}/>]));
        //                     setFlgs({addLocation: flgs.addLocation, addUrl: true});
        //                 }
        //                 setStage(0)
        //             }} >
        //                 <option value="none">---</option>
        //                 {flgs.addLocation?<></>: <option value="location">location</option>}
        //                 {flgs.addUrl?<></>:<option value="url">url</option>}
        //             </select>
        //         )
        //     }
        // }
        //const optionsItem = options.map((o)=>o);
        return (
            <div id="overlay" style={overlay}>
                <div id="modalContent" className="bg-[#ddddbb] rounded-md p-10">
                    <div className="grid grid-cols-[1fr,_60px] grid-rows-[30px]">
                        <p className="text-center">AddEvent</p>
                        <button onClick={()=>setShowAddMenu(false)} className='btn px-1'>Cansel</button>
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
                        {/* {optionsItem} */}
                        {/* <OptionStage/> */}
                        <button type="submit" className="btn" onClick={()=>setShowAddMenu(false)}>add</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <>
            <button onClick={()=>setShowAddMenu(true)} className="btn p-10">+</button>
            {showAddMenu && (
                <AddEventMenuTest/>
            )
            }
        </>
    )
}