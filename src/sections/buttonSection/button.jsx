import "./buttons.css"
import SideBar from "../navbar/sidebar"
import { HexColorPicker,HexColorInput } from "react-colorful";
//import { LuSendHorizontal } from "react-icons/lu";
import { LuCopy } from "react-icons/lu";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useRef } from "react";


function Buttons() {

    const [backgroudPicker,setBackgroundPicker]=useState('#0B0729');
    const [textColor,setTextColor]=useState('#ffffff');

    const basicHtmlCss=`
<button className="basic">Button</button>

.basic{
    background-color:${backgroudPicker};
    color:${textColor};
    border: none;
    outline: none;
    border-radius: 5px;
    width: 90px;
    height: 30px;
}`;

    const errorHtmlCss=`
<button className="errors">error</button>

.errors{
    border: 2px solid red;
    color: red;
    width: 100px;
    height: 35px;
    border-radius: 5px;
}`;

const disableHtmlCss=`
<button className="disable" disabled>disabled</button>

.disable{
    cursor: no-drop;
    width: 100px;
    height: 35px;
    background-color: #3b3950;
    border: none;
    color: #ffffff; 
    border-radius: 5px;
}`;

const hoverHtmlCss=`
<button className="hovers">Hover Me</button>

.hovers{
    background-color:${backgroudPicker};
    color:${textColor};
    width: 100px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: all 0.3s 
    ease-out; 
}`;

    const neonBoxShadow=`0 0 10px ${backgroudPicker},0 0 40px ${backgroudPicker},0 0 80px ${backgroudPicker}`;
    const neonHtmlCss=`
<button className="neon">Neon Light</button>

.neon{
    background-color:${backgroudPicker};
    color:${textColor};
    boxShadow:${neonBoxShadow};
    width: 100px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 5px;
}`;

    const neonTailwindCss=`
<button className="w-[100px] h-[35px] border-none outline-none">Neon Light</button>
    `;
    const [neonCss,setNeonCss]=useState('is_ON');
    const [neonTailwind,setNeonTailwind]=useState('is_OFF');

    function neonCssState(){
        setNeonCss('is_ON');
        setNeonTailwind('is_OFF');
    }
    function neonTailwindState(){
      setNeonCss('is_OFF')
      setNeonTailwind('is_ON')
    }

    const [hoverCss,setHoverCss]=useState('is_ON');
    const [hoverTailwind,setHoverTailwind]=useState('is_OFF');
    

    const [buttonCopied,setButtonCopied]=useState({
        basic:true,
        errorB:true,
        disableB:true,
        hovers:true,
        neon:true,
        tailwindNeon:true
    });

    const sliderRef = useRef(null);

    let settings = {
    dots: true,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    const [isHover,setHover]=useState(false);

    async function copyStylesCode(type,text) {
        try{
            await navigator.clipboard.writeText(text);     
            
            setButtonCopied(prev=>({...prev,[type]:false}))
            setTimeout(()=>{
               setButtonCopied(prev=>({...prev,[type]:true}));
            },800)
        }
        catch(error){
            console.log(`couldn't copy`);
        }

    }

    return(
        <>
            <section className="buttonMainSection">
                <div className="buttonSidebar">
                    <SideBar className="buttonsidenavbar"/>
                </div>

                <section className="customebuttons">
                    <h2 className="customButton">Custom Buttons</h2>

                    <section className="colorAndButtons">

                        <section className="customColor">

                            <div className="backgroundPicker">
                                <label className="pickerHeading">Background Color</label>
                                <HexColorPicker className="picker" onChange={setBackgroundPicker} color={backgroudPicker}/>
                                <HexColorInput onChange={setBackgroundPicker}
                                 color={backgroudPicker} prefixed readOnly
                                 className="displayInput"/>
                            </div>
                            <div className="textColorPick">
                                <label className="pickerHeading">Text Color</label>
                                <HexColorPicker className="picker" color={textColor} onChange={setTextColor}/>
                                <HexColorInput prefixed readOnly color={textColor}
                                 onChange={setTextColor} className="displayInput"/>
                            </div>
                            
                        </section>

                       
                        <section className="buttonTypes">
                
                         <Slider ref={sliderRef} {...settings}>
                            <div className="buttonSections">
                                <div className="buttonTopHeads">
                                <h3>Colored Button</h3>
                                <button className="normalButton"
                                style={{backgroundColor:backgroudPicker,
                                    color:textColor
                                }}>normal</button>
                                </div>

                                <div className="codePreviewButton">
                                    <div className="buttonDivisions">
                                        <button>CSS</button>
                                        <button>Tailwind Css</button>
                                    </div>
                                    {buttonCopied.basic ?<LuCopy 
                                    onClick={()=>{copyStylesCode("basic",basicHtmlCss)}}
                                    className= "copyInActive" />:
                                    <p className="copiedMessagebutton">Copied</p>}
                                   <pre className="buttonPreviewCode">
                                        <p>{basicHtmlCss}</p>
                                    </pre>
                                </div>
                            </div>

                            <div className="buttonSections">
                                <div className="buttonTopHeads"> 
                                <h3>Error Button</h3>
                                <button className="errorButton">error</button>
                                </div>
                                <div className="codePreviewButton">
                                    <div className="buttonDivisions">
                                        <button>CSS</button>
                                        <button>Tailwind Css</button>
                                    </div>
                                    {buttonCopied.errorB ? <LuCopy 
                                    onClick={()=>{copyStylesCode("errorB",errorHtmlCss)}}
                                    className="copyInActive"/> : 
                                    <p className="copiedMessagebutton">Copied</p>}

                                    <pre className="buttonPreviewCode">
                                        <p>{errorHtmlCss}</p>
                                    </pre>
                                </div>
                            </div>

                            <div className="buttonSections">
                                <div className="buttonTopHeads">
                                <h3>Disabled Button</h3>
                                <button className="disableButton" disabled>disabled</button>
                                </div>
                                <div className="codePreviewButton">
                                    <div className="buttonDivisions">
                                        <button>CSS</button>
                                        <button>Tailwind Css</button>
                                    </div>
                                    {buttonCopied.disableB ? <LuCopy onClick={()=>{copyStylesCode("disableB",disableHtmlCss)}}
                                    className="copyInActive"/> :
                                    <p className="copiedMessagebutton">Copied</p>}

                                    <pre className="buttonPreviewCode">
                                        <p>{disableHtmlCss}</p>
                                    </pre>

                                </div>
                            </div>

                            <div className="buttonSections">
                                <div className="buttonTopHeads">
                                <h3>Hover Button</h3>
                                <button className="hoverButton"
                                style={{ backgroundColor:isHover? textColor : backgroudPicker,
                                    color : isHover ? backgroudPicker : textColor,
                                }}
                                onMouseEnter={()=>{setHover(true)}}
                                onMouseLeave={()=>{setHover(false)}}>Hover Me</button>
                                </div>
                                <div className="codePreviewButton">
                                    <div className="buttonDivisions">
                                        <button>CSS</button>
                                        <button>Tailwind Css</button>
                                    </div>

                                    {buttonCopied.hovers ? <LuCopy onClick={()=>{copyStylesCode("hovers",hoverHtmlCss)}}
                                        className= "copyInActive"/> :
                                    <p className="copiedMessagebutton">Copied</p>}
                                    <pre className="buttonPreviewCode">
                                        <p>{hoverHtmlCss}</p>
                                    </pre>
                                </div>
                            </div>

                            <div className="buttonSections">
                                <div className="buttonTopHeads">
                                <h3>Neon Button</h3>
                                    <button className="neonButton"
                                    style={{backgroundColor:backgroudPicker,
                                    color:textColor,
                                    boxShadow:neonBoxShadow,
                                    }}>Neon Light</button>
                                </div>
                                
                                <div className="codePreviewButton">
                                    <div className="buttonDivisions">
                                        <button className={neonCss==='is_ON' ? "buttonDivisionClicked" : "buttonDivisionsbutton"}
                                        onClick={neonCssState}>CSS</button>
                                        <button className={neonTailwind==='is_ON' ? "buttonDivisionClicked" : "buttonDivisionsbutton"} onClick={neonTailwindState}>Tailwind Css</button>
                                    </div>
                                    {neonCss==='is_ON' && <div>
                                        {buttonCopied.neon ? <LuCopy onClick={()=>{copyStylesCode("neon",neonHtmlCss)}}
                                        className="copyInActive"/> :
                                        <p className="copiedMessagebutton">Copied</p>}
                                        <pre className="buttonPreviewCode">
                                            <p>{neonHtmlCss}</p>
                                        </pre>
                                    </div>}
                                    {neonTailwind==='is_ON' && <div>
                                        {buttonCopied.tailwindNeon ? <LuCopy onClick={()=>{copyStylesCode("tailwindNeon",neonTailwindCss)}}
                                        className="copyInActive"/> :
                                        <p className="copiedMessagebutton">Copied</p>}
                                        <pre className="buttonPreviewCode">
                                            <p>{neonTailwindCss}</p>
                                        </pre>
                                    </div>}

                                </div>

                            </div>

                         </Slider> 

                            <div className="controllerSwipe">
                                <button className="previousButton"
                                onClick={()=>sliderRef.current.slickPrev()}>Previous</button>

                                <button className="nextButton"
                                onClick={()=>sliderRef.current.slickNext()}>Next...</button>
                            </div>  
                        </section>
                        
                    </section>
                    
                </section>
                
            </section>
        </>
    );
}

export default Buttons;

