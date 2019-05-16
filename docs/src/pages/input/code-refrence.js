const customColorCode = `
<Input style={{ borderColor: 'violet' }} defaultValue="A custom color Input" type="text" />;
`;

const customClassCode = `
<Input className="bg-dark Input-light p-1" />
`;

const customThemeCode = `
<Input primary defaultValue="A primary Input" type="text" />
<Input secondary defaultValue="A Secondary Input" type="text" />
<Input dark defaultValue="A Dark Input" type="text" />
<Input light defaultValue="A Light Input" type="text" />
<Input info defaultValue="A Info Input" type="text" />
<Input warning defaultValue="A Warning Input" type="text" />
<Input danger defaultValue="A Danger Input" type="text" />
<Input success defaultValue="A Success Input" type="text" />
`;

const propsCode = `
<Input style={{ borderColor: 'violet' }} defaultValue="password" type="password" />
`;

const simpleCode = `
<Input />
`;

const sizeCode = `
<Input small defaultValue="A small input" type="text" />
<Input medium defaultValue="A medium input" type="text" />
<Input large defaultValue="A large input" type="text" />
<Input style={{ fontSize: '75px' }} defaultValue="A custom size input" type="text" />
`;


export {
  customColorCode,
  customClassCode,
  customThemeCode,
  propsCode,
  simpleCode,
  sizeCode,
};
