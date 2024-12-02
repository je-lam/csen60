https://www.markdownguide.org/basic-syntax/
# Presentation 1: Etsy, Popmart, Twitter, Reddit

## Etsy
### Web Technologies used
* Basic CSS, Javascript, and HTML
  * 3 pages, so 3 html files
* Home page - product link
* Product Page
  * e.g. cart funcitonality
* Cart Checkout page
  * Header uses SVGs (e.g. serach icon)
  * JS functionality was a challenge; search function is not functional
  * Radial buttons for payment options and remove button are functional
* JS for checkout and product page
## Challenges
* Replicating the website CSS
* Unknown errors with GitHub (e.g. merge conflicts)
* JS required a lot of Googling due to unfamiliar syntax
## Solutions
* Lots and lots of searching
  * Fonts needed to be replicated
  * W3Schools, W3Docs, and Mozilla Docs allowed basic understanding of JS
  * Unknown Errors were solved by utilizing Stack Overflow, ChatGPT, and GitHub discussion pages
## Key learnings
* New knowledge of text-styling techniques
* Not being afraid of getting help from Google (same here hahaha)
* Lots of CSS and semantic HTML that wasn't taught in class
## Demo
* The heart button uses JS, but I think this is doable using CSS

# PopMart
* Decided to replicate Home page, product page, and [...]
## Web Techs used
* HTML/CSS
* GitHub
* Hono Server
* JS
## Notable functionalities
* Home page: card slider/carousel
* Product page: Carousel/hover and Add To Bag
* Cart page: Add to bag
## Splitting the work
Sophia:
* HTML and CSS for header and home page
* CSS for cart page
* Javascript for card slider
Hannah:

## Best practices
* Semantic HTML
* Alt tags for images
* Working in separate files to avoid merge conflicts
* The box method to replicate sections of the real webpage
## Challenges
* Specificity
  * Combining files led to CSS errors (e.g. header and footer)
  * Sophia used a bold header but Hannah wanted to use a bold footer
* Javascript
  * Had to focus on simplicity rather than complexity

## Key Learnings
Sophia
* How to use GitHub/Git
* Working in a team
* Learning nodejs
* What it takes to make a website
Hannah
* Learning how to use the terminal
* Setting up a Hono Server
* Creating a website/project with a deadline

Xanthus: Try to reduce typing.
# Netflix - Suri and Leo
* "Modules" refers to certain parts of the webpage
## Some challenges
* Suri accidentally created an entire new repo while trying to sync branches
## Key Learnings
* Used help from W3Schools, ChatGPT, YouTube, CSDN??
  * For context, CSDN is a Chinese blog that I've never heard of

# Twitter - Andrew and Jason
Following page and profile page
* Web Tech used: Standard stuff

How work was split:
* Andrew: Following page
* Jason: Home page

## OMG THEY USED COOKIES
* When refreshing the page, whatever posts they create are persistent which is really awesome.
* There was a SavePosts() and LoadPosts() function I observed.

### Jason's solutions
* InnerHtml in JS
* Xanthus: Generally avoid using InnerHtml because someone can maliciously hijack your JS function. Use textcontent instead.

### Andrew's solutions
* He fixed the JS by adding "defer" (he forgot to add it when linking the JS file)