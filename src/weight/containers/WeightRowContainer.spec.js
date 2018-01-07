import { measurementsByWeek } from "./WeightRowContainer";

describe("measurementsByWeek", () => {
  it("should return seven days", () => {
    const data = [];
    const week = 1;
    const expected = [
      {
        date: "2018-01-01"
      },
      {
        date: "2018-01-02"
      },
      {
        date: "2018-01-03"
      },
      {
        date: "2018-01-04"
      },
      {
        date: "2018-01-05"
      },
      {
        date: "2018-01-06"
      },
      {
        date: "2018-01-07"
      }
    ];

    const actual = measurementsByWeek(data, week);
    expect(actual).toEqual(expected);
  });

  it("should map days", function() {
    const data = [
      {
        date: "2018-08-21",
        weight: 123.12
      },
      {
        date: "2018-08-26",
        weight: 121.01
      }
    ];
    const week = 34;
    const expected = [
      {
        date: "2018-08-20"
      },
      {
        date: "2018-08-21",
        weight: 123.12
      },
      {
        date: "2018-08-22"
      },
      {
        date: "2018-08-23"
      },
      {
        date: "2018-08-24"
      },
      {
        date: "2018-08-25"
      },
      {
        date: "2018-08-26",
        weight: 121.01
      }
    ];

    const actual = measurementsByWeek(data, week);
    expect(actual).toEqual(expected);
  });
});
