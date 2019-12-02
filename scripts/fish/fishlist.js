import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fistlist") 
    // What does this do?Pull content from FishListComponent.js?
    const fishes = useFish()
    // the constant now equals the data in the array because this invokes it to return it
    // Add to the existing HTML in the content element
    // NEED TO ADD CONST SORTED FISH HERE 
    // Is this fishList referencing my javascript file or a constant that I established?
    
    contentElement.innerHTML += `
      <section class="fishList">
          ${sortedFish
            .map(currentfish => {
              return FishComponent(currentfish);
            })
            .join("")}
      </section>
  `;
};
export default FishListComponent;
