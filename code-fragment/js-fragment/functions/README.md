# functions

## debounce

```js
function debounce(func, wait, immediate) {
	let timeout;
	return function(...args) {
		clearTimeout(timeout);
		if (immediate && !timeout)
			func.apply(this, args);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
}
```

## throttle

```js
function throttle(callback, wait, context = this) {
	let timeout = null;
	let callbackArgs = null;
	const later = () => {
		callback.apply(context, callbackArgs);
		timeout = null;
	};
	return function() {
		if (!timeout) {
			callbackArgs = arguments;
			timeout = setTimeout(later, wait);
		}
	};
}
```

## runBeforeFunction

```js
function runBeforeFunction(fn, beforeFns) {
	return function(...args) {
		beforeFns.forEach(beforeFn => beforeFn.apply(this, args));
		return fn.apply(this, args);
	};
}
```

## runAfterFunction

```js
function runAfterFunction(fn, afterFns) {
	return function(...args) {
		const r = fn.apply(this, args);
		afterFns.forEach(afterFn => afterFn.apply(this, args));
		return r;
	};
}
```