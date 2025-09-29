// Select elements
const textarea = document.querySelector("textarea");
const vowelCountSpan = document.getElementById("vowel-count");
const checkBtn = document.getElementById("check-btn");

// Function to count vowels
function countVowels(text) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Add event listener to button
checkBtn.addEventListener("click", () => {
    const text = textarea.value;
    const vowelCount = countVowels(text);
    vowelCountSpan.textContent = vowelCount;
});
