import './App.css';
import 'react-tabs/style/react-tabs.css';

export const Todaysche = () => {
   return (
            <div className="grid grid-cols-3 border-2">
                <div>
                    <h2>時間</h2>
                    <p>00:00</p>
                    <p>01:00</p>
                    <p>02:00</p>
                    <p>03:00</p>
                    <p>04:00</p>
                    <p>05:00</p>
                    <p>06:00</p>
                    <p>07:00</p>
                    <p>08:00</p>
                    <p>09:00</p>
                    <p>10:00</p>
                    <p>11:00</p>
                    <p>12:00</p>
               </div>
                <div>
                    <p>予定</p>
                    <p>hack1</p>
                    <p>hack1</p>
                    <p>hack1</p>
                    <p>hack1</p>
                    <p>hack1</p>
                    <p>hack1</p>
                    <p>hack1</p>
                    <p>hack1</p>
                    <p> </p>
                    <p>hack1</p>
                    <p>hack1</p>
                </div>
                <div>
                    <p>備考</p>
                </div>
           </div>
    )
}
  
export default Todaysche