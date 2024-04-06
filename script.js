var currentJewel = 0

document.querySelectorAll(".jewel").forEach((jewel) => {
    jewel.addEventListener("click", () => {
        document.querySelectorAll(".text-box").forEach((textBox) => {
            textBox.classList.remove("show-text")
        })
        if(currentJewel < 7) {
            document.querySelector(`#text-box-${currentJewel}`).classList.add("show-text")
            jewel.remove()
            currentJewel++
        }
        else {
            document.querySelector("text-box-final").classList.add("show-text")
        }
    })
})
