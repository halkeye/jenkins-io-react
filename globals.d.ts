// import {DOMAttributes} from 'react';

// type CustomElement<T> = Partial<T & DOMAttributes<T> & {children: any;}>;

export {};

declare global {
  type JSXNode = JSX.Element | null;

  namespace JSX {
    interface IntrinsicElements {
      ['ion-icon']: any;
    }
  }
}
