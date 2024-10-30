const words = [
    'Apple', 'Ant', 'Axe', 'Arrow', 'Angel', 'Anchor', 'Almond', 'Apron', 'Airport', 'Art',
    'Banana', 'Ball', 'Bat', 'Bear', 'Boat', 'Book', 'Bottle', 'Bread', 'Butterfly', 'Bridge',
    'Cat', 'Car', 'Cake', 'Chair', 'Clock', 'Cloud', 'Cup', 'Coat', 'Camera', 'Crayon',
    'Dog', 'Duck', 'Drum', 'Door', 'Doll', 'Desk', 'Diamond', 'Dolphin', 'Dragon', 'Dress',
    'Elephant', 'Egg', 'Eagle', 'Ear', 'Engine', 'Envelope', 'Earth', 'Eye', 'Elbow', 'Eskimo',
    'Fish', 'Fan', 'Fork', 'Frog', 'Fox', 'Feather', 'Fire', 'Flower', 'Flag', 'Forest',
    'Goat', 'Giraffe', 'Guitar', 'Gold', 'Grass', 'Garden', 'Glove', 'Gate', 'Ghost', 'Gem',
    'Hat', 'Horse', 'House', 'Hammer', 'Hand', 'Helicopter', 'Heart', 'Hill', 'Honey', 'Hut',
    'Ice', 'Igloo', 'Iron', 'Insect', 'Island', 'Ink', 'Ivy', 'Instrument', 'Idea', 'Item',
    'Jacket', 'Jaguar', 'Jelly', 'Jeep', 'Jewel', 'Jar', 'Jet', 'Jigsaw', 'Juice', 'Jungle',
    'Kite', 'Key', 'Kangaroo', 'King', 'Kitchen', 'Knife', 'Kettle', 'Kiwi', 'Knee', 'Knot',
    'Lion', 'Lamp', 'Leaf', 'Lemon', 'Laptop', 'Ladder', 'Lake', 'Lace', 'Ladybug', 'Lava',
    'Monkey', 'Moon', 'Map', 'Mouse', 'Milk', 'Mountain', 'Magnet', 'Mirror', 'Mushroom', 'Mango',
    'Nest', 'Nail', 'Nose', 'Nut', 'Net', 'Notebook', 'Necklace', 'Needle', 'Night', 'Navy',
    'Owl', 'Orange', 'Oven', 'Octopus', 'Oyster', 'Olive', 'Orchid', 'Onion', 'Ox', 'Oil',
    'Pencil', 'Parrot', 'Piano', 'Pizza', 'Penguin', 'Pillow', 'Plant', 'Plate', 'Peach', 'Pear',
    'Queen', 'Quilt', 'Quail', 'Quartz', 'Quiver', 'Question', 'Quiet', 'Quick', 'Quench', 'Quote',
    'Rabbit', 'Rainbow', 'Ring', 'Rocket', 'Rose', 'River', 'Radio', 'Robot', 'Ruler', 'Road',
    'Sun', 'Star', 'Snake', 'Spoon', 'Socks', 'Sand', 'Shell', 'Ship', 'Seal', 'Sky',
    'Tiger', 'Tree', 'Train', 'Tomato', 'Turtle', 'Table', 'Truck', 'Towel', 'Tent', 'Teapot',
    'Umbrella', 'Unicorn', 'Uniform', 'Urn', 'Uncle', 'Ukulele', 'Unicycle', 'Universe', 'Utensil', 'Upgrade',
    'Vase', 'Violin', 'Vulture', 'Van', 'Violet', 'Village', 'Voice', 'Vehicle', 'Vegetable', 'Victory',
    'Whale', 'Wolf', 'Wagon', 'Wind', 'Water', 'Wheel', 'Window', 'Wood', 'Wrench', 'Wire',
    'Xylophone', 'X-ray', 'Xerox', 'Xmas', 'Xenon', 'Xylem', 'Xenophobia', 'Xenolith', 'Xenial', 'Xanthic',
    'Yak', 'Yarn', 'Yacht', 'Yam', 'Yellow', 'Yawn', 'Yogurt', 'Yoke', 'Year', 'Yard',
    'Zebra', 'Zoo', 'Zipper', 'Zucchini', 'Zone', 'Zap', 'Zephyr', 'Zinc', 'Zombie', 'Zigzag'
];


// theese are the example words on which  i have to make operation


let start_btn = document.getElementById("str_btn");
let word = document.getElementById("word");
let gussed = document.getElementById("gueesed");
let guss_btn = document.getElementById("gus_btn");
let stop_btn = document.getElementById("stp_btn");
let head = document.getElementById("h2");
let st = document.getElementById("st");
let crimson = document.getElementById("crimson");
let lightBlue = document.getElementById("lightblue");
let beige = document.getElementById("beige");
let green = document.getElementById("cream");




word.style.visibility = "hidden";
gussed.style.visibility = "hidden";
guss_btn.style.visibility = "hidden";
stop_btn.style.visibility = "hidden";
st.style.visibility = "hidden";
let hearts = 3;

start_btn.addEventListener("click", () => {
    head.textContent = "GAME STARTED";
    st.style.visibility = "visible";
    start_btn.style.visibility = "hidden";
    word.style.visibility = "visible";
    gussed.style.visibility = "visible";
    guss_btn.style.visibility = "visible";
    stop_btn.style.visibility = "visible";

    let new_word = words[Math.floor(Math.random() * words.length)];
    let splt_word = new_word.split('');
    let shuff_word = splt_word.sort(() => Math.random() - 0.5);
    let puzz_word = shuff_word.join('');
    word.textContent = puzz_word;
    guss_btn.addEventListener("click", () => {
        if (gussed.value == new_word) {
            alert("correct guess :)");
            let new_word = words[Math.floor(Math.random() * words.length)];
            let splt_word = new_word.split('');
            let shuff_word = splt_word.sort(() => Math.random() - 0.5);
            let puzz_word = shuff_word.join('');
            word.textContent = puzz_word;
        }
        else if (hearts == 0) {
            alert("Game Over :|");
            head.textContent = "Game Over";
            word.style.visibility = "hidden";
            gussed.style.visibility = "hidden";
            guss_btn.style.visibility = "hidden";
            stop_btn.style.visibility = "hidden";

        }

        else {
            alert("wrong guess :(");
            let new_word = words[Math.floor(Math.random() * words.length)];
            let splt_word = new_word.split('');
            let shuff_word = splt_word.sort(() => Math.random() - 0.5);
            let puzz_word = shuff_word.join('');
            word.textContent = puzz_word;
            hearts -= 1
        }
    })
    stop_btn.addEventListener("click", () => {

        head.textContent = "Game Has Ended";
        st.style.visibility = "hidden";
        word.style.visibility = "hidden";
        gussed.style.visibility = "hidden";
        guss_btn.style.visibility = "hidden";
        stop_btn.style.visibility = "hidden";



    })



})


crimson.addEventListener("click", () => {
    document.body.style.backgroundColor = "Crimson";
})
lightBlue.addEventListener("click", () => {
    document.body.style.backgroundColor = "LightBlue";
})
beige.addEventListener("click", () => {
    document.body.style.backgroundColor = "beige";
})
green.addEventListener("click", () => {
    document.body.style.backgroundColor = "darkseagreen";
})