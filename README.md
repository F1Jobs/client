# f1jobs-client

**Important: This README is currently a WIP**

The client side code for [f1jobs.co](https://f1jobs.co). It is mostly CSS, some JavaScript and an HTML to tie them all up. The details about the website itself can be found on its [FAQs section](https://f1jobs.co/#faqs). Here, you will find the details about the internals.

## Introduction

This repository contains everything that is required to load the website on your browser. It gets updated by an [external script](https://github.com/F1Jobs/updater/blob/master/getjobs.py) every `x` minutes. The website makes use of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to request data from the `data/markup/` directory, which is valid markup, and set it as the content of the corresponding F1 teams' job sections. There are only two JavaScript files involved, `jobs.js` for making the aforementioned requests, and `stickynav.js`, which maintains the position of the navigation bar once scrolled past.

## Acknowledgements

Boilerplate CSS from [Skeleton](http://getskeleton.com/).

Cover and bottom images from [Wkimedia Commons](https://commons.wikimedia.org/wiki/File:F1-composite-NEW.png) and [Unsplash](https://unsplash.com/photos/ECju13NcBzg) respectively.

## Todo

* Update README.
