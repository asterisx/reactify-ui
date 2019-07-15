/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { StarRating } from '../../../../reactify-ui/build';
import {
  simpleCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  customClassCode,
  onChangeCode,
  propsCode,
} from './code-refrence';

import {
  customClassLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
  onChangeLink,
  propsLink,
  simpleLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Stacked Card',
    link: `${Constants.componentsPath}/stacked-card`,
  },
  nextLink: {
    text: 'Switch',
    link: `${Constants.componentsPath}/switch`,
  },
};

const StarRatingDemo = () => (
  <DemoPage componentName="Star Rating">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/star-rating`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <StarRating />
    </DemoCard>

    <DemoCard
      title="Size Code"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
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
      sourceCode={propsCode}
      externalSampleLink={propsLink}
    >
      <h6>
        {'highestRating={10}'}
      </h6>
      <StarRating highestRating={10} />

      <h6>
        pre rating
        {' '}
        <b>{'rating={2}'}</b>
      </h6>
      <StarRating rating={2} />
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
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
      sourceCode={onChangeCode}
      externalSampleLink={onChangeLink}
    >
      <p>Check console for log</p>
      <StarRating onChange={rating => console.log(`Rated: ${rating} stars`)} />
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <StarRating disabled />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <StarRating className="bg-dark text-light" />
    </DemoCard>

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(StarRatingDemo);
