const parse = require('./index')

const testData = [{
  input: "The medication caused damage in the anterior superior alveolar artery",
  expected: [{
    "ngram": "anterior superior alveolar artery",
    "value": {
      "id": "anterior-superior-alveolar-artery",
      "label": {
        "en": "Anterior superior alveolar artery"
      },
      "description": {
        "en": "Anterior superior alveolar artery"
      },
      "body-region": "head-and-neck",
      "category": "artery",
      "aliases": {
        "en": [
          "anterior superior alveolar artery",
          "anterior superior alveolar arteries",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 6,
      "begin": 36,
      "end": 69
    }
  }]
}, {
  input: "Some text related to the superficial circumflex iliac artery",
  expected: [{
    "ngram": "superficial circumflex iliac artery",
    "value": {
      "id": "superficial-circumflex-iliac-artery",
      "label": {
        "en": "Superficial circumflex iliac artery"
      },
      "description": {
        "en": "Superficial circumflex iliac artery"
      },
      "body-region": "lower-limb",
      "category": "artery",
      "aliases": {
        "en": [
          "Superficial circumflex iliac artery",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 5,
      "begin": 25,
      "end": 60
    }
  }]
}]

test('extract arteries', () => Promise.all(
  testData.map(async ({ input, expected }) => expect(await parse(input)).toEqual(expected))
))