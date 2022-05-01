export type PromiseType<T extends PromiseLike<unknown>> = T extends PromiseLike<
  infer P
>
  ? P
  : never;

export type BreakPoint<T extends string> = {
  lg: T;
  md: T;
  sm: T;
};
