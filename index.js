const main = async () => { //Define an async function to call
    const url = "https://www.bonappetit.com/feed/recipes-rss-feed/rss";
    const response = await fetch(url); //Make a GET request for the provided url
    console.log(await response.text()); //Use the response text() function to parse the response body's contents and log them to the console
}
main(); //Call the function Save your file and navigate to your project folder in the command line and run node index