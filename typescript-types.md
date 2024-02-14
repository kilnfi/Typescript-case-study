# TypeScript Test

Provide a better and safer implementation of the following typescript native types:

```typescript
interface String {
  /**
   * Returns true if searchString appears as a substring of the result of converting this
   * object to a String, at one or more positions that are
   * greater than or equal to position; otherwise, returns false.
   */
  includes(searchString: string, position?: number): boolean;

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * endPosition – length(this). Otherwise returns false.
   */
  endsWith(searchString: string, endPosition?: number): boolean;

  /**
   * Split a string into substrings using the specified separator and return them as an array.
   */
  split(separator: string): string[];

  /**
   * Replaces text in a string, using a regular expression or search string.
   */
  replace(searchValue: string, replaceValue: string): string;

  /**
   * Returns a String value that is made from count copies appended together. If count is 0,
   * the empty string is returned.
   */
  repeat(count: number): string;

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * position. Otherwise returns false.
   */
  startsWith(searchString: string, position?: number): boolean;
}
```
