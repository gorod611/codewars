const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;
  const ret = walk
    .slice(0, 10)
    .reduce((acc, direct) => ({ ...acc, [direct]: acc[direct] + 1 }), {
      n: 0,
      s: 0,
      w: 0,
      e: 0,
    });
  return !(ret.n - ret.s) && !(ret.e - ret.w);
};

module.exports = isValidWalk;
