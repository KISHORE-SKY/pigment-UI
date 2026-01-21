import gmbgimage from "../../assets/9440461.jpg"
import SideBar from "../navbar/sidebar";
import "./mirrorbg.css"
import profiletwo from "../../assets/10491830.jpg"
import {HexColorPicker,HexColorInput} from "react-colorful";
import { colord } from "colord";
import { useState } from "react";
import { LuCopy } from "react-icons/lu";

function GlassMorphism() {

    const [pickColor,setPickColor]=useState('#2eefed');
    const [opacitysRanges,setopacitysRanges]=useState(0.9);

    const [blurRanges,setBlurRanges]=useState('5');

    const rgbamorphism=colord(pickColor).alpha(opacitysRanges).toRgb()
    const glassOFBg= `rgba(${rgbamorphism.r},${rgbamorphism.g},${rgbamorphism.b},${rgbamorphism.a})`;

    function opacityHandler(event) {
        setopacitysRanges(Number(event.target.value));
        console.log(event.target.value); 
    }
    function blurHandler(event) {
        setBlurRanges(event.target.value);
        console.log(event.target.value);
    }
    const brightness=(rgbamorphism.r*299 + 
        rgbamorphism.g*587+
        rgbamorphism.b*114)/1000;

    const textColorGM=brightness > 180 ? "#000" : "#fff"

const styleCodesGM=`.glassmorphism{
    background:${glassOFBg};
    backdrop-filter:blur(${blurRanges}px);
    -webkit-backdrop-filter:blur(${blurRanges}px);
}`;

const tailwindCodesGM=`<div className="bg-[${glassOFBg}] backdrop-blur-[${blurRanges}px]"></div>`

    const [codeIsCopied,setCodeIsCopied]=useState({
        morphismCss:true,
        morphismTailwind:true
    });
    async function codeCopyHandler(type,text) {
        try{
            await navigator.clipboard.writeText(text);
            setCodeIsCopied(prev=>({...prev,[type]:false}));
            setTimeout(()=>{
                setCodeIsCopied(prev=>({...prev,[type]:true}));
            },800)
        }
        catch(error){
            console.log(`couldn't copy`);
            
        }
    }

    const [gmCssCodes,setGmCssCodes]=useState('yesOpen');
    const [gmTailwindCodes,setGmTailwindCodes]=useState('noOpen');
    function cssCodeHandler() {
        setGmCssCodes('yesOpen');
        setGmTailwindCodes('noOpen');
    }
    function tailwindCodeHandler() {
        setGmTailwindCodes('yesOpen');
        setGmCssCodes('noOpen')
    }

    return(
        <>
            <section className="glassWholeSection">
                <section className="glassSidebar">
                    <SideBar />
                </section>

                <section className="glassPreviewCustomize">

                    <div className="previewCode">

                        <div className="previewBackground">

                            <div className="preCard" 
                            style={{backdropFilter:`blur(${blurRanges}px)`,
                            background:`${glassOFBg}`,color:textColorGM}}>
                                <h2>Preview Of Glass Morphism</h2>
                                <p>Profiles</p>

                                <div style={{display:'flex',
                                     alignItems:'center',
                                     gap:'4px',
                                     color:textColorGM}}>
                                    <img className="previewImage" 
                                    src={gmbgimage} />
                                    <p>Bruce Wayne</p>
                                </div>

                                <div style={{display:'flex', 
                                    alignItems:'center',
                                    gap:'4px',
                                    color:textColorGM}}>
                                <img className="previewImage"  
                                src={profiletwo}/>
                                <p>Diana Princess</p>
                                </div>

                            </div>

                        </div>

                        <div className="codesMorphism">
                            <div className="glassDivisions">
                                <button onClick={cssCodeHandler} 
                                className={gmCssCodes==='yesOpen' ? "glassDivisionClicked" : "glassDivisionsbutton"}>CSS</button>
                                <button onClick={tailwindCodeHandler} 
                                className={gmTailwindCodes==='yesOpen' ? "glassDivisionClicked" : "glassDivisionsbutton"}>Tailwind Css</button>
                            </div>
                            {gmCssCodes==='yesOpen' && <div>
                            <div className="copyMessageSection">
                                {codeIsCopied.morphismCss ? <LuCopy 
                                onClick={()=>{codeCopyHandler('morphismCss',styleCodesGM)}}
                                className='notCopied'/> :
                                <p className="codeCopied">Copied</p>}
                            </div>
                            <pre>
                                {styleCodesGM}
                            </pre>
                            </div>}
                            {gmTailwindCodes==='yesOpen' && <div>
                            <div className="copyMessageSection">
                                {codeIsCopied.morphismTailwind ? <LuCopy 
                                onClick={()=>{codeCopyHandler('morphismTailwind',tailwindCodesGM)}}
                                className= 'notCopied'/> :
                                <p className="codeCopied">Copied</p>}
                            </div>
                            <pre>
                                {tailwindCodesGM}
                            </pre>
                            </div>}
                        </div>

                        </div>

                    <div className="morphismCustomize">
                        <div className="gmColorInput">
                            <div>
                                <label className="glassLabels colorpickerGM">Pick Color</label>
                                <HexColorPicker color={pickColor}
                                onChange={setPickColor}
                                className="picker-wrapper" />
                            </div>

                            <div>  
                                <label className="glassLabels">HEX:</label>
                                <HexColorInput color={pickColor} 
                                onChange={setPickColor} 
                                readOnly prefixed 
                                className="hexDisplayInput"/>
                            </div>

                            <div>
                                <label className="glassLabels">RGBA:</label>
                                <p className="rgbaDisplayInput">{rgbamorphism.r},{rgbamorphism.g},{rgbamorphism.b},{rgbamorphism.a}</p>
                            </div>
                        </div>

                        <div className="opacitySection">
                            <label className="glassLabels">Opacity:</label>

                            <div>
                                <input type="range" min="0"
                                max="1" step="0.1" 
                                value={opacitysRanges} 
                                className="rangeInputs"  
                                onInput={opacityHandler}/>
                                <p className="rgbaDisplayInput">{opacitysRanges}</p>
                            </div>
                        </div>

                        <div className="blurSection">
                            <label className="glassLabels">Blur:</label>

                            <div>
                                <input type="range" step="1"
                                value={blurRanges} 
                                onInput={blurHandler} 
                                className="rangeInputs"/>
                                <p className="rgbaDisplayInput">{`${blurRanges}px`}</p>
                            </div>
                        </div>

                    </div>
                </section>

            </section>
        </>
    );
}

export default GlassMorphism;