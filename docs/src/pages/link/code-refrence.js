const customColorCode = `
<Link href="http://www.google.com" style={{ color: 'violet' }}>A custom color Link</Link>
`;

const customClassCode = `
<Link href="http://www.google.com" className="bg-dark text-light p-1">A custom class Link</Link>
`;

const customThemeCode = `
<Link href="http://www.google.com" primary>A primary Link</Link>
<Link href="http://www.google.com" secondary>A secondary Link</Link>
<Link href="http://www.google.com" dark>A dark Link</Link>
<Link href="http://www.google.com" light>A light Link</Link>
<Link href="http://www.google.com" info>A info Link</Link>
<Link href="http://www.google.com" warning>A warning Link</Link>
<Link href="http://www.google.com" danger>A danger Link</Link>
<Link href="http://www.google.com" success>A success Link</Link>
`;

const simpleCode = `
<Link href="http://www.google.com">A simple Link</Link>
`;

const sizeCode = `
<Link href="http://www.google.com" small>A small Link</Link>
<Link href="http://www.google.com" medium>A medium Link</Link>
<Link href="http://www.google.com" large>A large Link</Link>
<Link href="http://www.google.com" style={{ fontSize: '75px' }}>A custom size Link</Link>
`;


export {
  customColorCode,
  customClassCode,
  customThemeCode,
  simpleCode,
  sizeCode,
};
