import { sortArray } from "./sortedBabyData";

test('returns sorted object with baby data by name', () => {
    expect(sortArray({"id": 0,"name": "Zahra","sex": "f" }, {"id": 1,"name": "Parsa","sex": "m"})).toBe(1)
})

