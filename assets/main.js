/// CONTAINER

const container = document.querySelector(".container")


/// SKETCHDIVS

var sketchArr = [];
for (i = 0; i < 4*4; i++){
    const sketchDivs = document.createElement("div")
    sketchDivs.className = "sketchDiv"
    sketchDivs.style.width = "125px"
    sketchDivs.style.height = "125px"
    sketchArr.push(sketchDivs)
    container.appendChild(sketchArr[i])
}




/// CREATE NEW GRID

function createGrid(){
    var userInput = window.prompt("Grid size you want? (Max 100)", "")

    if (userInput !== null && userInput <= 100){
        sketchArr = []
        var squaresPerSide = parseInt(userInput)

        if (!isNaN(squaresPerSide)){
            container.innerHTML = ""
            for (i = 0; i < squaresPerSide*squaresPerSide; i++){
                const sketchDivs = document.createElement("div")
                sketchDivs.className = "sketchDiv"
                var width = 500/squaresPerSide
                var height = 500/squaresPerSide
                
                widString = width + 'px'
                heigString = height +'px'
                sketchDivs.style.width = widString
                sketchDivs.style.height = heigString

                sketchArr.push(sketchDivs)
                container.appendChild(sketchArr[i])

                sketchDivs.addEventListener("mouseover", function turnColor(self){
                    self.target.classList.add("hovered")
                })
            }

            
        }

    } else {console.log("Above 100 is not allowed!")}
}


/// BUTTON

const button = document.querySelector(".gridButton")
button.addEventListener("click", createGrid)



/// HOVER EFFECT

const sketchDivs = document.querySelectorAll('.sketchDiv')

sketchDivs.forEach( (self)=>{
    self.addEventListener("mouseover", turnColor)
}
    
);


function turnColor(event){
    event.target.classList.add('hovered')
}

