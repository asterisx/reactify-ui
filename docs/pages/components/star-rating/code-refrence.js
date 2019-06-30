const simpleCode = '<StarRating />';
const sizeCode = `
<StarRating small />

<StarRating medium />

<StarRating large />

<StarRating size={{ fontSize: '40px' }} />
`;
const customThemeCode = `
<StarRating primary />

<StarRating secondary />

<StarRating dark />

<StarRating light />

<StarRating info />

<StarRating warning />

<StarRating danger />

<StarRating success />

<StarRating style={{ color: 'violet' }} />
`;
const disabledCode = '<StarRating disabled />';
const customClassCode = '<StarRating className="bg-dark text-light" />';
const onChangeCode = '<StarRating onChange={rating => alert(\'Rated: \' + rating + \' stars\')} />';
const propsCode = `
<StarRating highestRating={10} />

<StarRating rating={2} />
`;

export {
  simpleCode,
  sizeCode,
  customThemeCode,
  disabledCode,
  customClassCode,
  onChangeCode,
  propsCode,
};
