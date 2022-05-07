var quiz = document.getElementById("quiz")
var startQuiz = document.getElementById("startQuiz")
var domQuestion, progress, buttons

//paleidzia klausimyna

startQuiz.addEventListener("click", start)

function start() {
    quiz.innerHTML =
        `
       <!-- pavadinimas -->
            <h1>Vaisiai</h1>
            <!-- klausimai -->
            <p id="quastion">As noreciau jusu paklaust....?</p>
            <!-- atsakymai -->
            <div class="buttons">
                <button>Pirmas</button>
                <button>Antras</button>
                <button>Trecias</button>
                <button>Ketvirtas</button>
            </div>
            <hr>
            <footer>
                <p>Klausimas <span id="progress">1</span> is 5</p>
            </footer>

`
    loadSelectors()

}

function loadSelectors() {
    domQuestion = document.getElementById("quastion")
    progress = document.getElementById("progress")
    buttons = document.querySelectorAll("button")


    buttons.forEach((x, i) => {
        x.addEventListener("click", loadQuestions)

    })
    loadProgress()
    loadQuestions()

}

function loadProgress() {
    progress.innerText = newQuiz.showProgress()
}

function loadQuestions() {

    newQuiz.check(this.innerText)


    domQuestion.innerText = newQuiz.getQuestion().text
    buttons.forEach((x, i) => {

        x.innerText = newQuiz.getQuestion().choices[i]

    })


    loadProgress()


}