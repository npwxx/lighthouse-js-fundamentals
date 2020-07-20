function smartGarbage(trash, bins) {
  // if (typeof trash !== 'string')
  //   throw 'trash should be a string';
  // if (!Object.keys(bins).includes(trash))
  //   throw 'trash should be a property of bins';

  bins[trash]++;
  return (bins);
}

let b = {
  waste: 4,
  recycling: 2,
  compost: 5
}
b = smartGarbage('recycling', b);
console.log(b)