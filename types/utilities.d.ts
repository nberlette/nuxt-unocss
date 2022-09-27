declare type DeepMutable<T extends {}, Optional = unknown> =
  | Optional extends false
  ? DeepRequired<DeepMutable<T>>
  : Optional extends true
  ? DeepPartial<DeepMutable<T>>
  : { -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K], Optional> : T[K]; };

declare type DeepPartial<T extends {}> =
  | T extends object
  ? Id<{ [K in keyof T]?: DeepPartial<T[K]>; }>
  : T;

declare type DeepRequired<T extends {}> =
  | T extends object
  ? Id<{ [K in keyof T]-?: DeepRequired<T[K]>; }>
  : T;

declare type Id<T extends {}> =
  | T extends infer U
  ? U extends object
  ? { [K in keyof U]: Id<U[K]>; }
  : U
  : never;


declare type Awaitable<T> = T | Promise<T>;

declare type Arrayable<T> = T | T[];

declare type ArgumentType<T> = T extends ((...args: infer A) => any) ? A : never;

declare type Shift<T> = T extends [_: any, ...args: infer A] ? A : never;

declare type RestArgs<T> = Shift<ArgumentType<T>>;

declare type FlatObjectTuple<T> = {
  [K in keyof T]: T[K];
};

declare type PartialByKeys<T, K extends keyof T = keyof T> = FlatObjectTuple<Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K>>;

declare type RequiredByKey<T, K extends keyof T = keyof T> = FlatObjectTuple<Required<Pick<T, Extract<keyof T, K>>> & Omit<T, K>>;

export {};

