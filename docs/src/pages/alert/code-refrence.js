const simpleCode = ' <Alert className="align-self-center">A simple alert</Alert >';
const disabledCode = '<Alert disabled>This is disabled</Alert >';
const childrenCode = '<Alert>\n<div className = "card" style = {{ width: "18rem" }}>\n<div className="card-body">\n<h5 className="card-title">Card title</h5>\n<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n<a href="#" className="btn btn-primary">Go somewhere</a>\n</div>\n</div>\n</Alert>';
const customClass = '<Alert className="text-light bg-dark p-2">This is a custom class Alert</Alert >';
const customThemeCode = '<Alert theme="default" className="pb-2">Default theme</Alert>\n<Alert theme="dark" className="pb-2">Dark theme</Alert>\n<Alert theme="light" className="pb-2">Light theme</Alert>\n<Alert theme="info" className="pb-2">Info theme</Alert>\n<Alert theme="warning" className="pb-2">Warning theme</Alert>\n<Alert theme="danger" className="pb-2">Danger theme</Alert>\n<Alert theme="success" className="pb-2">Success theme</Alert>';
const customColorCode = '<Alert color="violet">Label with custom border color</Alert >';
const borderPositionCode = '<Alert direction="left">This is a left alert!</Alert>\n<Alert direction="right">This is a right alert!</Alert>\n<Alert direction="top">This is a top alert!</Alert>\n<Alert direction="bottom">This is a bottom alert!</Alert>\n<Alert direction={[\'left\', \'right\', \'top\', \'bottom\']}>This is all direction alert!</Alert>\n<Alert direction={[\'left\', \'top\']}>This is a two direction alert!</Alert>';

export {
  simpleCode,
  disabledCode,
  customThemeCode,
  borderPositionCode,
  customColorCode,
  childrenCode,
  customClass,
};
