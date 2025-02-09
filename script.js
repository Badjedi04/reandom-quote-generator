async function getQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        document.getElementById("quote").innerText = data.content;
        document.getElementById("author").innerText = "- " + data.author;
    } catch (error) {
        document.getElementById("quote").innerText = "Oops! Could not fetch a quote.";
        document.getElementById("author").innerText = "";
    }
}

// Load a quote when the page loads
getQuote();
