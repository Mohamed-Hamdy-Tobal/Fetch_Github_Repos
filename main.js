let theInput = document.querySelector(".get-repos input")
    theButton = document.querySelector(".get-button")
    reposData = document.querySelector(".show-data")

theButton.onclick = function () {
    getRepos()
}

function getRepos() {
    
    if (theInput.value == '') {
        reposData.innerHTML = `<span>Please Write Github Username.</span>`
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((respond) => respond.json())
        .then((repos) => {
            reposData.innerHTML = ''

            console.log(repos)

            // Loop On The Data
            repos.forEach(repo => {
                
                // Crate Main Div
                let mainDiv = document.createElement("div")

                // Crate Text Of The Div
                let textDiv = document.createTextNode(repo.name)

                // Append Text To Main Div
                mainDiv.appendChild(textDiv)


                // Create The URL Anchor
                let theURL = document.createElement("a")

                // Create Text Of Element
                let textURL = document.createTextNode("Visit")

                // Append Text URL To it
                theURL.appendChild(textURL)

                // Add Repo Anchor To 'href'
                theURL.href = `${repo.html_url}`

                // Add Target Blank
                theURL.setAttribute("target", "_blank")

                // Add URL To The Main Div
                mainDiv.appendChild(theURL)

                // Create Stars Count Span
                let starSpan = document.createElement("span")

                // Create Text Star
                let textStar = document.createTextNode(`Stars ${repo.stargazers_count}`)

                // Add Star Count To The Star Span
                starSpan.appendChild(textStar)

                // Add Star Span To Main Div
                mainDiv.appendChild(starSpan)

                // Add Class Name To Main Div
                mainDiv.className = "repo-box"

                // Append Div To Repo Data
                reposData.appendChild(mainDiv)


            });
            
        })
        .catch(() => console.log(Error("Error")))
    }
}

console.log("https://api.github.com/users/Mohamed-Hamdy-Tobal/repos")