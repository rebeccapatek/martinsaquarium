const fishCollection = [
    {
        name: "Goldilocks",
        species: "Goldfish",
        food: ["flakes"],
        size: "2in",
        location: "fish tanks",
        img: "/images/goldie-fish.jpg"
    },
    {
        name: "Bitey",
        species: "Piranha",
        food: ["humans"],
        size: "6in",
        img: "/images/piranha.jpg"
    },
    {
        name: "Mr. Dangles",
        species: "Angler",
        food: ["baby fish"],
        size: "18in",
        location: "Arkansas",
        img: "/images/angler.jpg"
    },
    {
        name: "Jaws",
        species: "shark",
        food: ["seals"],
        size: "254in",
        location: "South Africa",
        img: "/images/shark.jpg"
    },
    {
        name: "Snappy",
        species: "Red Snapper",
        food: ["sea-weed"],
        size: "26in",
        location: "Gulf of Mexico",
        img: "/images/red-snapper.jpg"
    },
    {
        name: "Purpur",
        species: "catfish",
        food: ["scum"],
        size: "36in",
        location: "Milwaukee",
        img: "/images/catfish.jpg"
    }
]

export const useFish = () => {
    return fishCollection
}

