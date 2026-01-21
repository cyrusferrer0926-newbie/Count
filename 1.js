document.getElementById("counter").innerText = 0

let Counter = document.getElementById("counter")


let count = 0

function adding(){
    count += 1
    Counter.textContent = count
}

function decrease(){
    count -= 1
    Counter.textContent = count
}

function savebtn(){
    let entriesmd = " " + count + " -"
    pha.textContent += entriesmd
    Counter.textContent = 0
    count = 0 
}




// let welcomeEl = document.getElementById("welcome-el")
// let name = "Cyrus"
// let greeting = "welcome Back! "

// let welcome = (greeting + name)
// welcome = welcome + "👀"
// welcomeEl.innerText = welcome

