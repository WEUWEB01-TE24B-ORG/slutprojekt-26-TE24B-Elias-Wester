let dark = 0;
function darkmode() {
    if (dark === 0) {
        document.documentElement.style.setProperty('--imperial-blue', '#001639');
        document.documentElement.style.setProperty('--french-blue', '#002b5c');
        document.documentElement.style.setProperty('--steel-azure', '#004280');
        document.documentElement.style.setProperty('--school-bus-yellow', '#8e6f00');
        document.documentElement.style.setProperty('--gold', '#807439');
        document.documentElement.style.setProperty('--light-yellow', '#a4985a');
        document.documentElement.style.setProperty('--white', '#c9c9c9');
        document.querySelector(".container").style.backgroundColor = "#004280";
        document.body.style.color = "#c9c9c9";
        if (document.querySelector(".frontpage")) {
            document.querySelector(".frontpage").style.backgroundImage = "url('../images/andriy-oliynyk-6zU54fXfIEQ-unsplash.webp')"
        }
        dark = 1;
    } else {
        document.documentElement.style.setProperty('--imperial-blue', '#00296bff');
        document.documentElement.style.setProperty('--french-blue', '#003f88ff');
        document.documentElement.style.setProperty('--steel-azure', '#00509dff');
        document.documentElement.style.setProperty('--school-bus-yellow', '#fdc500ff');
        document.documentElement.style.setProperty('--gold', '#ffd500ff');
        document.documentElement.style.setProperty('--light-yellow', '#ffea82');
        document.documentElement.style.setProperty('--white', '#fff');
        document.querySelector(".container").style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        if (document.querySelector(".frontpage")) {
            document.querySelector(".frontpage").style.backgroundImage = "url('../images/wahid-sadiq-hqDf171O0eU-unsplash.webp')"
        }
        dark = 0;
    };
};