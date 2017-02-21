# angular-d3-word-cloud #

[![Build Status](https://travis-ci.org/weihanchen/angular-d3-word-cloud.svg?branch=master)](https://travis-ci.org/weihanchen/angular-d3-word-cloud)

## Run examples with server ##
```
$ bower install
$ npm install
$ npm run gulp
$ npm run test
$ npm run product //default server port is 8000
```

## Dependencies ##
* [angular.js](https://angularjs.org/)
* [d3.js](https://d3js.org/)
* [d3.layout.cloud.js](https://www.jasondavies.com/wordcloud/)

## Demo ##
Watch the wordcloud component in action on the [demo page](https://weihanchen.github.io/angular-d3-word-cloud/).

## How to use ##

### Install ###

##### bower #####

    $ bower install angular-d3-word-cloud

[angular.js](https://angularjs.org/), [d3.js](https://d3js.org/), [d3.layout.cloud.js](https://www.jasondavies.com/wordcloud/) would be install as dependencies auto. If it won't for some error, install it manually.

    $ bower install angular
    $ bower install d3
    $ bower install d3-cloud

Add dependencies to the <head> section of your index html:

```html
<meta charset="utf-8">  <!-- it's important for d3.js -->
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/d3/d3.min.js"></script>
<script src="bower_components/d3-cloud/build/d3.layout.cloud.js"></script>
<script src="bower_components/angular-d3-word-cloud/dist/angular-word-cloud.min.js"></script>
```
## Options ##
* `words=[array]` -> [{text: '',size: 0}]
* `height=[number]`
* `width=[number]`
* `on-click=[function]` -> word clicked callback

## Directive Usage ##
```html
<div id="wordsCloud">
   <word-cloud words="appCtrl.words" width="appCtrl.width" height="appCtrl.height" on-click="appCtrl.wordClicked">
   </word-cloud>
</div>
```

## Basic usage ##
Inject `angular-d3-word-cloud` into angular module, set up some options to our controller

```javascript
	(function(){
	angular.module('app',['angular-d3-word-cloud'])
		.controller('appController',['$window','$element',appController])
	function appController($window,$element){
		var self = this;
		self.height = $window.innerHeight * 0.5;
		self.width = $element.find('word-cloud')[0].offsetWidth;
		self.wordClicked = wordClicked;
		self.words = [
			{text: 'Angular',size: 25},
			{text: 'Angular2',size: 35}
		]

		function wordClicked(word){
			alert('text: ' + word.text + ',size: ' + word.size);
		}
	}
})()
```
## Advanced usage ##
### Define some content and split(/\s+/g) ###

```javascript
	var content = 'Angular Angular2 Angular3 Express Nodejs';
	originWords = self.content.split(/\s+/g);
    originWords = originWords.map(function(word) {
        return {
            text: word,
            count: Math.floor(Math.random() * maxWordCount)
        }
     }).sort(function(a, b) {
          return b.count - a.count;
     })
```

### Font size calculations ###

```javascript
	 var element = $element.find('#wordsCloud');
     var height = $window.innerHeight * 0.75;
     element.height(height);
     var width = element[0].offsetWidth;
     var maxCount = originWords[0].count;
     var minCount = originWords[originWords.length - 1].count;
     var maxWordSize = width * 0.15;
     var minWordSize = maxWordSize / 5;
     var spread = maxCount - minCount;
     if (spread <= 0) spread = 1;
     var step = (maxWordSize - minWordSize) / spread;
     self.words = originWords.map(function(word) {
         return {
             text: word.text,
             size: Math.round(maxWordSize - ((maxCount - word.count) * step))
         }
     })
     self.width = width;
     self.height = height;
```

## References ##
* [Word Cloud Layout](https://github.com/jasondavies/d3-cloud) by [Jason Davies](https://www.jasondavies.com/).