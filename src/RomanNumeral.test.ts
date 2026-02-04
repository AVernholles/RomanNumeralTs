import { RomanNumeral } from './RomanNumeral'

describe('RomanNumeral', () => {
  it('answers', () => {
    // Arrange
    const romanNumeral = new RomanNumeral()

    // Act
    const answer = romanNumeral.askCesar()

    // Assert
    expect(answer).toBe("Cesar said TDD is fun")
  })
})
