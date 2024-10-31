import React, { useState } from 'react';
import { Wheel, WheelDataType } from 'react-custom-roulette';

const letters: string[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
let opcoes: string[] = letters;
let opcoesSelecionadas: string[] = [];

const generateSeamlessShades = (hue: number, saturation: number) => {
  const midpoint = Math.floor(letters.length / 2);
  const maxLightness = 90;
  const minLightness = 50;

  return Array.from({ length: letters.length }, (_, i) => {
    const lightness =
      i <= midpoint
        ? minLightness + ((maxLightness - minLightness) * (i / midpoint))
        : minLightness + ((maxLightness - minLightness) * ((letters.length - 1 - i) / midpoint));
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  });
};

const generateData = () => {
  const colors = generateSeamlessShades(270, 100);

  return opcoes.map((letter, index) => ({
    option: letter,
    style: {
      backgroundColor: colors[index],
      textColor: '#000'
    }
  }));
};

function LetterPicker() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [data] = useState<WheelDataType[]>(generateData);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      opcoesSelecionadas.push(opcoes[newPrizeNumber]);
      opcoes.filter((opcao) => opcoesSelecionadas.indexOf(opcao) === -1);
      setMustSpin(true);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className="flex flex-col">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderWidth={0}
          innerBorderWidth={0}
          radiusLineWidth={1}
          textDistance={80}
          spinDuration={0.4}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button
          className="bg-transparent border border-violet mt-5 mb-2 py-3 rounded hover:scale-110"
          onClick={handleSpinClick}
        >
          GIRAR
        </button>
      </div>
      <div className='flex items-center'>
        <div className='border border-violet ml-14 px-8 min-h-[50px] flex flex-col'>
          <h1 className='text-4xl'>{data[prizeNumber].option}</h1>
          <span>a</span>
        </div>
        
      </div>
    </div>
  );
}

export default LetterPicker;