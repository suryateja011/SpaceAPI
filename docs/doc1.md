---
id: doc1
title: Introduction
sidebar_label: Introduction
slug: /
---
### Inspired by [Final-Space-API](https://finalspaceapi.com/)

When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. This is what an **API** is - all of this happens via **API**.

All this information is available through a RESTful API implemented in NodeJS. This API returns data in a friendly `json` format.

The **Space API** is maintained as an open source project on [GitHub](https://github.com/suryateja011/SpaceAPI). More information about contributing can be found in the readme.

### REST

**Base url:** https://spaceapi.tech/api

The base url contains information about all available API's resources.
All requests are `GET` requests and go over `https`. All responses will return data in `json`.

_Sample Request_

```
https://spaceapi.tech/api
```

_Sample Response_

```json
[
  {
    "fullUrl": "https://spaceapi.tech/api", 
    "name": "Endpoints Data", 
    "path": "/", 
    "type": "GET"
  }, 
  {
    "fullUrl": "https://spaceapi.tech/api/planets", 
    "name": "All Planets", 
    "path": "/planets", 
    "queryParams": [
      {
        "name": "Sort By", 
        "optional": true
      }
    ], 
    "type": "GET"
  }, 
  {
    "fullUrl": "https://spaceapi.tech/api/<planet>", 
    "name": "Planet", 
    "path": "/<planet>", 
    "type": "GET"
  }, 
  {
    "fullUrl": "https://spaceapi.tech/api/locations", 
    "name": "All Locations", 
    "path": "/locations", 
    "queryParams": [
      {
        "name": "Sort By", 
        "optional": true
      }
    ], 
    "type": "GET"
  }, 
  {
    "fullUrl": "https://spaceapi.tech/api/location/<planet>", 
    "name": "Single Location", 
    "path": "/location/<planet>", 
    "type": "GET"
  }, 
  {
    "fullUrl": "https://spaceapi.tech/api/quote", 
    "name": "All Quotes", 
    "path": "/quote", 
    "queryParams": [
      {
        "name": "Sort By", 
        "optional": true
      }
    ], 
    "type": "GET"
  }
]
```
:::info Endpoints

There are four available resources:

- [Planets](/docs/planets): used to get all the planets.

```

https://spaceapi.tech/api/planets

```

- [planet-info](/docs/planet-info): used to get all the Planet Information.

```

https://spaceapi.com/api/<planet>

```

- [Location](/docs/location): used to get all the locations.

```

https://spaceapi.tech/api/location/<planet>

```

- [Quote](/docs/quote): used to get quotes from Space.

```

https://spaceapi.tech/api/quote

```

:::

### GraphQL

:::note
Coming Soon. Work in Progress.
:::