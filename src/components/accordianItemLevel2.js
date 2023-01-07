import { useRef } from "react";
import { useState } from "react";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const AccordionItemLevel2 = ({ SNO,faq}) => {

  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();


  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_itemLevel2 ${clicked ? "active" : ""}`}>
      <button className="buttonLevel2 " onClick={handleToggle}>
        {/* {faq.text}{faq.PhraseCount}{faq.PhraseRating} */}
        <div style={{width:"50%"}}>Cluster &nbsp; {SNO}
       <p style={{fontSize:"13px",fontStyle:"italic",fontWeight:"normal"}}>Number of Phrases in the cluster: &nbsp;
        {faq.PhraseCount} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Phrase Rating :&nbsp;{Math.round(faq.PhraseRating * 100) / 100}</p>
       </div>
       <div style={{width:"30%"}}>{faq.text}</div>
        <span className="control">{clicked ? <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>} </span>
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">
          {
            faq.Level3.map((item,index)=>{
              return(
                <div className="Level3">
                  {item.text}
                </div>
              )
            })
          }
        </div>
      </div>
    </li>
  );
};

export default AccordionItemLevel2;