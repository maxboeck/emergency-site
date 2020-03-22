# Emergency Site Template

A boilerplate for emergency information websites. (WIP)  
[Demo Site](https://emergency-site.dev)  

In case of emergency, many organizations need a quick way to publish critical information. Exisiting CMS websites are often unable to handle sudden spikes in traffic, and local infrastructure might be damaged, leaving people with poor mobile connections.

This project aims to enable people to quickly publish a simple website that can withstand large amounts of traffic and will work in extreme conditions. It is built on the principle of least power, using simple technologies for maximum resilience.

## Features

* Static Files
* Optimized for First Roundtrip (> 14KB)
* Basic Styling for Accessibility
* One Request, Inlined CSS
* Netlify CMS for collaborative Content Editing
* Offline Support with Service Worker

## Getting Started

The easiest way to get started is by forking this repo and deploying it to Netlify. You can do that by clicking this button:  

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/emergency-site) 

To customize the site, edit `src/data/meta.json` with your details, and replace the markdown files in `src/posts` with your content.

