import * as React from 'react';

export interface HelloProps {
  name: string;
}

export const withHello = (BaseComponent) => (props) =>
  <BaseComponent {...props} />;

export const alwaysTushar = (BaseComponent) => () => <BaseComponent name='Tushar' />

export function Hello(props: HelloProps) {
  return <div>Hello {props.name}</div>;
}

export default Hello;
