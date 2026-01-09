import "./linear.css"
import SideBar from "../navbar/sidebar"
import { LuCopy } from "react-icons/lu";
import { HexColorPicker,HexColorInput } from "react-colorful"
import { colord } from "colord"
import { useState } from "react";

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
    .background:linear-gradient
    (${angles}deg,${colorPick},${colorPickEnd});
    background:-webkit-linear-gradient
    (${angles}deg,${colorPick},${colorPickEnd});
}`

    const [codeCopied,setCodeCopied]=useState(false);
    async function copyLinearCodes() {
        await navigator.clipboard.writeText(codesLinear);
        setCodeCopied(prev=>prev=false);
        setTimeout(()=>{
            setCodeCopied(prev=>prev=true);
        },700)

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
                            <LuCopy className={!codeCopied ? "linearNotCopied" : "linearCopied"}
                            onClick={copyLinearCodes}/>

                            <pre className="previewCodes">
                                <p>{codesLinear}</p>
                            </pre>
                        </div>

                    </div>

                    <div className="customContainer">

                            <div className="angleLinear">
                                <label>Angles:</label>
                                <input type="range" className="angleInputRange" min="-360" max="360"
                                value={angles} onChange={angleInputHandler}/>
                                <p className="angleLinearInput">{angles}deg</p>
                            </div>

                            <div className="startPositions">
                                <label>Initial Color:</label>
                                <HexColorPicker className="picker" color={colorPick} onChange={setColorPick}/>

                                 <label>Hex:</label>
                                <HexColorInput className="colorLinearInput" color={colorPick} onChange={setColorPick}
                                prefixed readOnly/>
                            </div>
                            
                        
                    </div>
                    <div className="stopPositions">
                        <label>End Color:</label>
                        <HexColorPicker className="picker" color={colorPickEnd} onChange={setColorPickEnd}/>

                        <label>Hex:</label>
                        <HexColorInput className="colorLinearInput" color={colorPickEnd} onChange={setColorPickEnd}
                        prefixed readOnly/>

                        
                        
                        <div className="linearColorPicker">

                            <div>
                                <label>Initial Color:</label>
                                <p className="angleLinearInput">{startRgb}</p>
                            </div>

                            <div>
                                <label>End Color:</label>
                                <p className="angleLinearInput">{endRgb}</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </section>
            </section>
        </>
    );
}


export default LinearGradients;
