import type { RefObject } from 'react';
type Options = Pick<AddEventListenerOptions, 'capture' | 'passive' | 'once'>;

declare function useRefEventListener<T,K extends keyof HTMLElementEventMap>(
  eventName: K,
  handler: HTMLElementEventMap[K],
  options?: Options
): RefObject<T>;
declare function useRefEventListener<T,K extends keyof DocumentEventMap>(
  eventName: K,
  handler: DocumentEventMap[K],
  options?: Options
): RefObject<T>;
declare function useRefEventListener<T,K extends keyof WindowEventMap>(
  eventName: K,
  handler: WindowEventMap[K],
  options?: Options
): RefObject<T>;
declare function useRefEventListener<T>(
  eventName: string,
  handler: EventListenerOrEventListenerObject,
  options?: Options
): RefObject<T>;
declare function useRefEventListener<
  T,K extends keyof (HTMLElementEventMap & DocumentEventMap & WindowEventMap)
>(
  eventName: K,
  handler: (
    event: (HTMLElementEventMap & DocumentEventMap & WindowEventMap)[K]
  ) => void,
  options?: Options
): RefObject<T>;

export as namespace useRefEventListener;
export default useRefEventListener;
