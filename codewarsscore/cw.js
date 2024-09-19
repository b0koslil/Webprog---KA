async function handleSearch() {
    const inputFieldDocument = document.getElementById("searchKey");
    const inputFieldText = inputFieldDocument.value;

    if (inputFieldText === "") {
        alert("Írjon be valamit");
        return;
    }

    const user = await User.create(inputFieldText);
    loadedUsers.push(user);

    const usersDiv = document.getElementById("usersDiv");
    usersDiv.appendChild(user.generateDiv());
}


class User {
    id = "";
    name = "";
    overallScore = 0;
    languages = [];

    static async create(unameOrID) {
        const userData = await downloadUserData(unameOrID);

        return new User(userData);
    }

    constructor(userData) {
        this.id = userData.id;
        this.name = userData.username;

        const ranks = userData.ranks;

        this.overallScore = ranks.overall.score;

        this.languages = Object.entries(ranks.languages).map(([language, details]) => {
            return [language, details.score];
        });
    }

    generateDiv() {
        const userDiv = document.createElement("div");

        const nameElement = document.createElement("h1");
        nameElement.innerText = this.name + ":";
        userDiv.appendChild(nameElement);

        const overallScoreElement = document.createElement("p");
        overallScoreElement.innerText = "Összesített pontok: " + this.overallScore;
        userDiv.appendChild(overallScoreElement);

        const languageScoreElements = document.createElement("p");
        languageScoreElements.innerText = "Nyelvenkénti pontok: ";
        userDiv.appendChild(languageScoreElements);


        const languagesListElement = document.createElement("ul");
        for (const language of this.languages) {
            const languageElement = document.createElement("li");
            languageElement.innerText = language[0] + " - " + language[1];
            languagesListElement.appendChild(languageElement);
        }
        userDiv.appendChild(languagesListElement);


        return userDiv;
    }

}

async function downloadUserData(nameOrID) {
    const url = "https://www.codewars.com/api/v1/users/" + nameOrID;

    const response = await fetch(url);
    const data = await response.json();


    if (response.status != 200 && data.reason === "not found") {
        window.location.href = "404.html";
    }

    return data;
}
