type Split<T extends string, TSeparator extends string> = T extends `${infer TStart}${TSeparator}${infer TEnd}`
  ? [TStart, ...Split<TEnd, TSeparator>]
  : [T];

type Replace<T extends string, TSearch extends string, TReplace extends string> =
  T extends `${infer TStart}${TSearch}${infer TEnd}` ? `${Replace<TStart, TSearch, TReplace>}${TReplace}${Replace<TEnd, TSearch, TReplace>}` : T ;

interface String {
  toLowerCase<T extends string>(this: T): Lowercase<T>;

  includes<T extends string, TSearch extends string>(
    this: T,
    searchString: TSearch,
  ): this is `${string}${TSearch}${string}`;

  split<T extends string, TSeparator extends string>(this: T, separator: TSeparator): Split<T, TSeparator>;

  replace<T extends string, TSearch extends string, TReplace extends string>(this: T, searchValue: TSearch, replaceValue: TReplace): Replace<T, TSearch, TReplace>;

  startsWith<TSearch extends string>(
    searchString: TSearch,
    position?: number
  ): this is `${TSearch}${string}`;
}