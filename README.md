![ipiccy-image](https://user-images.githubusercontent.com/29029116/43997345-f10bc6a0-9df5-11e8-9212-c7e0134ce36f.png)

## Introduction

The client side code for **[f1jobs.co](https://f1jobs.co)**. It is mostly CSS, some JavaScript and an HTML to tie them all up. For details about the website, please refer to its [FAQs section](https://f1jobs.co/#faqs).

## Summary

This repository contains the code and resources to render the website. Job data is loaded from the `data/markup/` directory using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and is set as the content of team specific `<div>` tags by the script `js/jobs.js`. The data is updated within 30 minutes when there is a change in the job listings by the [updater](https://github.com/F1Jobs/updater). It is written in website specific markup to avoid using additional JS to assemble the tags on page load.

## Acknowledgements

* Boilerplate CSS from [Skeleton](http://getskeleton.com/).

* Cover and bottom images from [Wkimedia Commons](https://commons.wikimedia.org/wiki/File:F1-composite-NEW.png) and [Unsplash](https://unsplash.com/photos/ECju13NcBzg) respectively.
