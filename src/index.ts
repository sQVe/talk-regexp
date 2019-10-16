//  ┏━┓┏━╸┏━╸┏━╸╻ ╻┏━┓
//  ┣┳┛┣╸ ┃╺┓┣╸ ┏╋┛┣━┛
//  ╹┗╸┗━╸┗━┛┗━╸╹ ╹╹

export const creation = () => ({
  // Create a RegExp using a constructor:
  constructor: new RegExp(''),
  // Create a RegExp using literal notation:
  literalNotation: /./,
})

// ----------------------------------------------------------------------------

export const firstCharacterAndWord = () => {
  const subject = 'foo bar'

  const re = {
    // Create a RegExp that matches the first character of subject:
    character: /\w/,
    // Create a RegExp that matches the first word of subject:
    word: /\w+/,
  }

  return {
    character: subject.match(re.character),
    word: subject.match(re.word),
  }
}

// ----------------------------------------------------------------------------

export const firstDigits = () => {
  const subject = 'foo 123 bar'

  const re = {
    // Create a RegExp that matches the first digits of subject:
    digits: /\d+/,
  }

  return {
    digits: subject.match(re.digits),
  }
}

// ----------------------------------------------------------------------------

export const startsAndEndsWith = () => {
  const subject = 'foo bar'

  const re = {
    // Create a RegExp that matches starting word of subject:
    startsWith: /^\w+/,
    // Create a RegExp that matches ending word of subject:
    endsWith: /\w+$/,
  }

  return {
    startsWith: subject.match(re.startsWith),
    endsWith: subject.match(re.endsWith),
  }
}

// ----------------------------------------------------------------------------

export const zeroOrMoreToken = () => {
  const subject = 'foo foo123 123'

  const re = {
    // Create a RegExp that matches `foo` and `foo123` of subject:
    wordWithOptionalDigits: /foo\d*/g,
  }

  return {
    wordWithOptionalDigits: subject.match(re.wordWithOptionalDigits),
  }
}

// ----------------------------------------------------------------------------

export const globalFlag = () => {
  const subject = 'foo bar baz'

  const re = {
    // Create a RegExp that matches all words of subject with the global flag.
    words: /\w+/g,
  }

  return {
    words: subject.match(re.words),
  }
}

// ----------------------------------------------------------------------------

export const inverseToken = () => {
  const subject = 'foo 123 bar'

  const re = {
    // Create a RegExp that matches all except digits of subject:
    inverse: /\D+/g,
  }

  return {
    inverse: subject.match(re.inverse),
  }
}

// ----------------------------------------------------------------------------

export const tabsToSpaces = () => {
  const subject = `
    foo
    bar`.replace('  ', '\t')

  const re = {
    // Create a RegExp that matches tabs in subject:
    tabs: /\t+/g,
  }

  return {
    indentedWithSpaces: subject.replace(re.tabs, '  '),
  }
}

// ----------------------------------------------------------------------------

export const trimEndingWhitespace = () => {
  const subject = `
    foo
    bar  `

  const re = {
    // Create a RegExp that matches the trailing whitespace of lines in subject:
    endingWhitespace: /\s+$/gm,
  }

  return {
    withoutEndingWhitespace: subject.replace(re.endingWhitespace, ''),
  }
}

// ----------------------------------------------------------------------------

export const groupToken = () => {
  const subject = 'fn(foo, bar, baz)'

  const re = {
    // Create a RegExp that matches the above individual arguments in `fn` with
    // groups.
    argumentGroups: /fn\((\w+), (\w+), (\w+)\)/,
  }

  return {
    argumentGroups: (subject.match(re.argumentGroups) || []).slice(1),
  }
}

// ----------------------------------------------------------------------------

export const eitherToken = () => {
  const subject = 'foo bar fooar fobar'

  const re = {
    // Create a RegExp that matches either `foo` or `bar` of subject:
    simple: /foo|bar/g,
    // Create a RegExp that matches either `fooar` or `fobar` of subject with a
    // group:
    group: /fo(o|b)ar/g,
    // Create a RegExp  that matches only real words `foo` and `bar` in subject:
    boundary: /\b(foo|bar)\b/g,
  }

  return {
    simple: subject.match(re.simple),
    group: subject.match(re.group),
    boundary: subject.match(re.boundary),
  }
}

// ----------------------------------------------------------------------------

export const anythingGreedyLazy = () => {
  const subject = 'foo bar | baz qux'

  const re = {
    // Create a RegExp that matches anything one or more times in subject:
    greedy: /.+/,
    // Create a RegExp that matches anything one or more times except all after
    // `|` in subject:
    lazy: /.+?\|/,
  }

  return {
    greedy: subject.match(re.greedy),
    lazy: subject.match(re.lazy),
  }
}

// ----------------------------------------------------------------------------

export const validEmail = () => {
  const subject = 'foo.bar@gmail.com'

  const re = {
    // Create a RegExp that matches the above email in subject:
    validMail: /\S+@\S+\.\S+/,
  }

  return {
    email: subject.match(re.validMail),
  }
}

// ----------------------------------------------------------------------------

export const validHex = () => {
  const subject = 'CCC f8f8O8 #BGB #bebebe eb123 1#123123 0xe9e9e9'

  const re = {
    // Create a RegExp that matches the valid hex values in subject (disregard
    // whitespace in matches):
    hex: /(^| )(#|0x)?([a-f\d]{3}){1,2}($| )/gi,
  }

  return {
    hex: (subject.match(re.hex) || []).map(match => match.trim()),
  }
}
