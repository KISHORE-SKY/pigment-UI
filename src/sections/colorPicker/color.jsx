import { useState } from "react";
import SideBar from "../navbar/sidebar";
import {HexColorPicker,HexColorInput} from "react-colorful";
import './picker.css'
import '../navbar/sideNav.css'
import { IoMdColorPalette } from "react-icons/io";
import { colord } from "colord";
import { LuCopy } from "react-icons/lu";



function ColorPicker() {

    const [hexColor,setHexColor]=useState('#ef139e');
    const [copy,setCopy]=useState({
       rgbColor:'239, 19, 158',
        hslColor:'322, 87%, 51%',
        rgbaColor:'239,19,158,1'
    });
    const [isCopied,setIsCopied]=useState({
        hex:false,
        rgb:false,
        hsl:false,
        rgba:false
    });
    const [alphaOpacity,setAlphaOpacity]=useState(1);
    const rgb=colord(hexColor).toRgb();
    const hsl=colord(hexColor).toHsl();
    const rgba=colord(hexColor).alpha(alphaOpacity).toRgb();

    const rgbText=`rgb(${rgb.r},${rgb.g},${rgb.b})`;
    const hslText=`hsl(${Math.round(hsl.h)},${Math.round(hsl.s)}%,${Math.round(hsl.l)}%)`;
    const rgbaText=`rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;

    function colorOpacityAlpha(event){
        setAlphaOpacity(Number(event.target.value));
    }
    async function copyStateHandler(type,text){
        try{
            await navigator.clipboard.writeText(text); 

            setIsCopied(prev=>({...prev,[type]:false}));
            setTimeout(()=>{
                setIsCopied(prev=>({...prev,[type]:true}));
            },700)
            
        }
        catch(error){
            console.log(`couldn't copy`);
        }
    }

    return(
        <>
            <section className="colorPickSection">
                <section className="colorPickSideNavbar">
                    <SideBar />
                </section>
                
                <section className="colorSection">
                    <div className="inputColor">
                        <p style={{margin:'5px',fontSize:'18px'}}>Pick a Color</p>
                        <HexColorPicker color={hexColor} onChange={setHexColor} className="picker-wrapper"/>
                    
                        <label className="hexLabel">HEX:</label>
                           <div className="inputsOfColor">
                                <HexColorInput color={hexColor} readOnly 
                                onChange={setHexColor} 
                                prefixed className="colorInput" 
                                />
                                <LuCopy onClick={()=>copyStateHandler("hex",hexColor)} 
                                className={!isCopied.hex ? 'coloredCopyInActive':'coloredCopy' }/>
                            </div>
                    </div>

                    <div>
                        <div className="previewIcon">
                            <p>Preview Color</p>
                            <IoMdColorPalette  style={{color:'orangered'}}/>
                        </div>
                        <div className="preViewColor" style={{backgroundColor:hexColor,
                            width:'150px',
                            height:'125px',
                            borderRadius:'20px'
                        }} />

                        <div className="previewIconTwo">
                            <p>RGBA Preview Color</p>
                            <IoMdColorPalette  style={{color:'orangered'}}/>
                        </div>
                         <div style={{backgroundColor:`${rgbaText}`,
                            width:'150px',
                            height:'125px',
                            borderRadius:'20px',
                            border:'1px solid #0B0729'
                        }} />
                    
                    </div> 

                    <div className="colorInfo">

                        <div className="rgbaHslValues">

                           <label className="hexLabel">RGB:</label> 
                           <div className="inputsOfColor">
                            <p className="colorValueDisplay">{rgbText}</p> 
                            <LuCopy onClick={()=>copyStateHandler("rgb",rgbText)} 
                            className={!isCopied.rgb ? 'coloredCopyInActive':'coloredCopy' }/>
                           </div>

                           <label className="hexLabel">HSL: </label>
                           <div className="inputsOfColor">
                           <p className="colorValueDisplay">{hslText}</p>
                            <LuCopy onClick={()=>copyStateHandler("hsl",hslText)} 
                            className={!isCopied.hsl ? 'coloredCopyInActive':'coloredCopy'  }/>
                            </div>

                           <label className="hexLabel">RGBA & Opacity:</label>
                           <div className="inputsOfColor">
                           <p className="colorValueDisplay">{rgbaText}</p>
                           <LuCopy onClick={()=>copyStateHandler("rgba",rgbaText)}
                            className={!isCopied.rgba ? 'coloredCopyInActive':'coloredCopy'}/>
                            </div>

                            <div className="opacityColorBox">
                                <input className="colorRange" type="range" step="0.1"
                                 min='0.0' max='1' value={alphaOpacity} onInput={colorOpacityAlpha}/>
                            </div>
                        </div>
                
                    </div>

                </section>

            </section>
        </>
    );
}

export default ColorPicker;
