const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END
 // Show Bart's details when the button is clicked
 document.querySelector("#button--goldilocks").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--goldilocks")
        theDialog.showModal()
    }
)
document.querySelector("#button--bitey").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bitey")
        theDialog.showModal()
    }
) 
document.querySelector("#button--mr").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--mr")
        theDialog.showModal()
    }
) 
document.querySelector("#button--jaws").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--jaws")
        theDialog.showModal()
    }
) 
document.querySelector("#button--snappy").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--snappy")
        theDialog.showModal()
    }
) 
document.querySelector("#button--purpur").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--purpur")
        theDialog.showModal()
    }
)
    // You will be writing code below this line

}
export default initializeDetailButtonEvents