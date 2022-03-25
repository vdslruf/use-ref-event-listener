import { useRef, useEffect } from 'react';

const useRefEventListener = (
  eventName,
  handler,
  options = {}
) => {
  const element = useRef(null);
  const savedHandler = useRef();
  const { capture, passive, once } = options;

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element.current?.addEventListener;
    if (!isSupported) {
      return;
    }

    const eventListener = (event) => savedHandler.current(event);
    const opts = { capture, passive, once };
    element.current.addEventListener(eventName, eventListener, opts);
    return () => {
      element.current.removeEventListener(eventName, eventListener, opts);
    };
  }, [eventName, element, capture, passive, once]);

  return element;
};

export default useRefEventListener;
