# doms

## addClass

```js
function addClass(className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}
```

## removeClass

```js
function removeClass(className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
```

## hasClass

```js
function hasClass(className) {
  if (el.classList)
    el.classList.contains(className);
  else
    new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}
```

## closest

```js
function closest(el, selector) {
  if (el.closest && typeof selector === 'string') {
    return el.closest(selector)
  }

  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break
    }
    el = el.parentElement
  }
  return el
}
```

## offset

```js
function offset(el) {
  const rect = el.getBoundingClientRect()

  return {
    top:
      rect.top + document.documentElement.scrollTop || document.body.scrollTop,
    left: rect.left + document.body.scrollTop || document.body.scrollLeft
  }
}
```

## findOnViewDoms

```js
function findOnViewDoms(domSelector, container = window) {
  let offsetX = 0
  let containerHeight = 0

  if(container === window) {
    containerHeight = window.innerHeight
  } else {
    const rect = container.getBoundingClientRect()

    containerHeight = rect.height
    offsetX = rect.top
  }

  const doms = [].slice.call(document.querySelectorAll(domSelector)).filter(function(el) {
    const rect = el.getBoundingClientRect()
    const top = rect.top
    const height = rect.height

    return top + height > offsetX && top < containerHeight + offsetX
  })

  return doms
}
```

## delegate

required [closest](/doms/#closest)

```js
function delegate (root, eventType, selector, fn) {
  root.addEventListener(eventType, function (e) {
    const el = closest(e.target, selector)

    if (el) {
      fn.call(el, e)
    }
  }, false)
}
```

## addEvent

compatible with `ie8`

```js
function addEvent(elem, evnt, func) {
  if (elem.addEventListener) elem.addEventListener(evnt, func, false)
  else if (elem.attachEvent) {
    elem.attachEvent('on' + evnt, func)
  } else {
    elem['on' + evnt] = func
  }
}
```

## removeEvent

compatible with `ie8`

```js
function removeEvent(elem, type, handler) {
  if (elem.removeEventListener) {
    elem.removeEventListener(type, handler, false)
  } else if (elem.detachEvent) {
    elem.detachEvent('on' + type, handler)
  } else {
    elem['on' + type] = null
  }
}
```

