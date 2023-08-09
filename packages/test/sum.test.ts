import { describe, expect, test, jest } from "@jest/globals";
import * as SumModule from "@toolkit/sum";
import { add } from "@toolkit/add";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds 1 + 2 to equal 4 when mock return 4", () => {
    jest.spyOn(SumModule, "sum").mockReturnValue(4);
    expect(add(1, 2)).toBe(4);
  });
});
