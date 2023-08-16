# Jest Notes
use `jest_workaround` to support spy on **namespace imports**:
```ts
import {  expect, test, jest } from "@jest/globals";
import * as SumModule from "@toolkit/sum";
import { add } from "@toolkit/add";

test("adds 1 + 2 to equal 4 when sum mocked to return 4", () => {
  jest.spyOn(SumModule, "sum").mockReturnValue(4);
  expect(add(1, 2)).toBe(4);
});
```
---

Config [vscode-jest-runner](https://github.com/Lefschetz/vscode-jest-runner/tree/jest-runner-draft) to run tests.

