# XML2JSON
![example workflow](https://github.com/igventurelli/xml2json/actions/workflows/deploy.yml/badge.svg)
> 👉🏻 https://apps.igventurelli.io/xml2json

A simple HTTP endpoint to convert XML payloads into JSON.

### Motivation
I have my personal website ([igventurelli.io](https://igventurelli.io)) where I would like to present my Medium blog posts, but RSS feed is XML, than I would need to make the conversion on my own.

I used to use a service like this one called [RSS2JSON](https://rss2json.com) but it started to fail due to CORS blocking, so I decided to implement my own.

### How to Use
To convert XML payloads into JSON, you just need to call https://xml2json.igventurelli.io?url={desired-url}

Make sure the `desired-url` returns a XML.

The parsing is made by [xml-js](https://github.com/nashwaan/xml-js) using the `compact` mode, what means that attributes and other XML related stuffs are added to the JSON payload with an underscore right in front of the original name (see xml-js documentation for more details).

### Technology
This app is made with:
- Typescript;
- AWS Lambda;
- AWS API Gateway;
- AWS CDK;

### Self Hosted
If for any reason you prefer to host this app on your own, you may clone this repository, create the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` secrets and you're good to go.

As it's a serverless application, the costs will be 0 until you reach thousands of millions of requests