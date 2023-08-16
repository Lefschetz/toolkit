import { add } from "@toolkit/add";
import { sum } from "@toolkit/sum";

test("add 1 + 2 should return 3", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

test("sum 1 + 2 should return 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
