# uua - Unbelievable UserAgent

## Usage

### Core

```js
import uua from '@uua/core';

// Pass in UserAgent string
// const ua = navigator.userAgent;
// const ua = ctx.request.headers['user-agent'];
uua(ua);
```

Result Structure:

```js
{
  "browser": {
    "title": "Safari",
    "version": "6.0",
    "code": "safari",
    "icon": "/device/safari.png"
  },
  // or undefined
  "device": {
    "title": "iPod",
    "version": "iOS 6.0.1",
    "code": "iphone",
    "icon": "/net/iphone.png"
  },
  "os": {
    "title": "Mac",
    "version": "",
    "code": "mac-3",
    "icon": "/os/mac-3.png"
  }
}
```

### Icons & CDN

You may fork `@uua/icons` (Source: <https://github.com/willin/uua-icons>) and make your own icon design.

By default, `uua` is using [jsdelivr](https://www.jsdelivr.com/package/npm/@uua/icons) CDN

### ip2c

```js
import ip2c from '@uua/ip2c';

// in async function
await ip2c();
```

Result Structure:

```js
{
  "code": "CN",
  "country": "China",
  "icon": "/flag/cn.png"
}
```

## Packages

- `uua` (Please use `@uua/core` instead)
- `@uua/core`: Core Lib
- `@uua/icons`: Image Materials (<https://github.com/willin/uua-icons>)

## LICENSE

Apache-2.0

![qr](https://user-images.githubusercontent.com/1890238/89126156-0f3eeb80-d516-11ea-9046-5a3a5d59b86b.png)
