import { moreseCodeTranslator } from "./app.js"
import { describe,it,expect } from "@jest/globals"

describe("Translator function tests", () => {
    it("Test the function works with a single letter", () => {
        // Arrange
        let input = "a";
        // Act
        const result = moreseCodeTranslator("a");
        // Assert
        expect(result).toBe(".-")

    })
    it("Test the function works with a single word", () => {
        // Arrange
        let input = "hello";
        // Act
        const result = moreseCodeTranslator("hello");
        // Assert
        expect(result).toBe(".... . .-.. .-.. ---")

    })
    it("Test the function works with a single sentence", () => {
        // Arrange
        let input = "how are you";
        // Act
        const result = moreseCodeTranslator("how are you");
        // Assert
        expect(result).toBe(".... --- .-- / .- .-. . / -.-- --- ..-")

    })
    it("Test the function works with a number", () => {
        let input = "2";
        // Act
        const result = moreseCodeTranslator("2");
        // Assert
        expect(result).toBe("..---")

    })
})