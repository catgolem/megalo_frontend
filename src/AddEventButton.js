import userEvent from "@testing-library/user-event";
import { useRef, useState } from "react"



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
    const handleShowClick = ()=>{}

    function AddEventMenu(){
        const [stage, setStage] = useState(0);
        const [options, setOptions] = useState([]);
        const [flgs, setFlgs] = useState({addLocation: false, addUrl: false});

        const tags = ["none", "meeting", "odekake"]
        const tagsItem = tags.map((t)=><option value={t}>{t}</option>);
        
        const OptionStage = ()=>{
            switch(stage){
            case 0:
                return <button type="button" className="btn" onClick={()=>setStage(1)}>+Option</button>
            case 1:                
                return (
                    <select onChange={(e)=>{
                        console.log(e.target.value);
                        if(e.target.value === "location"){
                            setOptions(options.concat([<p>location</p>,<input type="text"/>]));
                            setFlgs({addLocation: true, addUrl: flgs.addUrl});
                        }
                        else if(e.target.value === "url"){
                            setOptions(options.concat([<p>url</p>, <input type="url"/>]));
                            setFlgs({addLocation: flgs.addLocation, addUrl: true});
                        }
                        setStage(0)
                    }}>
                        <option value="none">---</option>
                        {flgs.addLocation?<></>: <option value="location">location</option>}
                        {flgs.addUrl?<></>:<option value="url">url</option>}
                    </select>
                )
            }
        }
        const optionsItem = options.map((o)=>o);
        return (
            <div id="overlay" style={overlay}>
                <div id="modalContent" className="bg-[#ddddbb] rounded-md p-10">
                    <div className="grid grid-cols-[1fr,_60px] grid-rows-[30px]">
                        <p className="text-center">AddEvent</p>
                        <button onClick={()=>setShowAddMenu(false)} className='btn px-1'>Cansel</button>
                    </div>
                    <form className="grid grid-cols-[80px,_220px]">
                        <p>Title</p>
                        <input type="text"/>
                        <p>Start</p>
                        <input type="time"/>
                        <p>end</p>
                        <input type="time"/>
                        <p>tag</p>
                        <select>{tagsItem}</select>
                        <p>content</p>
                        <textarea/>
                        {optionsItem}
                        <OptionStage/>
                        <button type="submit" className="btn" onClick={()=>setShowAddMenu(false)}>add</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <>
            <button onClick={()=>setShowAddMenu(true)} className="btn p-10">+</button>
            {showAddMenu?(
                <AddEventMenu/>
            ):<></>
            }
        </>
    )
}