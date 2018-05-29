# Parse Arteries

If an artery, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-arteries

## Usage

Example:

```javascript
await parse('Some text related to the superficial circumflex iliac artery')
```

Output:

```json
[
  {
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
  }
]
```
