const simpleCode = '<Slider defaultValue={20} />';
const disabledCode = '<Slider disabled defaultValue={20} />';
const customIconCode = '<Slider fillColor="red" defaultValue={20} />';
const customSizeCode = `
<Slider small defaultValue={20} />

<Slider medium defaultValue={20} />

<Slider large defaultValue={20} />

<Slider style={{ fontSize: '40px' }} defaultValue={20} />
`;
const customThemeCode = `
<Slider primary defaultValue={20} />

<Slider secondary defaultValue={20} />

<Slider dark defaultValue={20} />

<Slider light defaultValue={20} />

<Slider info defaultValue={20} />

<Slider warning defaultValue={20} />

<Slider danger defaultValue={20} />

<Slider success defaultValue={20} />
`;
const onChangeCode = '<Slider onChange={val => console.log(val)} defaultValue={20} />';
const customClassCode = '<Slider className="m-5 w-50" defaultValue={20} />';
const valueCode = '<Slider value={50} />';
const unFilledCode = '<Slider defaultValue={20} fill={false} />';
const minMaxCode = '<Slider min={200} minAllowed={400} maxAllowed={1600} max={2000} defaultValue={200} step={50} />';

export {
  simpleCode,
  valueCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  customClassCode,
  unFilledCode,
  minMaxCode,
};
