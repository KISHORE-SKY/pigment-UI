import "./boxShadows.css"
import { LuCopy } from "react-icons/lu";
import{ HexColorPicker,HexColorInput } from "react-colorful"
import { colord } from "colord";
import SideBar from "../navbar/sidebar"
import { useState } from "react";
import  GoesTop  from "../../assets/components/topButton/top.jsx"


function BoxShadow() {

    const [inputsRanges,setInputRanges]=useState(5);
    const [yOffsetRange,setyOffsetRange]=useState(5);
    const [spreadRanges,setSpreadRanges]=useState(1);
    const [colorPick,setColorPick]=useState("#1ce7f1");
    const [shadowBlur,setShadowBlur]=useState(5);

    function xOffsetHandler(event) {
        setInputRanges(event.target.value);
        console.log(event.target.value);  
    }
    function yOffSetHandler(event) {
        setyOffsetRange(event.target.value);
    }
    function spreadHandler(event) {
        setSpreadRanges(event.target.value)
    }
    function shadowBlurRange(event) {
        setShadowBlur(event.target.value);
    }

    const [rgbaAlpha,setRGBAalpha]=useState(0.8);
    const rgbaShadow=colord(colorPick).alpha(rgbaAlpha).toRgb();
    function opacityRGBAalpha(event) {
        setRGBAalpha(Number(event.target.value));
    }

    const shodowColor=`rgba(${rgbaShadow.r},${rgbaShadow.g},${rgbaShadow.b},${rgbaShadow.a})`;
    const boxShadowContainer=`${inputsRanges}px ${yOffsetRange}px ${spreadRanges}px ${shadowBlur}px ${shodowColor}`;

const shadowCodePreview =`.box-Shadow-code{
    -webkit-box-shadow:${inputsRanges}px ${yOffsetRange}px ${spreadRanges}px ${shadowBlur}px ${shodowColor};
    box-shadow:${inputsRanges}px ${yOffsetRange}px ${spreadRanges}px ${shadowBlur}px ${shodowColor};
}`;

const convertedShadowCodes=boxShadowContainer.replaceAll(" ","_")
const shadowTailwindCodes=`<div className="shadow-[${convertedShadowCodes}]"></div>`;

    const [shadowCopied,setShadowCopied]=useState({
        shadowCss:true,
        shadowTailwind:true
    });

    async function boxShadowCodeCopy(type,text) {
        try{
            await navigator.clipboard.writeText(text);
            setShadowCopied(prev=>({...prev,[type]:false}));
            setTimeout(()=>{
                setShadowCopied(prev=>({...prev,[type]:true}));
            },800)
        }
        catch(error){
            console.log(`couldn't copy`);
        }
    }
    const [shadowCssOpen,setShadowCssOpen]=useState('yesOpen');
    const [shadowTailwindOpen,setShadowTailwindOpen]=useState('notOpen');

    function shadowCssCodeHandler(){
        setShadowCssOpen('yesOpen');
        setShadowTailwindOpen('notOpen');
    }
    function shadowTailwindCodeHandler(){
        setShadowTailwindOpen('yesOpen');
        setShadowCssOpen('notOpen');
    }
    return(
        <>
            <section className="wholeShadow">
                <div className="shadowSidebar">
                    <SideBar />
                </div>
                <section className="boxShadowMain">
                    <div className="shadowPreview">
                        <h2 className="titleShadow">Box-Shadow</h2>
                        <div className="previewBox" style={{boxShadow:boxShadowContainer}}>
                            <p>Box-Shadow</p>
                        </div>
                        <div className="previewShadowCode">
                            <div className="boxDivisions">
                                <button className={shadowCssOpen === 'yesOpen' ? "boxDivisionClicked" : "boxDivisionsbutton"}
                                onClick={shadowCssCodeHandler}>CSS</button>
                                <button className={shadowTailwindOpen==='yesOpen' ? "boxDivisionClicked" : "boxDivisionsbutton"}
                                onClick={shadowTailwindCodeHandler}>Tailwind Css</button>
                            </div>

                            {shadowCssOpen ==='yesOpen' && <div>
                                <div className="codecopymessageSection">
                                    {shadowCopied.shadowCss ? <LuCopy onClick={()=>{boxShadowCodeCopy('shadowCss',shadowCodePreview)}}
                                    className="codesdidntCopied"/> :
                                    <p className="codesCopied">Copied</p>}
                                </div>
                                    <pre className="shadowCodes">
                                        <p>{shadowCodePreview}</p>
                                    </pre>
                            </div>}

                            {shadowTailwindOpen==='yesOpen' && <div>
                                <div className="codecopymessageSection">
                                    {shadowCopied.shadowTailwind ? <LuCopy onClick={()=>{boxShadowCodeCopy('shadowTailwind',shadowTailwindCodes)}}
                                    className="codesdidntCopied"/> :
                                    <p className="codesCopied">Copied</p>}
                                </div>
                                <pre className="shadowCodes">
                                    <p>{shadowTailwindCodes}</p>
                                </pre>
                            </div>}
                        </div>
                    </div>

                    <div className="customInputsShadow">
                        <div className="boxShadowRanges">
                            <label className="shadowLables">h-offset:</label>
                            <input type="range" value={inputsRanges} onInput={xOffsetHandler}/>
                            <p className="colorDisplayInput">{inputsRanges}px</p>
                        </div>

                        <div className="boxShadowRanges">
                            <label className="shadowLables">v-offset:</label>
                            <input type="range" value={yOffsetRange} onInput={yOffSetHandler}/>
                            <p className="colorDisplayInput">{yOffsetRange}px</p>
                        </div>

                        <div className="boxShadowRanges">
                            <label className="shadowLables">Blur:</label>
                            <input type="range" value={shadowBlur} onInput={shadowBlurRange} step='1'/>
                            <p className="colorDisplayInput">{shadowBlur}px</p>
                        </div>

                        <div className="boxShadowRanges">
                            <label className="shadowLables">Spread Radius:</label>
                            <input type="range" value={spreadRanges} onInput={spreadHandler} step='1'/>
                            <p className="colorDisplayInput">{spreadRanges}px</p>
                        </div>

                    </div>
                     <div className="boxShadowColorPicker">
                        <HexColorPicker className="pickInput" color={colorPick} onChange={setColorPick}/>

                            
                                <label className="shadowLables">Hex:</label>
                                <HexColorInput className="colorDisplayInput" 
                                color={colorPick} prefixed
                                onChange={setColorPick}/>

                                <label>Opacity:</label>
                                <input className="rangeInput" type="range" step='0.1'
                                min='0' max='1' value={rgbaAlpha} onInput={opacityRGBAalpha}/>
                                <p className="colorDisplayInput">{rgbaAlpha}</p>
                                <label>IN RGBA:</label>
                                <p className="colorDisplayInput">{rgbaShadow.r},{rgbaShadow.g},{rgbaShadow.b},{rgbaShadow.a}</p>


                        </div>
                        <GoesTop />
                </section>
            </section>
        </>
    );
}

export default BoxShadow;
