import React from 'react';
import { FaHandPeace } from 'react-icons/fa';
import {
  Paper,
  Spinner,
  Text,
  Timer,
} from '../../../reactify-ui/build';

const ComingSoon = ({ milis = 1563947400000 }) => (
  <div className="w-100 h-max-md-100 h-800px d-flex align-items-center justify-content-center">
    <Paper secondary className="width-75 width-m-95 p-5 d-flex flex-column align-items-center justify-content-center">
      <h1 className="mb-5 d-flex align-items-center">
        <FaHandPeace className="mr-3" />
          Coming Soon...
      </h1>
      <Text dark large warning className="d-block mb-3 d-flex align-items-center">
        <Spinner warning small clock className="mr-3" />
          Expected time
      </Text>
      <Timer success milliseconds={milis} />
    </Paper>
  </div>
);

export default ComingSoon;
