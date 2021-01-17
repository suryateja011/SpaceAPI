---
id: doc2
title: Quote
sidebar_label: Quote
---

This is the documentation for the `/quote` endpoint. There are currently `51` quotes sorted by id.

### Location schema

| Key       | Type         | Description                            |
| --------- | ------------ | -------------------------------------- |
| id        | int          | The id of the quote (starting from 1). |
| quote     | string       | Quote from Final Space.                |
| by        | string       | Character who said the Quote.          |
| character | string (url) | URL to Character endpoint.             |
| image     | string (url) | Image of the Charater.                 |

### Get all quotes

You can access the all the quotes by using the `/quote` endpoint.

```
https://spaceapi.tech/api/v0/quote/
```

```json
[
  {
    "id": 1,
    "quote": "How about fricken’ no?!",
    "by": "Space",
    "character": "https://spaceapi.tech/api/v0/character/1",
    "image": "https://spaceapi.tech/api/character/avatar/gary_goodspeed.jpg"
  },
  {
    "id": 2,
    "quote": "You see, I like that. I like a girl with a lot of phones.",
    "by": "Space",
    "character": "https://spaceapi.tech/api/v0/character/1",
    "image": "https://spaceapi.tech/api/character/avatar/gary_goodspeed.jpg"
  },

 ...
]
```

### Sort the response

You can now sort the response based on `id` by passing the `/?sort=asc` or `/?sort=desc` query in the URL.

```
https://spaceapi.tech/api/v0/quote/?sort=desc
```

```json
[
  {
    "id": 51,
    "quote": "Oh...okay... yeah... I think you are under arrest.",
    "by": "Chuck",
    "character": "https://spaceapi.tech/api/v0/character/23",
    "image": "https://spaceapi.tech/api/character/avatar/chuck.jpg"
  }
  ...
]
```

### Limit the response

You can limit the response by passing the `/?limit={number}` query in the URL.

```
https://spaceapi.tech/api/v0/quote/?limit=3
```

```json
[
  {
    "id": 1,
    "quote": "How about fricken’ no?!",
    "by": "Space",
    "character": "https://spaceapi.tech/api/v0/character/1",
    "image": "https://spaceapi.tech/api/character/avatar/gary_goodspeed.jpg"
  },
  {
    "id": 2,
    "quote": "You see, I like that. I like a girl with a lot of phones.",
    "by": "Space",
    "character": "https://spaceapi.tech/api/v0/character/1",
    "image": "https://spaceapi.tech/api/character/avatar/gary_goodspeed.jpg"
  },
  {
    "id": 3,
    "quote": "Let's get wild. How about you buy me a drink?",
    "by": "Space",
    "character": "https://spaceapi.tech/api/v0/character/1",
    "image": "https://spaceapi.tech/api/character/avatar/gary_goodspeed.jpg"
  }
]
```

### Use limit with sort

You can limit and sort the response simultaneously by passing both `limit={number}` and `sort=desc` query parameters in the URL and seperating them with `&` operator.

```
https://spaceapi.tech/api/v0/quote/?limit=3&sort=desc
```

```json
[
  {
    "id": 51,
    "quote": "Oh...okay... yeah... I think you are under arrest.",
    "by": "Chuck",
    "character": "https://spaceapi.tech/api/v0/character/23",
    "image": "https://spaceapi.tech/api/character/avatar/chuck.jpg"
  },
  {
    "id": 50,
    "quote": "Yes, that's Chuck, now please surrender and this all goes away.",
    "by": "Chuck",
    "character": "https://spaceapi.tech/api/v0/character/23",
    "image": "https://spaceapi.tech/api/character/avatar/chuck.jpg"
  },
  {
    "id": 49,
    "quote": "Ergon, we have orders to arrest your for, uh..., grand theft.",
    "by": "Chuck",
    "character": "https://spaceapi.tech/api/v0/character/23",
    "image": "https://spaceapi.tech/api/character/avatar/chuck.jpg"
  }
]
```
