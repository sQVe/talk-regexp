import {
  anythingGreedyLazy,
  creation,
  eitherToken,
  firstCharacterAndWord,
  firstDigits,
  globalFlag,
  groupToken,
  inverseToken,
  startsAndEndsWith,
  tabsToSpaces,
  trimEndingWhitespace,
  validEmail,
  validHex,
  zeroOrMoreToken,
} from './'

const toArray = <T, _>(arr: T[] | null) => (arr != null ? Array.from(arr) : arr)

describe('Talk RegExp', () => {
  describe('Creation', () => {
    const { constructor, literalNotation } = creation()

    it('should be instance of RegExp using a constructor', () => {
      expect(constructor).toBeInstanceOf(RegExp)
    })

    it('should be instance of RegExp using literal notation', () => {
      expect(literalNotation).toBeInstanceOf(RegExp)
    })
  })

  describe('First character and word', () => {
    const { character, word } = firstCharacterAndWord()

    it('should match first character', () => {
      expect(toArray(character)).toMatchObject(['f'])
    })

    it('should match first word', () => {
      expect(toArray(word)).toEqual(['foo'])
    })
  })

  describe('First digits', () => {
    const { digits } = firstDigits()

    it('should match first digits', () => {
      expect(toArray(digits)).toEqual(['123'])
    })
  })

  describe('Starts and ends with', () => {
    const { startsWith, endsWith } = startsAndEndsWith()

    it('should match starting word', () => {
      expect(toArray(startsWith)).toEqual(['foo'])
    })

    it('should match ending word', () => {
      expect(toArray(endsWith)).toEqual(['bar'])
    })
  })

  describe('Zero or more token', () => {
    const { wordWithOptionalDigits } = zeroOrMoreToken()

    it('should match word with optional digits', () => {
      expect(toArray(wordWithOptionalDigits)).toEqual(['foo', 'foo123'])
    })
  })

  describe('Global flag', () => {
    const { words } = globalFlag()

    it('should match all words', () => {
      expect(toArray(words)).toEqual(['foo', 'bar', 'baz'])
    })
  })

  describe('Inverse token', () => {
    const { inverse } = inverseToken()

    it('should match all except digits', () => {
      expect(toArray(inverse)).toEqual(['foo ', ' bar'])
    })
  })

  describe('Tabs to spaces', () => {
    const { indentedWithSpaces } = tabsToSpaces()

    it('should not include any tabs', () => {
      expect(indentedWithSpaces).toEqual(`
    foo
    bar`)
    })
  })

  describe('Trim ending whitespace', () => {
    const { withoutEndingWhitespace } = trimEndingWhitespace()

    it('should not include any trailing whitespace', () => {
      expect(withoutEndingWhitespace).toEqual(`
    foo
    bar`)
    })
  })

  describe('Group token', () => {
    const { argumentGroups } = groupToken()

    it('should match `foo` or `bar`', () => {
      expect(toArray(argumentGroups)).toEqual(['foo', 'bar', 'baz'])
    })
  })

  describe('Either token', () => {
    const { boundary, group, simple } = eitherToken()

    it('should match `foo` or `bar`', () => {
      expect(toArray(simple)).toEqual(['foo', 'bar', 'foo', 'bar'])
    })

    it('should match `fooar` or `fobar` with group', () => {
      expect(toArray(group)).toEqual(['fooar', 'fobar'])
    })

    it('should match whole words `foo`, `bar`', () => {
      expect(toArray(boundary)).toEqual(['foo', 'bar'])
    })
  })

  describe('Anything greedy and lazy', () => {
    const { greedy, lazy } = anythingGreedyLazy()

    it('should match whole subject', () => {
      expect(toArray(greedy)).toEqual(['foo bar | baz qux'])
    })

    it('should match subject excluding all after `|`', () => {
      expect(toArray(lazy)).toEqual(['foo bar |'])
    })
  })

  describe('Valid email', () => {
    const { email } = validEmail()

    it('should match valid email', () => {
      expect(toArray(email)).toEqual(['foo.bar@gmail.com'])
    })
  })

  describe('Valid hex', () => {
    const { hex } = validHex()

    it('should match valid hex values', () => {
      expect(toArray(hex)).toEqual(['CCC', '#bebebe', '0xe9e9e9'])
    })
  })
})
