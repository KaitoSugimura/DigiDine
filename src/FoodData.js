export default [
  [
    "Featured",
    [
      {
        title: "Everything Burger",
        price: 6.99,
        calories: 1030,
        image: "Burgers/everything.png",
        detail:
          "Made with tender 100% Canadian-raised grilled seasoned chicken and 100% Canadian beef patties. Layered with three slices of white processed cheese, topped slivered onions, pickles, tomato, lettuce and delicious Everything sauce, served on a toasted sesame seed bun.",
        customizations: [
          [
            { title: "Beef patty", price: 1, required: true },
            { title: "Toasted bun", price: 0, required: true },
            { title: "White processed cheese", price: 0.2 },
            { title: "Cheddar cheese", price: 0.2 },
            { title: "Onions", price: 0 },
            { title: "Tomato", price: 0 },
            { title: "Pickles", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Crispy bacon", price: 0.5 },
            { title: "Grilled chicken", price: 1 },
            { title: "Everything sauce", price: 0 },
          ],
          [
            { title: "Mustard", price: 0 },
            { title: "Crispy onion", price: 0.25 },
          ],
        ],
      },
      {
        title: "Raw Chicken",
        price: 50.0,
        calories: 200,
        image: "Chicken/rawChicken.jpg",
        detail:
          "Simply just raw chicken. No seasoning, no cooking, just raw chicken.",
        customizations: [
          [
            { title: "Salt", price: 10 },
            { title: "Pepper", price: 10 },
          ],
        ],
      },
      {
        title: "Classic Jorimee Pasta",
        price: 7.99,
        calories: 760,
        image: "Pasta/jolibee-pasta.jpg",
        detail:
          "Spaghetti noodles in a sweet Filipino style spaghetti sauce with ground beef, hot dog slices, and shredded cheese.",
        customizations: [
          // Whats on it
          // Prices here only take effect when user presses extra
          [
            { title: "Spaghetti sauce", price: 0 },
            { title: "Spaghetti noodles", price: 1 },
            { title: "Cheese", price: 0.25 },
            { title: "Hot dog slices", price: 0.5 },
            { title: "Ground beef", price: 0.5 },
          ],
          // Add-ons
          // Prices here effect ALL amounts
          // Each price stacks, for example if the price is 0.1, then
          // its 0.1 for lite, 0.2 for reg, and 0.3 for extra
          [
            { title: "Meatballs", price: 0.5 },
            { title: "Bacon", price: 0.25 },
            { title: "Parmesan cheese", price: 0.1 },
            { title: "Chilli flakes", price: 0.1 },
          ],
        ],
      },
      {
        title: "Bendy's Tacos Caesar Salad",
        price: 7.99,
        calories: 520,
        image: "Salads/wendys-taco-salad.png",
        detail:
          "Our classic Bendy's Caesar Salad with a mix of taco seasoned beef, shredded cheddar cheese, and tortilla strips.",
        customizations: [
          [
            { title: "Romaine lettuce", price: 0 },
            { title: "Tortilla strips", price: 0.2 },
            { title: "Taco seasoned beef", price: 0 },
            { title: "Shredded cheddar cheese", price: 0.25 },
            { title: "Caesar dressing", price: 0 },
          ],
          [
            { title: "Bacon bits", price: 0.25 },
            { title: "Croutons", price: 0.25 },
          ],
        ],
      },
      {
        title: "Big Arch",
        price: 5.99,
        calories: 1030,
        image: "Burgers/big-arch.jfif",
        detail:
          "Two quarter pound* 100% Canadian beef patties, layered with three slices of white processed cheese, and topped with crispy onions, slivered onions, pickles, lettuce and delicious Big Arch sauce, served on a toasted sesame and poppy seed bun.",
        customizations: [
          [
            { title: "White processed cheese", price: 0.2 },
            { title: "Crispy onions", price: 0.2 },
            { title: "Slivered onions", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Big Arch sauce", price: 0 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "Bacon", price: 0.5 },
            { title: "Tomato", price: 0.25 },
            { title: "American cheese", price: 0.2 },
          ],
        ],
      },
      {
        title: "Grilled Chicken",
        price: 3.99,
        calories: 390,
        image: "Chicken/Grilled-Chicken-Sandwich.jpg",
        detail:
          "Made with tender and juicy 100% Canadian-raised grilled seasoned chicken. Topped with shredded lettuce, creamy mayo-style sauce and served on a soft potato bun for that WcD’s flavour you crave.",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Mayo-style sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
    ],
  ],
  [
    "Burgers",
    [
      {
        title: "Everything Burger",
        price: 6.99,
        calories: 1030,
        image: "Burgers/everything.png",
        detail:
          "Made with tender 100% Canadian-raised grilled seasoned chicken and 100% Canadian beef patties. Layered with three slices of white processed cheese, topped slivered onions, pickles, tomato, lettuce and delicious Everything sauce, served on a toasted sesame seed bun.",
        customizations: [
          [
            { title: "Beef patty", price: 1, required: true },
            { title: "Toasted bun", price: 0, required: true },
            { title: "White processed cheese", price: 0.2 },
            { title: "Cheddar cheese", price: 0.2 },
            { title: "Onions", price: 0 },
            { title: "Tomato", price: 0 },
            { title: "Pickles", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Crispy bacon", price: 0.5 },
            { title: "Grilled chicken", price: 1 },
            { title: "Everything sauce", price: 0 },
          ],
          [
            { title: "Mustard", price: 0 },
            { title: "Crispy onion", price: 0.25 },
          ],
        ],
      },
      {
        title: "Big Arch",
        price: 5.99,
        calories: 1030,
        image: "Burgers/big-arch.jfif",
        detail:
          "Two quarter pound* 100% Canadian beef patties, layered with three slices of white processed cheese, and topped with crispy onions, slivered onions, pickles, lettuce and delicious Big Arch sauce, served on a toasted sesame and poppy seed bun.",
        customizations: [
          [
            { title: "White processed cheese", price: 0.2 },
            { title: "Crispy onions", price: 0.2 },
            { title: "Slivered onions", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Big Arch sauce", price: 0 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "Bacon", price: 0.5 },
            { title: "Tomato", price: 0.25 },
            { title: "American cheese", price: 0.2 },
          ],
        ],
      },
      {
        title: "Cheeseburger Deluxe",
        price: 5.99,
        calories: 340,
        image: "Burgers/cheeseburger-deluxe.jfif",
        detail:
          "Your favourite cheeseburger is now made deluxe! A slice of processed cheddar cheese on a juicy, 100% Canadian beef patty with pickles and onions, ketchup, mustard, mayo style sauce, tomato, and shredded lettuce on a toasted bun.",
        customizations: [
          [
            { title: "American cheese", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Onions", price: 0.2 },
            { title: "Ketchup", price: 0 },
            { title: "Mustard", price: 0 },
            { title: "Mayo style sauce", price: 0 },
            { title: "Tomato", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "Bacon", price: 0.5 },
            { title: "White processed cheese", price: 0.2 },
          ],
        ],
      },
      {
        title: "Quarter Pounder with Cheese",
        price: 5.99,
        calories: 520,
        image: "Burgers/quarter-pounder-with-cheese.jfif",
        detail:
          "A quarter pound* of 100% Canadian beef and two slices of melty processed cheese on a toasted sesame seed bun.",
        customizations: [
          [
            { title: "American cheese", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Onions", price: 0.2 },
            { title: "Ketchup", price: 0 },
            { title: "Mustard", price: 0 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "White processed cheese", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
      {
        title: "Double Quarter Pounder",
        price: 7.99,
        calories: 740,
        image: "Burgers/double-quarter-pounder-with-cheese.jfif",
        detail:
          "Two quarter pound* 100% Canadian beef patties. Layered with two slices of melty cheese, slivered onions and pickles on sesame seed bun.",
        customizations: [
          [
            { title: "American cheese", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Onions", price: 0.2 },
            { title: "Ketchup", price: 0 },
            { title: "Mustard", price: 0 },
            { title: "Toasted bun", price: 0 },
          ],
          // Add-ons
          [
            { title: "White processed cheese", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
      {
        title: "WcDouble",
        price: 2.19,
        calories: 390,
        image: "Burgers/mcdouble.jfif",
        detail:
          "A slice of melted processed cheese between two 100% Canadian beef patties, topped with pickles, onions, ketchup and mustard on a toasted bun.",
        customizations: [
          [
            { title: "American cheese", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Onions", price: 0.2 },
            { title: "Ketchup", price: 0 },
            { title: "Mustard", price: 0 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "White processed cheese", price: 0.2 },
          ],
        ],
      },
      {
        title: "Cheeseburger",
        price: 1.39,
        calories: 300,
        image: "Burgers/cheeseburger.jfif",
        detail:
          "A slice of melted processed cheese on a juicy, 100% Canadian beef patty with tangy pickles and onions, ketchup and mustard on a freshly-toasted bun.",
        customizations: [
          [
            { title: "American cheese", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Onions", price: 0.2 },
            { title: "Ketchup", price: 0 },
            { title: "Mustard", price: 0 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "White processed cheese", price: 0.2 },
          ],
        ],
      },
      {
        title: "Hamburger",
        price: 1.19,
        calories: 250,
        image: "Burgers/hamburger.jfif",
        detail:
          "The comforting taste of the juicy and delicious 100% Canadian beef burger, topped with tangy pickles, ketchup, mustard and the sweet bite of onion, all on a freshly toasted bun. Just like you remember.",
        customizations: [
          [
            { title: "Pickles", price: 0.2 },
            { title: "Onions", price: 0.2 },
            { title: "Ketchup", price: 0 },
            { title: "Mustard", price: 0 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "White processed cheese", price: 0.2 },
            { title: "American cheese", price: 0.2 },
          ],
        ],
      },
      {
        title: "Double Cheeseburger",
        price: 2.89,
        calories: 440,
        image: "Burgers/double-cheeseburger.jfif",
        detail:
          "We make it like we always have: two slices of processed cheese with two 100% Canadian beef patties, pickles, onions, ketchup and mustard on a freshly toasted bun.",
        customizations: [
          [
            { title: "American cheese", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Onions", price: 0.2 },
            { title: "Ketchup", price: 0 },
            { title: "Mustard", price: 0 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "White processed cheese", price: 0.2 },
          ],
        ],
      },
      {
        title: "Big Wac",
        price: 5.99,
        calories: 540,
        image: "Burgers/big-mac.jfif",
        detail:
          "Nothing compares to two 100% Canadian beef patties, special sauce, crisp lettuce, processed cheese, pickles and onions on a toasted sesame seed bun.",
        customizations: [
          [
            { title: "American cheese", price: 0.2 },
            { title: "Pickles", price: 0.2 },
            { title: "Onions", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Toasted bun", price: 0 },
          ],
          [
            { title: "White processed cheese", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
    ],
  ],
  [
    "Chicken",
    [
      {
        title: "Raw Chicken",
        price: 50.0,
        calories: 200,
        image: "Chicken/rawChicken.jpg",
        detail: "Just raw chicken. No seasoning, no cooking, just raw chicken.",
        customizations: [
          [
            { title: "Salt", price: 10 },
            { title: "Pepper", price: 10 },
          ],
        ],
      },
      {
        title: "Grilled Chicken",
        price: 3.99,
        calories: 390,
        image: "Chicken/Grilled-Chicken-Sandwich.jpg",
        detail:
          "Made with tender and juicy 100% Canadian-raised grilled seasoned chicken. Topped with shredded lettuce, creamy mayo-style sauce and served on a soft potato bun for that WcD’s flavour you crave.",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Mayo-style sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
      {
        title: "Junior Chicken",
        price: 2.99,
        calories: 200,
        image: "Chicken/Junior-Chicken.jpg",
        detail:
          "You don’t need to compromise with the great taste of a Junior Chicken sandwich, made with chicken raised on Canadian farms, at a price you can always feel good about.",
        customizations: [
          [{ title: "Lettuce", price: 0.2 }],
          [
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
          ],
        ],
      },
      {
        title: "WcChicken",
        price: 2.99,
        calories: 220,
        image: "Chicken/McChicken.jpg",
        detail:
          "Breaded seasoned chicken and crisp lettuce, topped with our Mayo-Style Sauce. Some ingredients are just meant to be together.",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Mayo-style sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
      {
        title: "WcCrispy",
        price: 2.99,
        calories: 220,
        image: "Chicken/McCrispy.jpg",
        detail:
          "The WcCrispy is a crispy chicken sandwich made with tender and juicy 100% Canadian-raised seasoned chicken. It’s topped with shredded lettuce and creamy mayo-style sauce and served on a soft potato bun for a taste that’s so WcDonald’s.",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Mayo-style sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
      {
        title: "Sweet Chili Junior Chicken",
        price: 3.99,
        calories: 350,
        image: "Chicken/Sweet-Chili-Junior-Chicken.jpg",
        detail:
          "Your tastebuds will be singing a whole new tune with a remixed Sweet Chili Junior Chicken made with Canadian-raised crispy seasoned chicken, topped with crunchy shredded lettuce, tangy sweet chili sauce and mayo-style sauce, all on a toasty bun.",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Sweet chili sauce", price: 0 },
            { title: "Mayo-style sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Ketchup", price: 0 },
            { title: "Mustard", price: 0 },
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
      {
        title: "Firecracker WcCrispy 🌶️",
        price: 6.99,
        calories: 350,
        image: "Chicken/Firecracker-McCrispy.jpg",
        detail:
          "Crispy chicken sandwich topped with a creamy sweet and spicy sauce, hickory-smoked bacon and crispy jalapenos. Made with tender and juicy 100% Canadian-raised seasoned chicken and served on a soft potato bun, it has a taste that’s unmistakably McDonald’s.",
        customizations: [
          [
            { title: "Crispy jalapenos", price: 0.2 },
            { title: "Lettuce", price: 0.2 },
            { title: "Sweet and spicy sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Smoked Bacon", price: 0.5 },
            { title: "Tomato", price: 0.2 },
            { title: "Hot sauce", price: 0.2 },
          ],
        ],
      },
      {
        title: "WcCrispy 🌶️",
        price: 2.99,
        calories: 250,
        image: "Chicken/Spicy-McCrispy.jpg",
        detail:
          "The Spicy WcCrispy is a crispy chicken sandwich topped with our signature habanero sauce. Made with tender and juicy 100% Canadian-raised seasoned chicken and served on a soft potato bun, it has a taste that’s unmistakably WcDonald’s.",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Habanero sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
      {
        title: "Bacon Grilled Chicken 🌶️",
        price: 4.99,
        calories: 400,
        image: "Chicken/Spicy-Bacon-Deluxe-Grilled-Chicken-Sandwich.jpg",
        detail:
          "Made with 100% Canadian-raised grilled seasoned chicken on a soft potato bun, topped with shredded lettuce, hickory-smoked bacon, tomato and our spicy Habanero sauce, this sandwich kicks juicy and tender up to the next level.",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Habanero sauce", price: 0 },
            { title: "Smoked Bacon", price: 0.5 },
            { title: "Toasted Potato bun", price: 0 },
          ],
        ],
      },
      {
        title: "Grilled Chicken 🌶️",
        price: 3.99,
        calories: 400,
        image: "Chicken/Spicy-Grilled-Chicken-Sandwich.jpg",
        detail:
          "Made with tender and juicy 100% Canadian-raised grilled seasoned chicken, and topped with shredded lettuce and our signature Habanero sauce, it’s a spicy-lovers dream served on a soft potato bun. ",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Habanero sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
          ],
        ],
      },
      {
        title: "Habanero WcChicken 🌶️",
        price: 3.99,
        calories: 400,
        image: "Chicken/Spicy-Habanero-McChicken.jpg",
        detail:
          "Our classic WcChicken packed with a punch! This spicy Habanero WcChicken is topped with our creamy Habanero sauce. Perfectly breaded seasoned chicken, crisp shredded lettuce, all on a freshly toasted sesame bun. Some ingredients are just meant to be together.",
        customizations: [
          [
            { title: "Lettuce", price: 0.2 },
            { title: "Habanero sauce", price: 0 },
            { title: "Toasted Potato bun", price: 0 },
          ],
          [
            { title: "Mayo", price: 0.2 },
            { title: "Tomato", price: 0.2 },
            { title: "Bacon", price: 0.5 },
          ],
        ],
      },
    ],
  ],
  [
    "Pasta",
    [
      {
        title: "West Side Wario's Carbonara",
        price: 9.99,
        calories: 800,
        image: "Pasta/Marios-pasta.jpg",
        detail:
          "Spaghetti noodles in a creamy Alfredo sauce with bacon, roasted garlic, Italian seasoning and Parmesan cheese.",
        customizations: [
          // Whats on it
          [
            { title: "Alfredo sauce", price: 0 },
            { title: "Bacon", price: 0.5 },
            { title: "Roasted garlic", price: 0.25 },
            { title: "Italian seasoning", price: 0.1 },
            { title: "Parmesan cheese", price: 0.25 },
          ],
          // Add-ons
          [
            { title: "Meatballs", price: 0.5 },
            { title: "Chilli flakes", price: 0.1 },
          ],
        ],
      },
      {
        title: "Classic Jorimee Pasta",
        price: 7.99,
        calories: 760,
        image: "Pasta/jolibee-pasta.jpg",
        detail:
          "Spaghetti noodles in a sweet Filipino style spaghetti sauce with ground beef, hot dog slices, and shredded cheese.",
        customizations: [
          [
            { title: "Spaghetti sauce", price: 0 },
            { title: "Spaghetti noodles", price: 1 },
            { title: "Cheese", price: 0.25 },
            { title: "Hot dog slices", price: 0.5 },
            { title: "Ground beef", price: 0.5 },
          ],
          [
            { title: "Meatballs", price: 0.5 },
            { title: "Bacon", price: 0.25 },
            { title: "Parmesan cheese", price: 0.1 },
            { title: "Chilli flakes", price: 0.1 },
          ],
        ],
      },
      {
        title: "WcDonald's Fetuccine Alfredo",
        price: 8.99,
        calories: 700,
        image: "Pasta/mcdonalds-pasta.webp",
        detail:
          "Fettuccine noodles in a creamy Alfredo sauce with grilled chicken, broccoli, and Parmesan cheese.",
        customizations: [
          [
            { title: "Alfredo sauce", price: 0 },
            { title: "Grilled chicken", price: 1 },
            { title: "Broccoli", price: 0.5 },
            { title: "Parmesan cheese", price: 0.25 },
          ],
          [
            { title: "Bacon", price: 0.5 },
            { title: "Chilli flakes", price: 0.1 },
          ],
        ],
      },
      {
        title: "4 Cheese Lasagna",
        price: 9.49,
        calories: 850,
        image: "Pasta/4-cheese-lasagna.jpg",
        detail:
          "Layers of lasagna noodles with a rich tomato sauce, ricotta, mozzarella, Parmesan, and Romano cheeses.",
        customizations: [
          [
            { title: "Tomato sauce", price: 0 },
            { title: "Ricotta cheese", price: 0.5 },
            { title: "Mozzarella cheese", price: 0.5 },
            { title: "Parmesan cheese", price: 0.25 },
            { title: "Romano cheese", price: 0.25 },
          ],
          [
            { title: "Meatballs", price: 0.5 },
            { title: "Bacon", price: 0.25 },
            { title: "Chilli flakes", price: 0.1 },
          ],
        ],
      },
      {
        title: "Cacio e Pepe",
        price: 8.99,
        calories: 600,
        image: "Pasta/Cacio-e-Pepe.jpg",
        detail:
          "Spaghetti noodles with a simple yet delicious sauce made from Pecorino Romano cheese and black pepper.",
        customizations: [
          [
            { title: "Pecorino Romano cheese", price: 0.5 },
            { title: "Black pepper", price: 0.1 },
          ],
          [
            { title: "Parmesan cheese", price: 0.25 },
            { title: "Chilli flakes", price: 0.1 },
          ],
        ],
      },
      {
        title: "Pasta Alla Gricia",
        price: 8.49,
        calories: 750,
        image: "Pasta/pasta-alla-gricia.jpg",
        detail:
          "Pasta Alla Gracia with a rich and creamy sauce made from Pecorino Romano cheese, black pepper, and crispy pancetta.",
        customizations: [
          [
            { title: "Pecorino Romano cheese", price: 0.5 },
            { title: "Black pepper", price: 0.1 },
            { title: "Crispy pancetta", price: 0.5 },
          ],
          [
            { title: "Parmesan cheese", price: 0.25 },
            { title: "Chilli flakes", price: 0.1 },
          ],
        ],
      },
    ],
  ],
  [
    "Salads",
    [
      {
        title: "CFK Macaroni Salad",
        price: 3.99,
        calories: 100,
        image: "Salads/kfc-salad.png",
        detail:
          "Macaroni noodles in a creamy dressing with shredded carrots, celery, and onions.",
        customizations: [
          [
            { title: "Macaroni noodles", price: 0.25 },
            { title: "Creamy dressing", price: 0 },
            { title: "Shredded carrots", price: 0.25 },
            { title: "Celery", price: 0.25 },
            { title: "Onions", price: 0.25 },
          ],
          [
            { title: "Bacon bits", price: 0.25 },
            { title: "Peas", price: 0.25 },
            { title: "Pepper", price: 0 },
            { title: "Salt", price: 0 },
          ],
        ],
      },
      {
        title: "WcDonald Classic Salad",
        price: 6.99,
        calories: 110,
        image: "Salads/Mcdonald-salad.png",
        detail:
          "A blend of premium lettuces, grape tomatoes, shaved carrots, real cheddar cheese, and slices of crispy chicken strips on top.",
        customizations: [
          [
            { title: "Lettuce", price: 0 },
            { title: "Grape tomatoes", price: 0 },
            { title: "Shaved carrots", price: 0 },
            { title: "Cheddar cheese", price: 0 },
            { title: "Crispy chicken strips", price: 0 },
          ],
          [
            { title: "Bacon bits", price: 0.25 },
            { title: "Croutons", price: 0.25 },
            { title: "Caesar dressing", price: 0 },
            { title: "Ranch dressing", price: 0 },
            { title: "Italian dressing", price: 0 },
          ],
        ],
      },
      {
        title: "West Side Wario's Salad",
        price: 5.99,
        calories: 150,
        image: "Salads/Marios-salad.jpg",
        detail:
          "A house style salad with mixed greens, grape tomatoes, cucumbers, and onions.",
        customizations: [
          [
            { title: "Mixed greens", price: 0 },
            { title: "Grape tomatoes", price: 0 },
            { title: "Cucumbers", price: 0 },
            { title: "Onions", price: 0 },
          ],
          [
            { title: "Bacon bits", price: 0.25 },
            { title: "Croutons", price: 0.25 },
            { title: "Cheddar cheese", price: 0.25 },
          ],
        ],
        allergens: ["Sesame"],
        tags: ["V", "GF"],
      },
      {
        title: "Bendy's Caesar Salad",
        price: 6.99,
        calories: 200,
        image: "Salads/wendys-caesar.png",
        detail:
          "A classic caesar salad with romaine lettuce and big crispy croutons.",
        customizations: [
          [
            { title: "Romaine lettuce", price: 0 },
            { title: "Croutons", price: 0.25 },
            { title: "Caesar dressing", price: 0 },
          ],
          [
            { title: "Bacon bits", price: 0.25 },
            { title: "Parmesan cheese", price: 0.25 },
          ],
        ],
      },
      {
        title: "Bendy's Tacos Caesar Salad",
        price: 7.99,
        calories: 520,
        image: "Salads/wendys-taco-salad.png",
        detail:
          "Our classic Bendy's Caesar Salad with a mix of taco seasoned beef, shredded cheddar cheese, and tortilla strips.",
        customizations: [
          [
            { title: "Romaine lettuce", price: 0 },
            { title: "Tortilla strips", price: 0.2 },
            { title: "Taco seasoned beef", price: 0 },
            { title: "Shredded cheddar cheese", price: 0.25 },
            { title: "Caesar dressing", price: 0 },
          ],
          [
            { title: "Bacon bits", price: 0.25 },
            { title: "Croutons", price: 0.25 },
          ],
        ],
      },
      {
        title: "Cool Slaw Delight",
        price: 3.49,
        calories: 150,
        image: "Salads/coleslaw.jpg",
        detail:
          "A refreshing coleslaw salad with shredded cabbage, carrots, and a tangy dressing.",
        customizations: [
          [
            { title: "Shredded cabbage", price: 0 },
            { title: "Shredded carrots", price: 0 },
            { title: "Tangy dressing", price: 0 },
          ],
          [
            { title: "Bacon bits", price: 0.25 },
            { title: "Raisins", price: 0.25 },
            { title: "Pepper", price: 0 },
            { title: "Salt", price: 0 },
          ],
        ],
      },
    ],
  ],
  [
    "Sides",
    [
      {
        title: "WcDonald's Fries",
        price: 1.99,
        calories: 190,
        image: "Sides/wcdonald-fries.jpg",
        detail:
          "Our World Famous Fries are crispy and golden on the outside and fluffy on the inside.",
        customizations: [
          [{ title: "Salt", price: 0 }],
          [
            { title: "Pepper", price: 0 },
            { title: "Ketchup", price: 0 },
            { title: "Mayo", price: 0 },
            { title: "Gravy", price: 0 },
          ],
        ],
      },
      {
        title: "W&A Onion Rings",
        price: 2.99,
        calories: 150,
        image: "Sides/onion-rings.png",
        detail: "Thick-cut, battered and breaded onion rings.",
        customizations: [
          [
            { title: "Salt", price: 0 },
            { title: "Onion ring dipping sauce", price: 0 },
          ],
          [
            { title: "Pepper", price: 0 },
            { title: "Ketchup", price: 0 },
          ],
        ],
      },
      {
        title: "Big Caesers Rational Bread",
        price: 2.99,
        calories: 350,
        image: "Sides/crazy-bread.jpg",
        detail:
          "Freshly baked breadsticks topped with garlic butter and Parmesan cheese.",
        customizations: [
          [
            { title: "Garlic butter", price: 0 },
            { title: "Parmesan cheese", price: 0 },
          ],
        ],
      },
      {
        title: "Bendy's Poutine",
        price: 5.99,
        calories: 670,
        image: "Sides/wendys-poutine.png",
        detail: "Our classic poutine with cheese curds and gravy.",
        customizations: [
          [
            { title: "Cheese curds", price: 0 },
            { title: "Gravy", price: 0 },
          ],
          [
            { title: "Bacon bits", price: 0.25 },
            { title: "Pepper", price: 0 },
            { title: "Salt", price: 0 },
          ],
        ],
      },
      {
        title: "Chicken or Beef",
        price: 6.99,
        calories: 240,
        image: "Sides/westjet.webp",
        detail:
          "Even when there's only 2 options, we'll still get your order wrong.",
      },
      {
        title: "Mini Mozzarella Sticks",
        price: 4.99,
        calories: 320,
        image: "Sides/mozzarella-sticks.jpg",
        detail: "Crispy breaded mozzarella sticks served with marinara sauce.",
        customizations: [
          [{ title: "Marinara sauce", price: 0 }],
          [
            { title: "Ranch dressing", price: 0.25 },
            { title: "BBQ sauce", price: 0.25 },
          ],
        ],
      },
    ],
  ],
  [
    "Desserts",
    [
      {
        title: "WcDonald's Vanilla Ice Cream",
        price: 1.99,
        calories: 100,
        image: "Dessert/mcdonalds-vanilla-icecream.jpg",
        detail: "Our creamy vanilla soft serve in a crispy cone.",
      },
      {
        title: "Fairy King Oreo Blizzard",
        price: 3.99,
        calories: 200,
        image: "Dessert/OreoBlizzard.jpg",
        detail:
          "Our classic Blizzard made with Oreo cookie pieces and vanilla soft serve.",
      },
      {
        title: "Peach Mango Pie",
        price: 3.49,
        calories: 270,
        image: "Dessert/peachmangopie.webp",
        detail:
          "Sweet and flaky Peach Mango Pie made with real Philippine Mangoes",
      },
      {
        title: "Classic Hot Fudge Sundae",
        price: 2.99,
        calories: 300,
        image: "Dessert/hotfudgesundae.webp",
        detail:
          "Our classic sundae made with creamy vanilla soft serve and chocolate sauce.",
      },
      {
        title: "WcDonald's Apple Pie",
        price: 1.99,
        calories: 250,
        image: "Dessert/applepie.jpg",
        detail:
          "Our classic Apple Pie made with delicious apples, baked in a flaky crust.",
      },
      {
        title: "WcDonald's Chocolate Chip Cookie",
        price: 1.49,
        calories: 160,
        image: "Dessert/chocolatechipcookie.jpg",
        detail: "A soft and chewy cookie made with chocolate chips.",
      },
    ],
  ],
  [
    "Drinks",
    [
      {
        title: "Worlds Most Expensive Water",
        price: 100000,
        calories: 0,
        image: "Drink/expensive-water.png",
        detail: "The most expensive water in the world. It's just water.",
      },
      {
        title: "Regular Water",
        price: 0,
        calories: 0,
        image: "Drink/water.jpg",
        detail: "Just regular water.",
      },
      {
        title: "Oi Ocha",
        price: 2.99,
        calories: 10,
        image: "Drink/oiocha.png",
        detail: "Japanese green tea.",
      },
      {
        title: "Kirin Milk Tea",
        price: 2.99,
        calories: 100,
        image: "Drink/kirinmilktea.png",
        detail: "Japanese milk tea from Kirin.",
      },
      {
        title: "Royal Milk Tea",
        price: 2.99,
        calories: 100,
        image: "Drink/royalmilktea.png",
        detail: "Japanese Royal milk tea",
      },
      {
        title: "Boss Cafe Au Lait",
        price: 2.99,
        calories: 90,
        image: "Drink/bosscafeaulait.png",
        detail: "Japanese Boss Cafe Au Lait from Suntory.",
      },
      {
        title: "Boss Black Coffee",
        price: 2.99,
        calories: 5,
        image: "Drink/bossblack.png",
        detail: "Japanese Boss Black Coffee from Suntory.",
      },
      {
        title: "Coke",
        price: 2.99,
        calories: 140,
        image: "Drink/Coke.png",
        detail: "Coca-Cola.",
      },
      {
        title: "Pepsi",
        price: 2.99,
        calories: 155,
        image: "Drink/Pepsi.jpg",
        detail: "Pepsi.",
      },
      {
        title: "Diet Coke",
        price: 2.99,
        calories: 0,
        image: "Drink/diet-coke.jpg",
        detail: "Diet Coca-Cola.",
      },
      {
        title: "Diet Pepsi",
        price: 2.99,
        calories: 0,
        image: "Drink/diet-pepsi.jpg",
        detail: "Diet Pepsi.",
      },
      {
        title: "Orange Crush",
        price: 2.99,
        calories: 160,
        image: "Drink/orange-crush.png",
        detail: "Orange Crush",
      },
      {
        title: "Grape Crush",
        price: 2.99,
        calories: 160,
        image: "Drink/grape-crush.png",
        detail: "Grape Crush",
      },
    ],
  ],
];
