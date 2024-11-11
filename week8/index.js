// There are synchronous and asynchronous functions. (Read below)
async function getRandomFact() { //was previously getData()
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    const data = await response.json();
    // json stands for js object notation. The API will be returning something in json.
    // So to access that, we need to use the json function.
    console.log(data.text)
    // By using data.text or data instead of response, we will get the actual response instead of the request itself.
    // "The sweat drops drawn in cartoon comic strips are called pleuts."
    // console.log("getData() finished")
}
async function getTodaysFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
    const data = await response.json();
    console.log(data.text, "\n")
}

function showData() {
    // insert lots of code here
    console.log("showData function finished!");
}

async function getMeme() {
    const resposne = await fetch("https://imgflip.com/api")
    const data = await response.json();
    console.log(data.text, "\n")
}

// getRandomFact();
getTodaysFact();
// showData();
// Because showData is syncronous, nodejs doesn't have to wait
// until getData finishes fetching the data from the website API.
// so showData() will actually run first.
// The whole point of async functions is to compensate for the
// delay of fetching API from a website and getting a response back.