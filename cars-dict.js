var cars = {
  "1": {
    "types": [2,3]
  },
  "2": {
    "name": "Audi",
    "types": [4,5],
    "parent": 1
  },
  "3": {
    "name": "BMW",
    "types": [6,7],
    "parent": 1
  },
  "4": {
    "name": "A1",
    "types": [8],
    "parent": 2
  },
  "5": {
    "name": "A3",
    "types": [9,10],
    "parent": 2
  },
  "6": {
    "name": "1 series",
    "types": [11,12],
    "parent": 3
  },
  "7": {
    "name": "3 series",
    "types": [13,14],
    "parent": 3
  },
  "8": {
    "name": "Sedan",
    "parent": 4
  },
  "9": {
    "name": "Sedan",
    "parent": 5
  },
  "10": {
    "name": "Sportback",
    "parent": 5
  },
  "11": {
    "name": "3 doors",
    "parent": 6
  },
  "12": {
    "name": "5 doors",
    "parent": 6
  },
  "13": {
    "name": "Coupe",
    "parent": 7
  },
  "14": {
    "name": "Cabrio",
    "parent": 7
  }
}

export default cars;
