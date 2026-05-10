import { useState, useEffect } from "react";
import "../../Style/Noti.css";
export default function Notification() {
  const [currentHour, setCurrentHour] = useState("Chào bạn!");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const nowHour = new Date().getHours();
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, [currentHour]);

  function upDateHi() {
    if (nowHour >= 5 && nowHour < 12) {
      setCurrentHour("Chào buổi sáng");
    } else if (nowHour >= 12 && nowHour < 18) {
      setCurrentHour("Chào buổi chiều");
    } else {
      setCurrentHour("Chào buổi tối");
    }
  }
  return (
    <>
      <div className="noti">
        <h1 className="title">{currentHour}</h1>
        <h2> {time}</h2>
        <button className="btn-noti" onClick={upDateHi}>
          Cập nhật lời chào
        </button>
      </div>
    </>
  );
}
