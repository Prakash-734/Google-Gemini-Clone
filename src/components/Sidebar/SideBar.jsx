import "./SideBar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompts, setRecentPrompt,newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=> newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={()=> loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        {/* <div className="bottom-item recent-title">
                <img src={assets.question_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-title">
                <img src={assets.history_icon} alt="" />
                <p>Activites</p>
            </div> */}
        <div className="bottom-item recent-title">
          <img
            onClick={() => setExtended((prev) => !prev)}
            src={assets.setting_icon}
            alt=""
          />
          {extended ? <p>Settings and help</p> : null}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
