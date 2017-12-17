# Opature coding test

![Alt Text](https://media.giphy.com/media/3ohs7JdGorZU5XzP32/giphy.gif)

## About
This took around 12 hours in total over two days, from having never used react-native or redux before through to completion. I have currently only run it using the iphone 6 emulator in Xtools, not android.

I tried to stick to the design of the mockup as best as possible, however the mockup seems to be overlaid over another image/view so opted for a flat dark blue background instead.

The project has the following dependencies:
- react native
- redux
- react-redux
- react-native-elements

The project is written to conform to the standard-react coding style which accounts for most of the devDependencies in `package.json`

The product images were sourced from a google image search, using the **Labeled for reuse** search option. The service logo images were sourced from http://www.logoinstant.com/

All of the product and service data/images is currently hardcoded into the `ProductSelector` and `ServicesSelector` components. If they were to be retrieved over HTTP i'd have had these components call an action (e.g. `FETCH_PRODUCTS`) to fetch the apropriate resource which then called another action depending on wether the http request was a success or failure (`REVIEVE_PRODUCTS`, 'ERROR_FETCH_PRODUCTS', or something similar). The components could then listen for this action to either display the products or notify the user of an error of somesort.

## Run

#### Install Dependencies
```text
npm install
```

#### Run in ios emulator
After following the **Building Projects With Native Code** section for macOS/iOS here: https://facebook.github.io/react-native/docs/getting-started.html the following can be used to run the project in the xtools iOS emulator:

```text
react-native run-ios
```

