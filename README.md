<h1 align="center">Copy PGN</h1>

<div align="center">

Copies pgn from gamefactory.zone-chess Telegram Bot


</div>

## How to use

To copy the pgn, open game in chrome [Three Dots => open with/in] & execute the script below on browser address bar.

```javascript
javascript:(function () {var script =  document.createElement('script'); script.src="https://flash073.github.io/copy-pgn/pgnGrabberL.js"; document.body.appendChild(script); script.onload = function () { copyPgn() } })();
```

## Features

* Copies plain PGN to clipboard.
* Opens [lichess.org](/lichess.org) to quickly paste.

## Note
* 🔖 Bookmark the script with suitable name to open it quickly! 
* If you don't want to open lichess.org then use the following:
```javascript
javascript:(function () {var script =  document.createElement('script'); script.src="https://flash073.github.io/copy-pgn/pgnGrabberL.js"; document.body.appendChild(script); script.onload = function () { copyPgn(0) } })();
```
