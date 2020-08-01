function judgeVegetable(vegetables, metric) {
  let winner = vegetables[0]
  for (let v = 1; v < vegetables.length; v++) {
    const currentVeg = vegetables[i]
    if (winner[metric] < currentVeg[metric]) {
      winner = currentVeg
    }
  }
  return winner.submitter
}

const vegetables = [{
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))