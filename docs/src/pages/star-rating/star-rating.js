/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { StarRating } from '@../../../../reactify/build';
import {
  simpleCode,
  sizeCode,
  customThemeCode,
  disabledCode,
  customClassCode,
  onChangeCode,
  propsCode,
} from './code-refrence';
import './star-rating.scss';
import DemoCard from '../../components/demo-card';

const StarRatingDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <StarRating />
    </DemoCard>

    <DemoCard
      title="Size Code"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <StarRating small />

      <h6>medium</h6>
      <StarRating medium />

      <h6>large</h6>
      <StarRating large />

      <h6>{'size={{fontSize: \'40px\'}}'}</h6>
      <StarRating style={{ fontSize: '40px' }} />
    </DemoCard>

    <DemoCard
      title="Props"
      uniqueIdentifier="propsUse"
      sourceCode={propsCode}
    >
      <h6>
        {'highestRating={10}'}
      </h6>
      <StarRating medium highestRating={10} />

      <h6>
        pre rating
        {' '}
        <b>{'rating={2}'}</b>
      </h6>
      <StarRating medium rating={2} />

    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themesUse"
      sourceCode={customThemeCode}
    >
      <h6>primary</h6>
      <StarRating primary />

      <h6>secondary</h6>
      <StarRating secondary />

      <h6>dark</h6>
      <StarRating dark />

      <h6>light</h6>
      <StarRating light />

      <h6>info</h6>
      <StarRating info />

      <h6>warning</h6>
      <StarRating warning />

      <h6>danger</h6>
      <StarRating danger />

      <h6>success</h6>
      <StarRating success />

      <h6>{'style={{ color: \'violet\' }}'}</h6>
      <StarRating style={{ color: 'violet' }} />
    </DemoCard>

    <DemoCard
      title="onChange Event"
      uniqueIdentifier="onChangedUse"
      sourceCode={onChangeCode}
    >
      <StarRating onChange={rating => alert(`Rated: ${rating} stars`)} />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <StarRating disabled />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClass"
      sourceCode={customClassCode}
    >
      <StarRating className="bg-dark text-light" />
    </DemoCard>
  </div>
);

export default StarRatingDemo;
