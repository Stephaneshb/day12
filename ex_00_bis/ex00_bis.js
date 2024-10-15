async function check_route(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            console.log("all is good");
        } else {
            console.log("shit happens");
        }
    } catch (error) {
        console.log("shit happens", error);
    }
}
check_route('https://api.coindesk.com/v1/bpi/currentprice.json');
