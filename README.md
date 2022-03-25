# @vdslruf/use-ref-event-listener

Simple custom hooks for RefObjects

[![npm version](https://badge.fury.io/js/@vdslruf%2Fuse-ref-event-listener.svg)](https://badge.fury.io/js/@vdslruf%2Fuse-ref-event-listener)

## Installation

```bash
$ npm i @vdslruf/use-ref-event-listener
```

## Example

```js
function App(){
  const [ state, setState ] = useState(0);
  const ref = useRefEventListener('mousedown', () => setState(s => ++s));
  return (
    <>
      <button ref={ref}>increment</button>
      <output>{state}</output>
    </>
  )
}
```

## Use Case

```js
function App(){
  const [ state, setState ] = useState(0);
  const ref = useRefEventListener('change', e => setState(e.target.value));
  return (
    <>
      <input ref={ref} />
      <output>{state}</output> //Like native change events, it dispatches when the change is finalized.
    </>
  )
}
```


## License

**[MIT](LICENSE)** Licensed
