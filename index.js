/** function to randomly generate new website colors */ 
function randomColors() {

    // generate random numbers for background
    let darkMin = 0
    let darkMax = 65
    let red = Math.floor(Math.random() * (darkMax - darkMin) + darkMin)
    let blue = Math.floor(Math.random() * (darkMax - darkMin) + darkMin)
    let green = Math.floor(Math.random() * (darkMax - darkMin) + darkMin)
    // change root style colors for dark background
    document.documentElement.style
        .setProperty('--background-color-dark', "rgb("+red+","+blue+","+green+")")


    // generate random numbers for text
    let textMin = 210
    let textMax = 255
    red = Math.floor(Math.random() * (textMax - textMin) + textMin)
    blue = Math.floor(Math.random() * (textMax - textMin) + textMin)
    green = Math.floor(Math.random() * (textMax - textMin) + textMin)
    // change root style colors for text
    document.documentElement.style
        .setProperty('--text-color-', "rgb("+red+","+blue+","+green+")")


    // generate random numbers for highlight
    let highlightMin = 140
    let highlightMax = 200
    red = Math.floor(Math.random() * (highlightMax - highlightMin) + highlightMin)
    blue = Math.floor(Math.random() * (highlightMax - highlightMin) + highlightMin)
    green = Math.floor(Math.random() * (highlightMax - highlightMin) + highlightMin)
    // change root style colors for highlight
    document.documentElement.style
        .setProperty('--highlight-color-primary', "rgb("+red+","+blue+","+green+")")
   
}