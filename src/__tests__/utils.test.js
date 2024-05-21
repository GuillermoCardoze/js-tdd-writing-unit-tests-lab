import { isPalindrome } from "../utils"

describe("isPalindrome", ()=>{
    it("checks if a word is a Palindrome", ()=>{
        const word = "racecar"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)

    })
    it("checks if a word is not a palindrome", ()=>{
        const word = "car"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(false)
    })
})