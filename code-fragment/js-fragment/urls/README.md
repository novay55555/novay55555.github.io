# urls

## queryString

```js
function queryString(key, search) {
	search = search || window.location.search;
	search = search.indexOf('?') === 0 ? search.slice(1) : search;
	const array = search.split('&');
	for (let i = 0, l = array.length; i < l; i++) {
		const eqStr = array[i];
		const kv = eqStr.split('=');
		const k = kv[0];
		const v = kv[1];
		if (key === k) {
			return v;
		}
	}
}
```

## querySearch

require [queryString](/urls/#querystring)

```js
function querySearch(search, key) {
	if (key) {
		return queryString(key, search);
	}
	search = search.indexOf('?') === 0 ? search.slice(1) : search;
	const array = search.split('&');
	const result = {};
	for (let i = 0, l = array.length; i < l; i++) {
		const eqStr = array[i];
		const kv = eqStr.split('=');
		const k = kv[0];
		const v = kv[1];
		if (v !== '') {
			result[k] = v;
		}
	}
	return result;
}
```

## joinURL

```js
function joinURL(url, params) {
	if (!params)
		return url;
	const separator = url.indexOf('?') === -1 ? '?' : '&';
	const query = Object.entries(params)
		.map(([k, v]) => `${k}=${v}`)
		.join('&');
	return `${url}${separator}${query}`;
}
```

