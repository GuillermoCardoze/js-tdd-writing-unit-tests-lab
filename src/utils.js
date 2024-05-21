// Your code here
export function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned word is the same forward and backward
    return cleanedWord === cleanedWord.split('').reverse().join('');
}
