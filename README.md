# Regular Expressions

## What is it?

A **regular expression** is a sequence of characters or tokens that define a
search pattern.

The search pattern is usually used for search and replace
operations or validation of strings.

```javascript
// Example use of RegExp.
const tabsToSpaces = str => str.replace(/\t/g, '  ')
```

## History

Created in 1951 and entered popular use from 1968 due to adoption by many Unix
applications / tools like: **QED**, **grep**, **vi**, **sed**, **AWK** etc.

## Flavors

There are many flavors of RegExp due to the heavy reimplementation of RegExp
engines in different languages. Most of the favors are "Perl compliant" though,
which is a syntax that dates as far back as 1987.

## State of JavaScript RegExp

ECMAScript 2018 and future proposals have fixed plenty of JavaScript's well-known
RegExp deficiencies:

- DOTALL flag.
- Look-behind assertion support.
- Named groups.
- Unicode property escapes.

## API

Methods in JavaScript that utilize RegExp:

- RegExp
  - exec
  - test
- String
  - match
  - matchAll
  - search
  - replace
  - split

## Common pitfalls

These are some common pitfalls when using RegExp with JavaScript:

- Exec is faster than match when using a RegExp without the global flag.
- No group matching when using the global flag.
- Split adds the matched groups to the result.
- Too narrow and greedy.
  - \\w is [a-zA-Z0-9] not [all possible characters].
  - Greedy by default. Lazy mode/token is confusing.

## Resources

Useful resources to learn RegExp:

- [Cheatsheet](https://gist.github.com/sarthology/b269c4ab81832c03f80eb48920f1abce)
- [RegEx101](http://www.regex101.com)
- [RegExCrossword](https://regexcrossword.com/)
- [RegExGolf](https://alf.nu/RegexGolf)
