import * as React from 'react';
import './style.css';
import { mutationArrayExample, mutaionObjectExample } from './mutation';
import { higherOrderExample } from './higher-order';
import { curryingExample } from './currying';
import { partialApplciationExample } from './partial-application';
import Hello, { alwaysTushar, withHello } from './hello';
import { composeExample } from './compose';
import { pointFreeProgrammingExample } from './point-free-programming';
import { composeExample2 } from './compose2';

export default function App() {
  // mutationArrayExample();
  // mutaionObjectExample();
  // higherOrderExample();
  // curryingExample();
   // partialApplciationExample();
  // pointFreeProgrammingExample()
   composeExample()
  // composeExample2();

  const User2 = withHello(Hello)
  const AwaysTushar = alwaysTushar(Hello)
  return (
    <div>
      <h1>Function Programming</h1>
      <p>
        <Hello name={'Steven'} />
        <AwaysTushar/>
      </p>
    </div>
  );
}
