# Cronitor RUM Next.js integration

> **Important:** As of version 0.2.0 of this package only Next.js 13 or later will be supported. For previous versions of Next.js please install version 0.1.0 of this package.

Official [Cronitor Real User Monitoring](https://cronitor.io/real-user-monitoring) integration for Next.js.

## Quickstart

### Install

Run the following command to install in your project:

```
npm install @cronitorio/cronitor-rum-nextjs
```

Or with yarn:

```
yarn add @cronitorio/cronitor-rum-nextjs
```

### Basic usage

You can now import, and use the Cronitor hook on your project.

```javascript
// ./pages/_app.js

import { useCronitor } from '@cronitorio/cronitor-rum-nextjs';

function CustomApp({ Component, pageProps }) {
  // Load Cronitor only once during the app lifecycle
  useCronitor('YOUR_CLIENT_KEY');

  return <Component {...pageProps} />;
}

export default CustomApp;
```

### Debug-mode

When developing in localhost, Cronitor does not send events to avoid using your quota.

You can enable debug mode to send events when testing things locally. It will also log messages to console.

```javascript
// ./pages/_app.js

import { useCronitor } from '@cronitorio/cronitor-rum-nextjs';

function CustomApp({ Component, pageProps }) {
  
  useCronitor('YOUR_SITE_ID', {
    debug: true,
    environment: "staging",
    includeURLQueryParams: ["tab", "pageNum"]
  });

  return <Component {...pageProps} />;
}

export default CustomApp;
```


## Changelog

### 0.2.1

- Update cronitor-rum-js lib.

### 0.2.0

- Support new Next.js 13 'app' directory and client-only components.

### 0.1.0

- Initial open source release.

## Security Disclosure

If you discover any issue regarding security, please disclose the information responsibly by sending us an email at [support@cronitor.io](mailto:support@cronitor.io). Do NOT create a Issue on the GitHub repo.

## Contributing

Please check for any existing issues before openning a new Issue. If you'd like to work on something, please open a new Issue describing what you'd like to do before submitting a Pull Request.

## License

See [LICENSE](https://github.com/cronitorio/cronitor-rum-nextjs/blob/master/LICENSE).
