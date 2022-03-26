# @vdslruf/use-ref-event-listener

Simple custom hooks for RefObjects

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/@vdslruf%2Fuse-ref-event-listener.svg)](https://badge.fury.io/js/@vdslruf%2Fuse-ref-event-listener)

This hook was inspired by [useEventListener](https://github.com/donavon/use-event-listener)

## Installation

```bash
npm i @vdslruf/use-ref-event-listener
```

## Usage

```js
const refObject = useRefEventListener(eventName, handler, options);
```

### Parameters

Here are the parameters that you can use. (\* = optional)

| Parameter   | Description                                                                                                                                                                                                                            |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eventName` | The event name (string). Here is a list of [common events](https://developer.mozilla.org/en-US/docs/Web/Events).                                                                                                                       |
| `handler`   | A function that will be called whenever `eventName` fires on `element`.                                                                                                                                                                |
| `options`\* | An object `{ capture?: boolean, passive?: boolean, once?: boolean }` to be passed to `addEventListener`. For advanced use cases. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) for details. |

### Return

RefObject

## Use Case

Like native change events, it dispatches when the change is finalized.

```js
function App(){
  const [ state, setState ] = useState('');
  
  const ref = useRefEventListener('change', e => setState(e.target.value));
  return (
    <>
      <input ref={ref} />
      <output>{state}</output>
    </>
  )
}
```

Use various DOM API events that React does not support.

```js
function App(){
  const [ log, setLog ] = useState('');
  const ref = useRefEventListener('beforeinput', e => setLog(e.target.value));
  return (
    <>
      <input ref={ref} />
      <output>previous value: {log}</output> 
    </>
  )
}
```

## TypeScript

```ts
function Div(props){
  const ref = useRefEventListener<HTMLDivElement>('click', ~);
  return <div ref={ref} {...props}>{props.children}</div>
}
```


## License

**[MIT](LICENSE)** Licensed
