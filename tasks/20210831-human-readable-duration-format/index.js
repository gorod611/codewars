const formatDuration = (seconds) => {
  const PERIOD_DURATION = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  const getCeilAndCurrSec = (currSec, dimension) => {
    const ceil = Math.trunc(currSec / dimension);
    return {
      ceil,
      currSec: currSec - ceil * dimension,
    };
  };

  const createArrayDimensions = (sec, getCeilAndCurrSec) => {
    let currSec = sec;
    const res = [];
    Object.keys(PERIOD_DURATION).map((periodKey) => {
      const ceilAndCurrSec = getCeilAndCurrSec(
        currSec,
        PERIOD_DURATION[periodKey]
      );
      res.push({ [periodKey]: ceilAndCurrSec.ceil });
      currSec = ceilAndCurrSec.currSec;
    });
    return res;
  };
  if (seconds === 0) {
    return "now";
  }

  return createArrayDimensions(seconds, getCeilAndCurrSec)
    .filter((period) => Object.values(period)[0])
    .reduce((acc, item, index, arr) => {
      const key = Object.keys(item)[0];
      const value = item[key];
      const isLast = index === arr.length - 1;
      const retKey = value > 1 ? `${value} ${key}s` : `${value} ${key}`;

      if (!index) {
        return acc.concat(retKey);
      } else {
        const retString = isLast ? ` and ${retKey}` : `, ${retKey}`;
        return acc.concat(retString);
      }
    }, "");
};

module.exports = formatDuration;
