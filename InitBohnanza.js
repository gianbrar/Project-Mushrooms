function nameGet() {
    let givenName = document.forms["getName"]["uName"].value;
    if (givenName == "") {
        alert("Please enter a name!");
        return false;
    }
    else {
        // Oh god here's the code where you connect to the server with the provided name
    }
}