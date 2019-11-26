import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        /*
            Invoke the FishComponent component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       const details = FishComponent(fish) 

    
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLRepresentations}
        </section>
    `
}

export default FishListComponent
