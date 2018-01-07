import { measurementsByWeeks } from "./WeightTableContainer";

describe("group by week", () => {
  it("should group by weeks", function() {
    const measurements = [
      {
        date: "2018-01-07",
        weight: 117.5
      },
      {
        date: "2018-01-08",
        weight: 117.34
      },
      {
        date: "2018-01-09",
        weight: 117.4
      },
      {
        date: "2018-08-20",
        weight: 107.4
      }
    ];
    const result = {
      "1": [
        {
          date: "2018-01-07",
          weight: 117.5
        }
      ],
      "2": [
        {
          date: "2018-01-08",
          weight: 117.34
        },
        {
          date: "2018-01-09",
          weight: 117.4
        }
      ],
      "34": [
        {
          date: "2018-08-20",
          weight: 107.4
        }
      ]
    };
    const actual = measurementsByWeeks(measurements);
    expect(actual.get(1)).toEqual(result["1"]);
    expect(actual.get(2)).toEqual(result["2"]);
    expect(actual.get(34)).toEqual(result["34"]);
  });
});
