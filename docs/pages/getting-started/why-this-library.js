/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import {
  Breadcrumbs,
  Link,
  Paper,
} from '../../../reactify-ui/build';
import { withHeader } from '../../common';

const Installation = () => (
  <div className="w-100 h-max-md-100 h-800px d-flex flex-column mt-3">
    <Breadcrumbs className="ml-2 align-self-start">
      <Breadcrumbs.Item key={0}>
        <Link
          href={process.env.HOST}
        >
          Home
        </Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item key={1}>
        Getting Started
      </Breadcrumbs.Item>
      <Breadcrumbs.Item key={1}>
        Why this library?
      </Breadcrumbs.Item>
    </Breadcrumbs>

    <div className="w-100 d-flex align-items-center justify-content-center">
      <Paper secondary className="align-self-center d-block p-3 m-1 mt-3 width-m-95 width-75 mx-auto">
        <h4 className="mt-2 align-self-start ml-2">So, why a new UI components library?</h4>
        <p className="mt-3 mb-3 align-self-start ml-2">Here are some of the features we added which we thought other libs were lacking and they help take much of the pain away.</p>
        <ul className="h6">
            <li className="mb-4">
                <b>Component Composition.</b> Most of the components are built to accept other components as children which can be used to make some new powerful and interesting components.
                <br />
                <br />
                The idea is to make these components behave like &quot;containers&quot; with some functionalities as their name suggest and let them accept any content inside.
                They have default behaviors as is expected of them or as there names suggest but also allow advanced use cases.
                <br />
                <br />
                Due to the vastness of permutation and combinations, many new UI elements can be made by stacking together the lib ones.
                <br />
                <Link
                  href={`${process.env.HOST}/advanced/recipes`}
                >
                    Check out the recipes section.
                </Link>
            </li>
            <li className="mb-4">
                <b>Inbuilt support for theming.</b>
                <br />
                <Link
                  href={`${process.env.HOST}/advanced/theming`}
                >
                    Check out the theming section.
                </Link>
            </li>
            <li>
                <b>Easy styling</b> with support for many kinds of styling, i.e the components do not have any preference when it comes to styling and support multiple ways of styling.
                <br />
                <br />
                You can pass className, the styles prop and most components have BEM class names if you wish to target that way.
                <br />
                <Link
                  href={`${process.env.HOST}/advanced/styling`}
                >
                    Check out the styling section.
                </Link>
            </li>
        </ul>
      </Paper>
    </div>
  </div>
);

export default withHeader(Installation, 'h-max-md-100');
