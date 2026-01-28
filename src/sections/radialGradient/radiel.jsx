import "./radialGradient.css"
import SideBar from "../navbar/sidebar"
import { LuCopy } from "react-icons/lu"; 
import { HexColorPicker,HexColorInput } from "react-colorful"
import { useState } from "react";
import { colord } from "colord";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  GoesTop  from "../../assets/components/topButton/top.jsx"


function RadielGradient() {
    const [radialPicker,setRadialPicker]=useState('#29c522');
    const [radialEndPicker,setRadialEndPicker]=useState('#0B0729');

    const [radialShape,setRadialShape]=useState('ellipse');
    function radialShapeHandler(event) {
        setRadialShape(event.target.value);
    }

    const [radialAngle,setRadialAngle]=useState('farthest-side');
    function radialAngleHandler(event){
        setRadialAngle(event.target.value);

    }

    const [radialPosition,setRadialPosition]=useState('center');
    function radialPositionHandler(event) {
        setRadialPosition(event.target.value);
    }

   
    const radialStartRGB=colord(radialPicker).toRgb();
    const startRGBRadial=`rgb(${radialStartRGB.r},${radialStartRGB.g},${radialStartRGB.b})`;
    const radialEndRGB=colord(radialEndPicker).toRgb();
    const endRGBRadial=`rgb(${radialEndRGB.r},${radialEndRGB.g},${radialEndRGB.b})`;

    const bgRadialGradient=`radial-gradient(${radialShape} ${radialAngle} at ${radialPosition},${radialPicker},${radialEndPicker})`

    const radialGradientCode=`
 .radialBg{
    background:-webkit-radial-gradient(${radialShape} ${radialAngle} at ${radialPosition},${radialPicker},${radialEndPicker});
    background:radial-gradient(${radialShape} ${radialAngle} at ${radialPosition},${radialPicker},${radialEndPicker});
 }`;

    const convertedTailwindCode=bgRadialGradient.replaceAll(" ","_");
    const radialTailwindCode=`
 <div className="w-[100px] h-[75px] bg-[radial-gradient(${convertedTailwindCode},${radialPicker},${radialEndPicker})]"></div>`

    const [radialCopied,setRadialCopied]=useState({
        radialCss:true,
        radialTailwind:true
    });

    async function radialCopyHandler(type,text) {
        try{
            await navigator.clipboard.writeText(text);
            setRadialCopied(prev=>({...prev,[type]:false}));
            setTimeout(()=>{
                setRadialCopied(prev=>({...prev,[type]:true}));
            },800)
        }
        catch(error){
            console.log(`couldn't copy `);
        }
    }

    const [cssRadialState,setCssRadialState]=useState('isOpen');
    const [tailwindRadialState,setTailwindRadialState]=useState('isClose');

    function pureCssHandler(){
        setCssRadialState('isOpen');
        setTailwindRadialState('isClose');
    }
    function tailwindHandler() {
        setTailwindRadialState('isOpen');
        setCssRadialState('isClose');
    }

    const [copyRGBRadiel,setCopyRGBRadial]=useState({
        radialInitial:true,
        radialEnd:true
    })

    async function startRGBCopyHandler(type,text) {
        try{
            await navigator.clipboard.writeText(text);
            setCopyRGBRadial(prev=>({...prev,[type]:false}))
                setTimeout(()=>{
            setCopyRGBRadial(prev=>({...prev,[type]:true}))
            },800)
        }
        catch(error){
            console.log(`couldn't copy`);
        }
    }
    return(
        <>
            <section className="wholeRadialSection">
                <section className="radialSideBar">
                    <SideBar />
                </section>
                
                <section className="mainradialSection">
                <section className="previewRadialCustomSection">

                    <div className="previewRadialSection">
                        <h3>Radial Gradient</h3>
                        <div className="previewRadialBox"
                        style={{background:bgRadialGradient}}></div>
                        <div className="previewRadialCodes">
                            <div className="radialDivisons">
                                <button onClick={pureCssHandler}
                                className={cssRadialState==='isOpen' ? "radialDivisionClicked" : "radialDivisionsbutton"}>CSS</button>
                                <button onClick={tailwindHandler}
                                className={tailwindRadialState==='isOpen' ? "radialDivisionClicked" : "radialDivisionsbutton"}>Tailwind Css</button>
                            </div>
                            {cssRadialState==='isOpen' && <div>
                                <div className="messageSection">
                                    {radialCopied.radialCss ? <LuCopy onClick={()=>{radialCopyHandler('radialCss',radialGradientCode)}}
                                    className="radialNotCopied"/> :
                                    <p className="copiedMessageradial">Copied</p>}
                                </div>
                                <pre className="RadialPreviewCodes">
                                    <p>{radialGradientCode}</p>
                                </pre>
                            </div>}
                            {tailwindRadialState==='isOpen' && <div>
                                <div className="messageSection">
                                    {radialCopied.radialTailwind ? <LuCopy onClick={()=>{radialCopyHandler('radialTailwind',radialTailwindCode)}}
                                    className="radialNotCopied"/> :
                                    <p className="copiedMessageradial">Copied</p>}
                                </div>
                                <pre className="RadialPreviewCodes">
                                    <p>{radialTailwindCode}</p>
                                </pre>
                            </div>}
                        </div>

                        
                    </div>
                </section>

                <section className="customGradient">
                     <div className="anglesRadial">
                        <label>Shape:</label>
                        <Box sx={{ minWidth: 120,
                         }}>
                            <FormControl fullWidth>
                                {/* <InputLabel id="demo-simple-select-label">Shape:</InputLabel> */}
                                <Select sx={{color:'#0B0729', 
                                    backgroundColor:'#F7F7F7',
                                    ".MuiSelect-icon":{
                                        color:'#0B0729'
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                        border:"1px solid #0B0729"
                                    },
                                }}
                                variant="outlined"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={radialShape}
                                onChange={radialShapeHandler}>
                                    <MenuItem value={"ellipse"} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>ellipse</MenuItem>
                                    <MenuItem value={'circle'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>circle</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="anglesRadial">
                        <label>Size:</label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                {/* <InputLabel id="demo-simple-select-label">Size:</InputLabel> */}
                                <Select sx={{color:'#0B0729', 
                                    backgroundColor:'#F7F7F7',
                                    ".MuiSelect-icon":{
                                        color:'#0B0729'
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                        border:"1px solid #0B0729"
                                    },
                                }}
                                variant="outlined"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={radialAngle}
                                onChange={radialAngleHandler}>
                                    <MenuItem value={'farthest-side'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>farthest-side</MenuItem>
                                    <MenuItem value={'closest-side'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>closest-side</MenuItem>
                                    <MenuItem value={'closest-corner'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>closest-corner</MenuItem>
                                    <MenuItem value={'farthest-corner'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>farthest-corner</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div className="anglesRadial">
                        <label>Position:</label>
                        <Box sx={{ minWidth: 120,}}>
                            <FormControl fullWidth>
                                {/* <InputLabel id="demo-simple-select-label">Position:</InputLabel> */}
                                <Select sx={{color:'#0B0729', 
                                    backgroundColor:'#F7F7F7',
                                    ".MuiSelect-icon":{
                                        color:'#0B0729'
                                    },
                                    "& .MuiOutlinedInput-notchedOutline":{
                                        outline:'none'
                                    },
                                     "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                        border:"1px solid #0B0729"
                                    },
                                    "&.Mui-selected":{
                                        backgroundColor:'#0B0729'
                                    }
                                }}
                                variant="outlined"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={radialPosition}
                                onChange={radialPositionHandler}>
                                    <MenuItem value={"center"} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>center</MenuItem>
                                    <MenuItem value={'top'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>top</MenuItem>
                                    <MenuItem value={'bottom'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>bottom</MenuItem>
                                    <MenuItem value={'left'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>left</MenuItem>
                                    <MenuItem value={'right'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>right</MenuItem>
                                    <MenuItem value={'top left'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>top left</MenuItem>
                                    <MenuItem value={'top right'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>top right</MenuItem>
                                    <MenuItem value={'bottom left'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>bottom left</MenuItem>
                                    <MenuItem value={'bottom right'} sx={{'&.Mui-selected':{
                                        backgroundColor:'rgb(35, 34, 92)',
                                        color:'#fff'
                                    }}}>bottom right</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div className="startingColorPicker">
                        <label className="pickerLabels">Initial Color:</label>
                        <HexColorPicker color={radialPicker} onChange={setRadialPicker} className="picker"/>
                        
                        <label>Initial HEX:</label>
                        <HexColorInput className="colorDisplayRadial" 
                        color={radialPicker} onChange={setRadialPicker} prefixed/>

                        <label>Initial RGB:</label>
                        <div className="radialRGBcopy">
                            <p className="colorRadialRGB">{startRGBRadial}</p>
                            {copyRGBRadiel.radialInitial ? <LuCopy onClick={()=>{startRGBCopyHandler('radialInitial',startRGBRadial)}}
                            className="radialNotCopied"/> :
                            <p className="copiedMessageradial">Copied</p>}
                        </div>
                        
                    </div>
                </section>

                <section className="endingColorPicker">
                    <label className="pickerLabels">End Color:</label>
                    <HexColorPicker color={radialEndPicker} onChange={setRadialEndPicker} className="picker" />

                    <label>End HEX:</label>
                    <HexColorInput className="colorDisplayRadial"
                    color={radialEndPicker} onChange={setRadialEndPicker} prefixed />

                    <label>End RGB:</label>
                    <div className="radialRGBcopy">
                        <p className="colorRadialRGB">{endRGBRadial}</p>
                        {copyRGBRadiel.radialEnd ? <LuCopy onClick={()=>{startRGBCopyHandler('radialEnd',endRGBRadial)}}
                        className="radialNotCopied"/> :
                        <p className="copiedMessageradial">Copied</p>}
                    </div>
                
                </section>
                <GoesTop />
                </section>
            </section>
        </>
    );
}

export default RadielGradient;
