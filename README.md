# Samwise.js

[![Build Status](https://travis-ci.org/vdel26/samwise.js.svg?branch=master)](https://travis-ci.org/vdel26/samwise.js)

[Samwise.js]() exists to make it really simple to show your users documentation links that are relevant to the section of your web app they are in.

Support documentation is often managed by a different set of people than those building a product. Embedding links to support documents within your code is a rather inflexible approach and they get easily out of date.

Samwise separates concerns and gives the documentation team full control of which links get displayed in every section of your web app.

## How to use it
1. Create a [JSON description]() of the documentation links you want to show
2. Host that JSON spec in a publicly accessible URL
3. Call Samwise within your page to bind it to a button

## Example
There is a [full example]() for a dummy app with two sections. The key parts are:
- the [URL]() from where Samwise will fetch the [JSON description]() 
- [binding]() Samwise to a section of the app

## JSON description format

```json
{
  "sections": [
    {
      "title": "Hosting",
      "section": "hosting",
      "articles": [
        { "name": "What are host management services?", "url": "https://www.airbnb.com/help/article/970?topic=197"},
      ]
    }
  ],
  "footer": [
    { "name": "Help center",  "url": "https://www.airbnb.com/help" },
    { "name": "Contact",      "url": "https://www.airbnb.com/help/contact_us" }
  ]
}
```

- **sections** – array of sections in your web app  
  - **title** – section title that will be displayed
  - **section** – section id (what you pass as a parameter when you call Samwise)
- **articles** – array of articles that will be shown for a given section
  - **name** – name of the article that will be displayed
  - **url** – link to the article
- **footer** – there are always two buttons in the footer, here is where you define them
