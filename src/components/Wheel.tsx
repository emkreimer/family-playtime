import React, {useState} from 'react'
import { Wheel, WheelDataType } from "react-custom-roulette"

const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const generateSeamlessShades = (hue: number, saturation: number) => {
    const midpoint = Math.floor(letters.length / 2);
    const maxLightness = 90;  
    const minLightness = 50;  
    
    return Array.from({ length: letters.length }, (_, i) => {
        const lightness = i <= midpoint
        ? minLightness + ((maxLightness - minLightness) * (i / midpoint)) 
        : minLightness + ((maxLightness - minLightness) * ((letters.length - 1 - i) / midpoint));
    
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
    };

const generateData = () => {
    const colors = generateSeamlessShades(260, 80);
  
    return letters.map((letter, index) => ({
      option: letter,
      style: {
        backgroundColor: colors[index],
        textColor: '#000'
      }
    }));
  };

function LetterPicker() {
    const [mustSpin, setMustSpin] = useState(false);
    const [mustStop, setMustStop] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [data, setData] = useState<WheelDataType[]>(generateData);
    
    const handleSpinClick = () => {
      if (!mustSpin) {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
        setMustStop(false);
      }
    }

    const handleStopClick = () => {
        if (!mustStop) {
            setMustSpin(false);
            setMustStop(true);
        }
    }
  
    return (
      <div className='flex flex-col'>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderWidth={0}
          innerBorderWidth={0}
          radiusLineWidth={1}
          textDistance={80}
  
        //   onStopSpinning={() => {
        //     setMustSpin(false);
        //   }}
        />
        <button className='bg-transparent border border-violet mt-5 mb-2 py-3 rounded hover:scale-110' onClick={handleSpinClick}>Girar</button>

        <button className='bg-violet my-2 py-3 rounded hover:scale-110' onClick={handleStopClick}>Parar</button>
    </div>
    )
}

export default LetterPicker