async function getQuote() {
    const apiURL = "https://api.quotable.io/random";
    
    try {
        const response = await fetch(apiURL);

        // Check if the response is OK (status 200)
        if (!response.ok) {
            throw new Error("API response not OK");
        }

        const data = await response.json();
        document.getElementById("quote").innerText = data.content;
        document.getElementById("author").innerText = "- " + data.author;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").innerText = "Oops! Could not fetch a quote.";
        document.getElementById("author").innerText = "Please try again.";
    }
}

// Load a quote when the page loads
getQuote();
