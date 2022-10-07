// Buy a big lump of clay
// Use a pottery wheel to turn the clay into a bowl
// Put the bowl into a kiln for a bisque firing
// Apply glaze to bowl
// Put glazed bowl in kiln for final firing
// 💰💰💰



const buyClay = () => {
    let clay = {}
    return clay
}

const clay = buyClay()

const makePottery = (clay) => {
       clay.shape = "Bowl"
       return clay
}

const bisqueFire = (clay) => {
    clay.readyForGlazing = true
    return clay
}

const glazePottery = (clay) => {
    if (clay.readyForGlazing = true) {
        clay.glazing = "Midnight Blue"
        return clay
    }
    else {
        return `Make sure you bisque fire the pottery before you glaze it.`
    }
}

const finalFiring = (clay, temperature) => {
    if (temperature <= 1200) {
        clay.cracked = false
        return clay
    }
    else {
        clay.cracked = true
        return clay
    }

}

const firedPottery = finalFiring(clay, 1100)
const shapedPottery = makePottery(firedPottery)
const readyYet = bisqueFire(shapedPottery)
const glazedMaybe = glazePottery(readyYet)
console.log(glazedMaybe)
