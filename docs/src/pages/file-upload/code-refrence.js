const clickableCode = `
<FileUpload
  clickable
  onChange={(...args) => console.log(...args)}
>
  {({ dragOver }) => (
    <div className={'d-flex justify-content-center align-items-center fixed-size hoverable ' + (dragOver ? 'hovered': '')}>
    Drop Files Here or Click
    </div>
  )}
</FileUpload>
`;

const disabledCode = `
<FileUpload
  disabled
>
  {({ dragOver }) => (
    <div className={'d-flex justify-content-center align-items-center fixed-size ' + (dragOver ? 'hovered': '')}>
      Drop Files Here
    </div>
  )}
</FileUpload>
`;

const simpleCode = `
<FileUpload
  onChange={(...args) => console.log(...args)}
>
  {({ dragOver }) => (
    <div className={'d-flex justify-content-center align-items-center fixed-size ' + (dragOver ? 'hovered': '')}>
      Drop Files Here
    </div>
  )}
</FileUpload>
`;
export {
  clickableCode,
  disabledCode,
  simpleCode,
};
