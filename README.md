# @vdslruf/use-ref-event-listener

Simple custom hooks for RefObjects

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/@vdslruf%2Fuse-ref-event-listener.svg)](https://badge.fury.io/js/@vdslruf%2Fuse-ref-event-listener)

This hook was inspired by [useEventListener](https://github.com/donavon/use-event-listener)

## Installation

```bash
$ npm i @vdslruf/use-ref-event-listener
```

## Call it

```js
const refObject = useEventListener(eventName, handler, options);
```

## Use Case

```js
function App(){
  const [ state, setState ] = useState('');
  //Like native change events, it dispatches when the change is finalized.
  const ref = useRefEventListener('change', e => setState(e.target.value));
  return (
    <>
      <input ref={ref} />
      <output>{state}</output>
    </>
  )
}
```

```js
function App(){
  const [ log, setLog ] = useState('');
  //Use various DOM API events that React does not support.
  const ref = useRefEventListener('beforeinput', e => setState(e.target.value));
  return (
    <>
      <input ref={ref} />
      <output>previous value: {log}</output> 
    </>
  )
}
```


## License

**[MIT](LICENSE)** Licensed
