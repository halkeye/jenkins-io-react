// import {DOMAttributes} from 'react';

// type CustomElement<T> = Partial<T & DOMAttributes<T> & {children: any;}>;

import '@testing-library/jest-dom/extend-expect';

export {};

declare global {
  type JSXNode = JSX.Element | null;

  namespace JSX {
    interface IntrinsicElements {
      ['ion-icon']: any
    }
  }
}
