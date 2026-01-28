import "./linear.css"
import SideBar from "../navbar/sidebar"
import { LuCopy } from "react-icons/lu";
import { HexColorPicker,HexColorInput } from "react-colorful"
import { colord } from "colord"
import { useState } from "react";
import  GoesTop  from "../../assets/components/topButton/top.jsx"

function LinearGradients() {
    
    const [colorPick,setColorPick]=useState('#0B0729');
    const [colorPickEnd,setColorPickEnd]=useState('#cae4f3');

    const [angles,setAngles]=useState(90);

    function angleInputHandler(event){
        setAngles(event.target.value);
        console.log(event.target.value)
        
    }

    const linearBg=`linear-gradient(${angles}deg, ${colorPick}, ${colorPickEnd})`
    const linearRGB=colord(colorPick).toRgb();
    const startRgb=`rgb(${linearRGB.r},${linearRGB.g},${linearRGB.b})`;
    const linearRGBtwo=colord(colorPickEnd).toRgb();
    const endRgb=`rgb(${linearRGBtwo.r},${linearRGBtwo.g},${linearRGBtwo.b})`;

    const codesLinear=`.linear{
    background:-webkit-linear-gradient(${angles}deg,${colorPick},${colorPickEnd});
    background:linear-gradient(${angles}deg,${colorPick},${colorPickEnd});
}`;

    const linearTailwindCode=`<div className="bg-[linear-gradient(${angles}deg,${colorPick},${colorPickEnd})]"></div>`;

    const [codeCopied,setCodeCopied]=useState({
        linearCopied:true,
        lineartailwindCopied:true
    });

    async function copyLinearCodes(type,text) {
        try{
            await navigator.clipboard.writeText(text);
            setCodeCopied(prev=>({...prev,[type]:false}))
            setTimeout(()=>{
                setCodeCopied(prev=>({...prev,[type]:true}))
            },800)
        }
        catch(error){
            console.log(`couldn't fetch`);
        }
    }

    const [linearCss,setLinearCss]=useState('isON');
    const [linearTailwind,setLinearTailwind]=useState('isOFF');
    function linearCssState(){
        setLinearCss('isON');
        setLinearTailwind('isOFF');
    }
    function linearTailwindState() {
        setLinearTailwind('isON');
        setLinearCss('isOFF');
    }

    const [linearRGBCopy,setLinearRGBCopy]=useState({
        initialRGB:true,
        endRGBcolor:true
    })

    async function linearcolorCopy(type,text){
        try{
            await navigator.clipboard.writeText(text);
            setLinearRGBCopy(prev=>({...prev,[type]:false}))
            setTimeout(()=>{
                setLinearRGBCopy(prev=>({...prev,[type]:true}))
            },800)
        }
        catch(error){
            console.log(`couldn't copy`);
        }
    }

    return(
        <>
            <section className="mainLinearSection">

                <div className="linearSideBar">
                    <SideBar />
                </div>

                <section className="customLinearSection">
                    <div className="previewSection">
                        <h3>Linear Gradient</h3>
                        <div className="previewgradientBox"  
                        style={{background:linearBg}}>
                        </div>

                        <div className="previewCopyContainer">
                            <div className="linearDivision">
                                <button className={linearCss==='isON' ? "linearDivisionClicked" : "linearDivisionsbutton"}
                                onClick={linearCssState}>CSS</button>
                                <button className={linearTailwind==='isON' ? "linearDivisionClicked" : "linearDivisionsbutton"}
                                onClick={linearTailwindState}>Tailwind css</button>
                            </div>
                            {linearCss==='isON' && <div>
                                <div className="copyMessageSection">
                                    {codeCopied.linearCopied ? <LuCopy className= "linearNotCopied"
                                    onClick={()=>{copyLinearCodes('linearCopied',codesLinear)}}/> :
                                    <p className="copiedMessageLinear">Copied</p>}
                                </div>

                                <pre  className="previewCodes">
                                    <p>{codesLinear}</p>
                                </pre>
                            </div>}

                            {linearTailwind==='isON' && <div>
                                <div className="copyMessageSection">
                                    {codeCopied.lineartailwindCopied ?<LuCopy className="linearNotCopied"
                                    onClick={()=>{copyLinearCodes('lineartailwindCopied',linearTailwindCode)}}/> : 
                                    <p className="copiedMessageLinear">Copied</p>}
                                </div>

                                <pre className="previewCodes">
                                    <p>{linearTailwindCode}</p>
                                </pre>
                            </div>}
                        </div>

                    </div>

                    <div className="customContainer">
                        <div>
                            <div className="angleLinear">
                                <label>Angle:</label>
                                <input type="range" className="angleInputRange" min="0" max="360"
                                value={angles} onChange={angleInputHandler}/>
                                <p className="angleLinearInput">{angles}deg</p>
                            </div>
                            <div className="startPositions">
                                <label>Initial Color:</label>
                                <HexColorPicker className="picker-linear" color={colorPick} onChange={setColorPick}/>

                                 <label>Initial Hex:</label>
                                <HexColorInput className="colorLinearInput" color={colorPick} onChange={setColorPick}
                                prefixed />

                                <label>Initial RGB:</label>
                                <div className="linearRgbCopy">
                                    <p className="angleLinearInput">{startRgb}</p>
                                    <div className="copyMessageSection">
                                    {linearRGBCopy.initialRGB ? <LuCopy className= "linearNotCopied"
                                        onClick={()=>{linearcolorCopy('initialRGB',startRgb)}}/> :
                                        <p className="copiedMessageLinear">Copied</p>}
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                    <div className="stopPositions">
                        <label>End Color:</label>
                        <HexColorPicker className="picker-linear" color={colorPickEnd} onChange={setColorPickEnd}/>

                        <label>End HEX:</label>
                        <HexColorInput className="colorLinearInput" color={colorPickEnd} onChange={setColorPickEnd}
                        prefixed />
                         
                        <label>End RGB:</label>
                        <div className="linearRgbCopy">
                            <p className="angleLinearInput">{endRgb}</p>
                            <div className="copyMessageSection">
                                {linearRGBCopy.endRGBcolor ? <LuCopy className="linearNotCopied" 
                                onClick={()=>{linearcolorCopy('endRGBcolor',endRgb)}}/> : 
                                <p className="copiedMessageLinear">Copied</p>}
                            </div>
                         </div>
                        
                    </div>
                    <GoesTop />
                </section>
            </section>
        </>
    );
}


export default LinearGradients;
