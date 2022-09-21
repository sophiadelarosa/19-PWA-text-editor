# 19 Progressive Web Applications (PWA): Text Editor

## Description
 This is a single page text editor application that runs in the browser and meets the PWA criteria. It features data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.

This text editor implements methods for getting and storing data to an IndexedDB database and uses a package called `idb`.

## Usage

Create notes or code snippets with or without an internet connection and reliably retrieve them for later use. Use the Heroku app link, and then click the install button for offline use. 

https://pwa-text-editor-19.herokuapp.com/


## Mock-Up

The following link demonstrates the application functionality:

https://www.dropbox.com/s/abnflpti6d2emjg/19-PWA-text-editor.mp4?dl=0


### Satisfies all of the following criteria:

  * Uses IndexedDB to create an object store and includes both GET and PUT methods

  * The application works without an internet connection

  * Automatically saves content inside the text editor when the DOM window is unfocused

  * Bundled with webpack

  * Create a service worker with workbox that Caches static assets

  * The application uses babel in order to use async / await

  * Application has a generated `manifest.json` using the `WebpackPwaManifest` plug-in

  * Can be installed as a Progressive Web Application

## Questions
For details, please visit my [github](https://github.com/sophiadelarosa).
For questions, please [email](mailto:${sophial.delarosa@gmail.com}) me.

