import Parser from "rss-parser";

const parser = new Parser();

const main = async () => { //Define an async function to call
    const url = "https://www.bonappetit.com/feed/recipes-rss-feed/rss";
    const {title, items} = await parser.parseURL(url); //Fetch and parse the RSS feed XML and destructure the response to access the title and items
    console.log(title); //Print firld's title
    const results = items.map(({title, link}) => ({title, link})); //Extract only the title and link of each item and assign that new array to results
    console.table(results); //Print the feed contents to the console in a structured table format
}
main(); //Call the function Save your file and navigate to your project folder in the command line and run node index