# ember-cli-share-this

Plugin for ember-cli that makes share-this component available.

## Installation

To install simply run:

```
npm install git+ssh://git@github.com:webnuts/ember-cli-share-this.git --save-dev
```

## Usage

Once installed, you can use the plugin right away inside your template files:

```
{{#share-this}}
  <span class='st_facebook_hcount' displayText='Facebook'></span>
  <span class='st_twitter_hcount' displayText='Tweet'></span>
{{/share-this}}
```

## Configuration

You need to define your ShareThis publisher key in your config/environment.js file:

```
ENV.shareThis = {
  publisherKey: '000000-0000-00000-0000000000'
};
```

You can find the ShareThis HTML on their website.