const addMouseOverBorder = () => {
    const tips = document.querySelectorAll(".tip")

    for (const tip of tips) {
        tip.addEventListener(
            "mouseover",
            (theMouseOverEvent) => {
                tip.classList.add("asideBorder")
            }
        )


        tip.addEventListener("mouseout", theMouseOutEvent => {
            tip.classList.remove("asideBorder")
        })
        
    }
    
}

export default addMouseOverBorder