const recipes = [

    // Soup

  {
    
    id: 1,
    title: "Sinigang na Baboy (Pork Sour Soup)",
    category: "Filipino - Soup",
    image: "Images/Sinigang.png",
    ingredients: [
      "1 kg pork belly or ribs, cut into chunks",
      "1 onion, quartered",
      "2 tomatoes, quartered",
      "1 radish (labanos), sliced",
      "1 eggplant, sliced",
      "1 bundle sitaw (string beans), cut 2 inches",
      "1 bundle kangkong (water spinach)",
      "2 to 3 pcs green chili (optional)",
      "1 pack sinigang mix (or ½ cup tamarind extract)",
      "2 tbsp fish sauce",
      "8 cups water",
      "Salt & pepper"
    ],
    steps: [
      "Wash pork and vegetables thoroughly.",
      "In a large pot, combine pork, onion, tomatoes, and water. Boil.",
      "Lower heat and simmer 45–60 mins until pork is tender. Skim off scum.",
      "Add radish and simmer 5 mins.",
      "Add eggplant and sitaw. Cook another 7 mins.",
      "Pour in sinigang mix or tamarind extract. Stir well.",
      "Season with fish sauce, salt, and pepper.",
      "Add kangkong and chili, simmer 2 mins.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: 2,
    title: "Tinolang Manok (Chicken Ginger Soup)",
    category: "Filipino - Soup",
    image: "Images/Tinola.png",
    ingredients: [
      "1 whole chicken, cut into serving pieces",
      "1 onion, sliced",
      "3 cloves garlic, minced",
      "2-inch ginger, sliced thinly",
      "2 tbsp fish sauce",
      "1 green papaya or sayote, wedged",
      "1 bundle malunggay or chili leaves",
      "5 cups water"
    ],
    steps: [
      "Wash chicken and vegetables.",
      "Heat oil in a pot, sauté garlic, onion, and ginger until fragrant.",
      "Add chicken pieces, cook until lightly browned.",
      "Pour in fish sauce and stir.",
      "Add 5 cups water. Boil, then simmer until chicken is tender.",
      "Add papaya or sayote. Cook until soft.",
      "Add malunggay or chili leaves. Simmer 2 mins.",
      "Serve hot with rice."
    ]
  },
  {
    id: 3,
    title: "Bulalo (Beef Shank Soup)",
    category: "Filipino - Soup",
    image: "Images/Bulalo.png",
    ingredients: [
      "1 kg beef shank with bone marrow",
      "1 onion",
      "1 tbsp whole peppercorns",
      "2 pcs corn on the cob, cut into 2",
      "1 bundle pechay",
      "½ cabbage, quartered",
      "10 cups water",
      "Fish sauce, salt"
    ],
    steps: [
      "Wash beef and vegetables.",
      "In a large pot, combine beef, onion, peppercorns, and water. Boil.",
      "Simmer 2–3 hours until beef is very tender.",
      "Add corn. Cook until tender.",
      "Season broth with fish sauce and salt.",
      "Add cabbage and pechay. Cook 2–3 mins.",
      "Serve hot with rice."
    ]
  },
  {
    id: 4,
    title: "La Paz Batchoy",
    category: "Filipino - Soup",
    image: "Images/Sabaw.png",
    ingredients: [
      "300g fresh egg noodles (miki)",
      "500g pork belly, sliced thin",
      "250g pork liver, sliced thin",
      "1 liter pork broth",
      "½ cup crushed chicharon",
      "3 cloves garlic, minced & fried",
      "2 spring onions, chopped",
      "1 raw egg (optional)",
      "Soy sauce, salt, pepper"
    ],
    steps: [
      "Cook noodles in boiling water. Drain, set aside.",
      "Sauté pork belly until lightly browned. Add liver, cook 2–3 mins.",
      "Pour in pork broth, season with soy sauce, salt, pepper. Simmer 10 mins.",
      "Place noodles in a bowl.",
      "Pour hot broth with pork and liver over noodles.",
      "Top with chicharon, fried garlic, spring onions, and raw egg if desired.",
      "Serve hot."
    ]
  },
  {
    id: 5,
    title: "Mami (Filipino Noodle Soup)",
    category: "Filipino - Soup",
    image: "Images/Mami.png",
    ingredients: [
      "250g egg noodles",
      "500g chicken (or beef), boiled & shredded",
      "5 cups chicken (or beef) broth",
      "2 cloves garlic, fried until golden",
      "2 spring onions, chopped",
      "Soy sauce, fish sauce, pepper",
    ],
    steps: [
      "Cook noodles in boiling water. Drain, set aside.",
      "In a pot, simmer broth with shredded chicken/beef.",
      "Season broth with soy sauce, fish sauce, and pepper.",
      "Place noodles in a serving bowl.",
      "Pour hot broth with meat over noodles.",
      "Garnish with fried garlic and spring onions.",
      "Serve hot."
    ]
  },

//   Fried
  
  {
    id: 6,
    title: "Pritong Bangus (Fried Milkfish)",
    category: "Filipino - Fried",
    image: "Images/Bangus.png",
    ingredients: [
      "1 whole bangus, butterflied",
      "½ cup vinegar",
      "4 cloves garlic, crushed",
      "1 tsp salt",
      "½ tsp pepper",
      "Oil for frying"
    ],
    steps: [
      "Clean the bangus, remove scales, cut open (butterfly).",
      "Marinate in vinegar, garlic, salt, and pepper for 1 hr.",
      "Heat oil in a pan.",
      "Fry bangus until golden brown and crispy on both sides.",
      "Serve with vinegar dipping sauce."
    ]
  },
  {
    id: 7,
    title: "Lumpiang Shanghai (Spring Rolls)",
    category: "Filipino - Fried",
    image: "Images/Lumpia.png",
    ingredients: [
      "500g ground pork",
      "1 carrot, grated",
      "1 onion, minced",
      "3 cloves garlic, minced",
      "½ cup singkamas (jicama), grated (optional)",
      "Lumpia wrappers",
      "1 egg (for sealing)",
      "Oil for frying"
    ],
    steps: [
      "Mix pork, carrot, onion, garlic, and singkamas in a bowl.",
      "Place 1 tbsp filling on lumpia wrapper. Roll tightly. Seal edge with beaten egg.",
      "Heat oil in a pan.",
      "Fry lumpia in batches until golden brown.",
      "Drain excess oil, serve with sweet chili sauce or banana ketchup."
    ]
  },
  {
    id: 8,
    title: "Ukoy (Shrimp Fritters)",
    category: "Filipino - Fried",
    image: "Images/Ukoy.png",
    ingredients: [
      "200g small shrimp (with shell or peeled)",
      "1 cup bean sprouts",
      "1 cup grated sweet potato",
      "1 cup cornstarch (or flour)",
      "1 egg",
      "½ cup water",
      "Salt & pepper",
      "Oil for frying"
    ],
    steps: [
      "In a bowl, mix shrimp, sweet potato, bean sprouts, flour, egg, water, salt, and pepper.",
      "Heat oil in a pan.",
      "Scoop mixture (1 ladle) into pan, flatten slightly.",
      "Fry until golden brown and crispy on both sides.",
      "Drain oil, serve with vinegar dip."
    ]
  },
  {
    id: 9,
    title: "Tocino (Sweet Cured Pork)",
    category: "Filipino - Fried",
    image: "Images/Tocino.png",
    ingredients: [
      "1 kg pork slices (shoulder or belly)",
      "½ cup sugar",
      "3 tbsp pineapple juice",
      "2 tbsp soy sauce",
      "1 tbsp garlic, minced",
      "1 tsp salt",
      "Few drops red food coloring (optional)"
    ],
    steps: [
      "Mix sugar, pineapple juice, soy sauce, garlic, salt, and coloring.",
      "Rub mixture into pork slices. Marinate 24 hrs in fridge.",
      "Heat a pan, place marinated pork with a little water.",
      "Cook until water evaporates.",
      "Fry in its rendered fat until caramelized and browned.",
      "Serve with garlic rice and egg."
    ]
  },
  {
    id: 10,
    title: "Chicken Inasal (Grilled/Fried-Style Chicken)",
    category: "Filipino - Fried",
    image: "Images/Mang Inasal.png",
    ingredients: [
      "1 whole chicken, cut into serving parts",
      "3 tbsp calamansi juice",
      "3 tbsp vinegar",
      "4 cloves garlic, minced",
      "1 thumb ginger, minced",
      "3 tbsp soy sauce",
      "2 tbsp annatto oil",
      "Salt and pepper"
    ],
    steps: [
      "Mix calamansi, vinegar, garlic, ginger, soy sauce, annatto oil, salt, pepper.",
      "Marinate chicken at least 1 hr.",
      "Heat oil in a pan.",
      "Fry chicken until golden and cooked through..",
      "Serve with garlic rice and dipping sauce."
    ]
  },

//   Breakfast

  {
    id: 11,
    title: "Champorado",
    category: "Filipino - Breakfast",
    image: "Images/Champorado.jpg",
    ingredients: [
      "1 cup glutinous rice (malagkit)",
      "4–5 cups water",
      "1/2 cup cocoa powder or tablea (Filipino chocolate tablets)",
      "1/2 cup sugar (adjust to taste)",
      "Evaporated or condensed milk (for topping)",
      "Tuyo (dried fish), optional side"
    ],
    steps: [
      "In a pot, cook glutinous rice with water until soft and porridge-like.",
      "Dissolve cocoa/tablea in a little hot water, then add to the rice.",
      "Stir in sugar and continue cooking until thick and creamy.",
      "Serve hot with milk drizzled on top. Pair with tuyo if desired."
    ]
  },
  {
    id: 12,
    title: "Filipino - Tapsilog",
    category: "Breakfast",
    image: "Images/Breakfast.jpg",
    ingredients: [
      "500g beef sirloin or tenderloin (thinly sliced)",
      "1/4 cup soy sauce",
      "2 tbsp vinegar",
      "4 cloves garlic (minced)",
      "1 tbsp sugar",
      "1/2 tsp ground black pepper",
      "2 cups cooked rice (for garlic rice)",
      "4 cloves garlic (minced, for rice)",
      "2–3 tbsp cooking oil",
      "1 egg per serving",
      "Salt to taste"
    ],
    steps: [
      "In a bowl, combine beef, soy sauce, vinegar, garlic, sugar, and pepper. Marinate for at least 1 hour or overnight.",
      "Heat oil in a pan and fry the marinated beef until cooked and slightly caramelized. Set aside.",
      "In the same pan, sauté garlic until golden, then add rice. Season with salt and mix well to make garlic fried rice.",
      "Fry the eggs sunny-side up (or your preferred style).",
      "Serve the beef tapa with garlic rice and egg on one plate. Enjoy hot with vinegar dip on the side."
    ]
  },
  {
    id: 13,
    title: "Tortang Talong",
    category: "Filipino - Breakfast",
    image: "Images/Torta.jpg",
    ingredients: [
      "2 medium eggplants",
      "2 eggs",
      "1 onion (chopped, optional)",
      "Salt and pepper to taste",
      "2–3 tbsp cooking oil"
    ],
    steps: [
      "Grill or roast the eggplants until skin is charred and flesh is soft. Peel off the skin, keeping the stems intact.",
      "Flatten the eggplants with a fork.",
      "Beat eggs with salt and pepper, then dip each eggplant into the mixture.",
      "Heat oil in a pan and fry eggplants until golden on both sides.",
      "Serve hot with rice and ketchup on the side."
    ]
  },
  {
    id: 14,
    title: "Classic Waffles",
    category: "Breakfast",
    image: "Images/Waffle.jpg",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "2 large eggs",
      "1 3/4 cups milk",
      "1/2 cup butter (melted) or vegetable oil",
      "1 tsp vanilla extract"
    ],
    steps: [
      "Preheat your waffle iron.",
      "In a bowl, mix flour, sugar, baking powder, and salt.",
      "In another bowl, whisk eggs, milk, melted butter, and vanilla.",
      "Combine wet and dry ingredients, stirring until just mixed (batter should be slightly lumpy).",
      "Grease the waffle iron, pour in batter, and cook until golden brown.",
      "Serve hot with butter, syrup, or toppings of choice."
    ]
  },
  {
    id: 15,
    title: "Classic omelet",
    category: "Breakfast",
    image: "Images/Dessert20.jpg",
    ingredients: [
      "2–3 large eggs",
      "2 tbsp milk (optional, for fluffiness)",
      "Salt and pepper to taste",
      "1–2 tbsp butter or oil",
      "1/4 cup onion (chopped)",
      "1/4 cup bell pepper (chopped)",
      "1/4 cup tomato (chopped)",
      "1/4 cup cheese (grated)",
      "Optional: ham, bacon, or mushrooms (chopped)"
    ],
    steps: [
      "Crack eggs into a bowl, add milk, salt, and pepper, then whisk until well combined.",
      "Heat butter/oil in a non-stick pan over medium heat.",
      "Pour in the egg mixture, tilting the pan to spread evenly.",
      "As the eggs start to set, add your fillings (vegetables, cheese, meats) on one half.",
      "Fold the omelet in half and cook for another 1–2 minutes until cheese melts.",
      "Slide onto a plate and serve hot with toast or rice."
    ]
  },

//   Dessert

  {
    id: 16,
    title: "Chocolate Cake",
    category: "Dessert",
    image: "Images/Chocolate Cake.png",
    ingredients: [
            {
                title: "Wet Ingredients",
                ingredients: [
                    "2 large eggs (room temperature)",
                    "1 cup (240 ml) whole milk (or evaporated milk)",
                    "½ cup (120 ml) vegetable oil (or melted butter)",
                    "2 tsp vanilla extract",
                    "1 cup (240 ml) boiling water or hot coffee (makes it richer)"
                ]
            },
            {
                title: "Dry Ingredients",
                ingredients: [
                    "1 ¾ cups (220 g) all-purpose flour",
                    "¾ cup (65 g) unsweetened cocoa powder",
                    "2 cups (400 g) granulated sugar",
                    "1 ½ tsp baking powder",
                    "1 ½ tsp baking soda",
                    "1 tsp salt"
                ]
            }
        ],
    steps: [
      "Preheat the oven to 350°F (175°C), then grease and flour two 9-inch (23 cm) round cake pans or line them with parchment paper.",
      "In a large bowl, sift together flour, cocoa powder, sugar, baking powder, baking soda, and salt.",
      "Add eggs, milk, oil, and vanilla, then beat with a mixer (or whisk) on medium speed for about 2 minutes until smooth.",
      "Slowly pour in hot water (or coffee), noting that the batter will be thin, which is normal.",
      "Divide the batter evenly into pans and bake for 30–35 minutes, or until a toothpick comes out clean from the center.",
      "Let cakes cool in pans for 10 minutes before removing and letting them cool completely on a wire rack",
      "Frost with chocolate buttercream, ganache, or whipped cream, spreading between layers and over the cake."
    ]
  },
  {
    id: 17,
    title: "Cheesecake",
    category: "Dessert",
    image: "Images/Dessert.jpg",
    ingredients: [
            {
                title: "Crust",
                ingredients: [
                    "1 ½ cups (≈150 g) graham cracker crumbs or crushed digestive biscuits",
                    "2 tbsp (≈25 g) granulated sugar (optional)",
                    "6 tbsp (≈85 g) unsalted butter, melted"
                ]
            },
            {
                title: "Filling",
                ingredients: [
                    "4 × 8-oz (32 oz total ≈ 907 g) cream cheese, softened to room temperature",
                    "1 cup (≈200 g) granulated sugar",
                    "2 tbsp (≈16 g) all-purpose flour (optional — helps prevent cracks)",
                    "1 tsp vanilla extract",
                    "3 large eggs (room temperature)",
                    "1 large egg yolk (optional — extra richness)",
                    "½ cup (120 ml) sour cream",
                    "¼ cup (60 ml) heavy cream or milk (optional — makes it silkier)"
                ]
            },
            {
                title: "Optional sour-cream topping",
                ingredients: [
                    "1 cup (240 g) sour cream",
                    "2 tbsp (≈25 g) sugar",
                    "1 tsp vanilla extract"
                ]
            }
        ],
    steps: [
      "Preheat the oven to 325°F (160°C), grease a 9-inch springform pan, line the bottom with parchment, and if using a water bath, wrap the outside of the pan in heavy foil to prevent leaks.",
      "Mix crumbs, sugar (if using), and melted butter until evenly moistened, then press evenly into the bottom (and slightly up the sides if desired) of the springform pan.",
      "Bake the crust for 8–10 minutes, remove, and set aside to cool (pre-baking is optional, but it gives a firmer crust).",
      "In a large bowl, beat softened cream cheese on medium speed until smooth and lump-free (about 2–3 minutes), scraping the bowl as needed.",
      "Add sugar and flour, then beat until combined and creamy, being careful not to over-beat.",
      "Add vanilla, then add eggs one at a time on low speed, mixing only until incorporated, and stir in the egg yolk if using.",
      "Fold in sour cream and heavy cream until the batter is silky, smooth, and pourable.",
      "Pour filling over the cooled crust, smooth the top, and if using a water bath, place the springform pan inside a larger roasting pan, then carefully pour hot (not boiling) water into the roasting pan until it reaches halfway up the sides of the springform pan.",
      "Bake at 325°F (160°C) for 50–70 minutes (depending on oven and pan) until the edges are set and the center is slightly jiggly, noting that if not using a water bath you should start checking at 45 minutes to avoid overbaking.",
      "Turn off the oven, crack the oven door, and let the cheesecake cool inside for about 1 hour to reduce cracking, then remove, unwrap foil (if used), and cool completely at room temperature.",
      "Refrigerate the cooled cheesecake for at least 4 hours (preferably overnight) for best texture, and if using the sour-cream topping, mix topping ingredients until smooth, spread over the chilled cake, and chill for another 30–60 minutes.",
      "Run a thin knife around the edge before releasing the springform, then slice with a hot, wiped knife for clean slices and enjoy!"
    ]
  },
  {
    id: 18,
    title: "Letche Flan",
    category: "Filipino - Dessert",
    image: "Images/Letche Flan.png",
    ingredients: [
      "10 large egg yolks",
      "1 can (300 ml) sweetened condensed milk",
      "1 can (370 ml) evaporated milk",
      "1 tsp vanilla extract (or lemon zest for a twist)",
      "½ cup (100 g) white sugar (for caramel)"
    ],
    steps: [
      "In a pan over low heat, melt the sugar until it turns golden brown, then quickly pour the caramel into the llanera (or round baking dish), swirling to coat the bottom evenly and set aside to harden.",
      "In a bowl, gently whisk the egg yolks until smooth (avoid beating too hard), then add condensed milk, evaporated milk, and vanilla, mixing until well combined.",
      "Strain the custard mixture through a fine sieve to remove bubbles and ensure a silky texture.",
      "Pour the custard mixture into the caramel-lined llanera, cover with foil, and either steam for 30–40 minutes over medium heat or bake in a water bath (bain-marie) at 350°F (175°C) for 45–50 minutes.",
      "Let the flan cool to room temperature, refrigerate for at least 2 hours to set, then run a knife along the edges, invert onto a plate, and allow the caramel sauce to flow over the flan before serving"
    ]
  },
  {
    id: 19,
    title: "Halo-Halo",
    category: "Filipino - Dessert",
    image: "Images/Halo-Halo.png",
    ingredients: [
            {
                title: "Base",
                ingredients: [
                    "2 cups finely shaved or crushed ice",
                    "1 cup evaporated milk (chilled)"
                ]
            },
            {
                title: "Fruits&Beans",
                ingredients: [
                    "2 tbsp sweetened red mung beans (munggo)",
                    "2 tbsp sweetened garbanzos (chickpeas)",
                    "2 tbsp sweetened white beans",
                    "2 tbsp sweetened jackfruit (langka), strips",
                    "2 tbsp sweetened saba bananas, sliced",
                    "2 tbsp macapuno (sweetened coconut strings)",
                    "2 tbsp nata de coco (coconut gel)",
                    "2 tbsp kaong (sugar palm fruit)",
                    "2 tbsp sweetened purple yam (ube halaya)"
                ]
            },
            {
                title: "Optional toppinngs",
                ingredients: [
                    "1 slice leche flan",
                    "1 scoop ube ice cream (or any ice cream you like)",
                    "Pinipig (toasted rice flakes) for crunch"
                ]
            }
        ],
    steps: [
      "In a tall glass or bowl, layer 1–2 tablespoons each of the sweetened beans, fruits, and jellies.",
      "Fill the glass with finely shaved or crushed ice, packing it lightly.",
      "Pour chilled evaporated milk evenly over the ice until it soaks in.",
      "Add toppings by placing leche flan, a scoop of ube ice cream, and a sprinkle of pinipig on top.",
      "Serve with a long spoon and mix everything together before eating (“halo-halo” means “mix-mix” in Filipino)."
    ]
  },
  {
    id: 20,
    title: "Cream puffs",
    category: "Dessert",
    image: "Images/Cream Puffs.png",
    ingredients: [
            {
                title: "Choux Pastry",
                ingredients: [
                    "1 cup (240 ml) water",
                    "½ cup (115 g) unsalted butter",
                    "1 tbsp sugar (optional, for sweetness.)",
                    "¼ tsp salt",
                    "1 cup (125 g) all-purpose flour",
                    "4 large eggs (room temperature)"
                ]
            },
            {
                title: "Cream Filling",
                ingredients: [
                    "2 cups (480 ml) heavy cream or all-purpose cream (chilled)",
                    "½ cup (60 g) powdered sugar",
                    "1 tsp vanilla extract"
                ]
            },
            {
                title: "Optional toppinngs",
                ingredients: [
                    "Melted chocolate or powdered sugar for garnish"
                ]
            }
        ],
    steps: [
      "In a saucepan, combine water, butter, sugar, and salt, bring to a boil, then lower the heat, add flour all at once, and stir quickly until the mixture forms a ball and pulls away from the sides of the pan.",
      "Transfer the dough to a bowl, let it cool for 5 minutes, then add eggs one at a time, beating well after each addition until smooth and glossy.",
      "Preheat the oven to 400°F (200°C), line a baking sheet with parchment paper, drop spoonfuls (or pipe with a pastry bag) of dough leaving space between them, and bake for 20–25 minutes until golden brown and puffed.",
      "Turn off the oven, open the door slightly, let the puffs sit for 5–10 minutes to prevent collapsing, then cool completely on a wire rack.",
      "In a mixing bowl, whip cream, powdered sugar, and vanilla until stiff peaks form, then chill until ready to use.",
      "Slice puffs in half (or poke a hole underneath), fill with whipped cream using a spoon or piping bag, and finish by drizzling with melted chocolate or dusting with powdered sugar if desired."
    ]
  },

//   Pasta

  {
    id: 21,
    title: "Spaghetti Carbonara",
    category: "Pasta",
    image: "Images/Carbonara.png",
    ingredients: [
        "400 g spaghetti",
        "150–200 g guanciale (or pancetta/bacon), cut into small strips",
        "3 large eggs + 1 extra egg yolk (or 4 large eggs)",
        "100 g finely grated Pecorino Romano (or Parmesan)",
        "Freshly ground black pepper, generous",
        "Salt for pasta water",
        "1 cup reserved pasta cooking water (use as needed)",
        "Optional: small splash of olive oil if guanciale is lean"
    ],
    steps: [
        "Fill a large pot with water, bring to a rolling boil, and generously salt it.",
        "Cook spaghetti until al dente; aim for slightly firm since it will cook more later.",
        "Cut guanciale into small strips and grate the Pecorino.",
        "Whisk eggs and cheese together with black pepper in a bowl; set aside.",
        "Cook guanciale in a skillet until crisp and fat renders, 5–8 minutes.",
        "Reserve 1–1½ cups pasta water, then drain the spaghetti (do not rinse).",
        "Add pasta to skillet with guanciale off the heat and toss to coat.",
        "Pour egg mixture over pasta and toss quickly until creamy (not scrambled).",
        "Add pasta water gradually until the sauce becomes glossy and silky.",
        "Taste and adjust with black pepper and more cheese. Serve immediately."
    ]
    },
    {
    id: 22,
    title: "Lasagna",
    category: "Pasta",
    image: "Images/Lasagna.png",
    ingredients: [
        "2 tbsp olive oil",
        "1 medium onion, finely chopped",
        "1 large carrot, finely chopped",
        "2 stalks celery, finely chopped (optional)",
        "3 cloves garlic, minced",
        "500 g ground beef (or mix of beef and pork)",
        "2 tbsp tomato paste",
        "800 g canned crushed tomatoes",
        "1/2 cup red wine or beef stock (optional)",
        "1 tsp dried oregano",
        "1 bay leaf (optional)",
        "1 tsp sugar (optional)",
        "Salt and pepper to taste",
        "60 g unsalted butter",
        "60 g all-purpose flour",
        "720 ml milk, warmed",
        "Pinch of ground nutmeg",
        "250–300 g lasagna sheets",
        "400–500 g shredded mozzarella",
        "100 g grated Parmesan",
        "Optional ricotta mixture: 250 g ricotta + 1 egg + salt + pepper + parsley"
    ],
    steps: [
        "Preheat oven to 190°C (375°F). If using regular noodles, boil them until al dente.",
        "Make the ragu: Heat olive oil, sauté onion, carrot, celery until soft.",
        "Add garlic, then meat. Cook until browned and no pink remains.",
        "Add tomato paste, cook 1–2 minutes, then add wine/stock and tomatoes.",
        "Season with oregano, bay leaf, sugar, salt, and pepper. Simmer 20–30 minutes.",
        "Make béchamel: Melt butter, whisk in flour, then gradually add milk. Simmer until thick.",
        "Season béchamel with salt, pepper, and nutmeg.",
        "Mix ricotta with egg, Parmesan, salt, pepper, parsley (if using).",
        "Assemble: layer sauce, noodles, ricotta/béchamel, and cheese; repeat 2–3 times.",
        "Finish with noodles, béchamel, mozzarella, and Parmesan on top.",
        "Cover with foil, bake 25 minutes, remove foil, and bake 15–20 minutes more.",
        "Rest 10–15 minutes before slicing. Garnish with basil or parsley."
    ]
    },
    {
    id: 23,
    title: "Filipino Spaghetti",
    category: "Filipino - Pasta",
    image: "Images/Spag.png",
    ingredients: [
        "500 g spaghetti noodles",
        "2 tbsp cooking oil",
        "1 medium onion, finely chopped",
        "4 cloves garlic, minced",
        "500 g ground pork or beef (or a mix)",
        "4–6 Filipino hotdogs, sliced diagonally",
        "1 small can (200 g) liver spread or pâté (optional)",
        "2 cups banana ketchup",
        "2 cups tomato sauce",
        "1/2 cup tomato paste",
        "1/2 cup sugar (adjust to taste)",
        "1/2 cup water or beef broth",
        "2 tbsp soy sauce or fish sauce (optional)",
        "1–2 tsp salt",
        "1 tsp ground black pepper",
        "1 cup grated quick-melt cheese or cheddar (plus extra for topping)"
    ],
    steps: [
        "Boil spaghetti noodles until al dente, drain, and drizzle with oil to prevent sticking.",
        "Heat oil in a pan. Sauté onion until soft, then add garlic and cook until fragrant.",
        "Add ground meat, cook until browned, and season with salt and pepper.",
        "Add hotdogs and cook for 2–3 minutes until lightly browned.",
        "Mix in liver spread (if using) until blended.",
        "Pour in tomato sauce, banana ketchup, tomato paste, and water/broth. Stir well.",
        "Add sugar, soy/fish sauce, salt, and pepper. Simmer 15–20 minutes until thick.",
        "Stir in half of the grated cheese until melted.",
        "Toss pasta with sauce or serve sauce on top, Jollibee-style.",
        "Top with extra cheese and serve hot."
    ]
    },

    // Vegetables

    {
    id: 24,
    title: "Chop Suey",
    category: "Filipino - Vegetables",
    image: "Images/Chopsuey.png",
    ingredients: [
        "7 pieces shrimp, cleaned and deveined",
        "3 ounces pork, sliced",
        "3 ounces boneless chicken breast, sliced",
        "1 ½ cups cauliflower florets",
        "1 piece carrot, sliced crosswise into thin pieces",
        "15 pieces snow peas",
        "8 pieces baby corn",
        "1 piece red bell pepper, sliced into squares",
        "1 piece green bell pepper, sliced into squares",
        "1 ½ cups cabbage, chopped",
        "12 pieces quail eggs, boiled",
        "1 piece yellow onion, sliced",
        "4 cloves garlic, crushed",
        "¼ cup soy sauce",
        "1 ½ tablespoons oyster sauce",
        "¾ cup water",
        "1 tablespoon cornstarch, diluted in ½ cup water",
        "¼ teaspoon ground black pepper",
        "3 tablespoons cooking oil"
    ],
    steps: [
        "Heat oil in a wok or pan.",
        "Pan-fry the shrimp for 1 minute per side. Remove and set aside.",
        "Sauté the onion until it starts to soften.",
        "Add garlic and continue to sauté until fragrant.",
        "Add pork and chicken. Stir-fry until the meat is light brown.",
        "Add soy sauce and oyster sauce. Stir to combine.",
        "Pour in water and let it boil.",
        "Cover and cook over medium heat for 15 minutes.",
        "Add cauliflower, carrots, bell peppers, snow peas, and baby corn. Stir well.",
        "Add cabbage and toss to combine.",
        "Cover and cook for 5 to 7 minutes.",
        "Return the shrimp to the wok.",
        "Add ground black pepper and boiled quail eggs.",
        "Pour in cornstarch mixture and toss until sauce thickens.",
        "Transfer to a serving plate and serve hot."
    ]
    },

    {
    id: 25,
    title: "Beef Broccoli",
    category: "Filipino - Vegetables",
    image: "Images/BeefBroccoli.jpg",
    ingredients: [
            {
              title: "Main Ingredients",
              ingredients: [
                  "1 lb. beef, sliced into thin pieces",
                  "2 cups broccoli, cut into florets",
                  "2 teaspoons ginger, minced",
                  "2 cloves garlic, minced",
                  "1 tablespoon cornstarch",
                  "½ to ¾ cups water (optional)",
                  "¼ cup cooking oil",
                  "Salt and ground black pepper, to taste"
              ]
          },
          {
              title: "Marinade Ingredients",
              ingredients: [
                  "¼ cup oyster sauce",
                  "1 tablespoon Knorr Liquid Seasoning",
                  "½ teaspoon sesame oil (optional)",
                  "3 tablespoons cooking wine (optional)",
                  "1 teaspoon granulated white sugar"
              ]
          },
    ],
    steps: [
        "In a bowl, combine beef, oyster sauce, Knorr Liquid Seasoning, sesame oil, cooking wine, and sugar.",
        "Mix well and marinate beef for 15 minutes.",
        "Add cornstarch to the marinated beef and mix until fully incorporated. Set aside.",
        "Heat 2 tablespoons of cooking oil in a pot over medium heat.",
        "Sauté ginger and garlic until aromatic, before garlic browns.",
        "Add broccoli and stir-fry for 1–2 minutes. Remove from pot and set aside.",
        "Pour remaining oil into the same pot.",
        "Add marinated beef and stir-fry until it browns.",
        "(Optional) Add ½ to ¾ cup water to tenderize beef further. Let it boil and stir until sauce thickens.",
        "Season with salt and ground black pepper to taste.",
        "Add cooked broccoli back to the pot.",
        "Stir-fry everything together for 3 minutes.",
        "Transfer to a serving plate and serve hot."
    ]
    },
    {
    id: 26,
    title: "Ginataang Sitaw sa Kalabasa",
    category: "Filipino - Vegetables",
    image: "Images/Ginataang Sitaw sa Kalabasa.png",
    ingredients: [
        "4 cloves garlic, crushed and chopped",
        "1 onion, chopped",
        "1 lb calabaza squash, sliced",
        "12 pieces string beans (cut into 2-inch lengths)",
        "45 grams Knorr Ginataang Gulay Mix",
        "1 ½ cups water",
        "Salt, to taste",
        "Ground black pepper, to taste"
    ],
    steps: [
        "Heat oil in a pan over medium heat.",
        "Sauté chopped garlic and onion until fragrant.",
        "Add sliced calabaza squash and stir-fry for 2 minutes.",
        "Add string beans and cook for another 2 minutes, stirring occasionally.",
        "In a separate container, mix Knorr Ginataang Gulay Mix with 1 ½ cups of water.",
        "Pour the mixture into the pan and cover.",
        "Let it boil and cook for 5 to 7 minutes.",
        "Season with salt and ground black pepper to taste.",
        "Serve hot."
    ]
    },

    // No-cook

    {
    id: 27,
    title: "Cucumber Tuna Bites",
    category: "No-cook",
    image: "Images/Tuna.png",
    ingredients: [
        "1 can tuna (drained)",
        "1–2 tablespoons mayonnaise (adjust to preference)",
        "¼ teaspoon garlic powder",
        "Salt and pepper to taste",
        "1 cucumber",
        "Optional: sliced green onions for garnish"
    ],
    steps: [
        "Open the can of tuna and drain well to remove excess liquid.",
        "Wash and dry the cucumber.",
        "Slice the cucumber into bite-sized rounds (no need to peel).",
        "In a medium bowl, combine drained tuna, mayonnaise, and garlic powder.",
        "Season with salt and pepper to taste and mix well.",
        "Stir everything together until well combined.",
        "Arrange cucumber slices on a serving platter.",
        "Top each slice with a small spoonful of tuna mixture.",
        "If desired, garnish each with chopped green onions."
    ]
    },
    {
    id: 28,
    title: "Fresh Spring Rolls",
    category: "Filipino - No-cook",
    image: "Images/Fresh Lumpia.jpg",
    ingredients: [
            {
                title: "Filling Ingredients",
                ingredients: [
                    "Vermicelli rice noodles – 1 package (6–8 oz)",
                    "Chicken breast – 1 large, boiled and thinly sliced",
                    "Shrimp – 12 medium, deveined with shells on",
                    "Lettuce leaves – 6–8 pieces",
                    "Carrots – 1 large, julienned",
                    "Cucumber – 1 small, julienned",
                    "Bell peppers – 1, thinly sliced",
                    "Fresh herbs – mint, cilantro, or Thai basil (optional)",
                    "Rice paper wrappers – about 12 sheets",
                    "Salt – for boiling chicken and shrimp",
                    "Cold water – for soaking rice paper and cooling noodles"
                ]
            },
            {
                title: "Peanut Dipping Sauce Ingredients",
                ingredients: [
                    "Hoisin sauce – ¼ cup",
                    "Peanut butter – 2 tablespoons",
                    "Hot water – 2–4 tablespoons (for sauce)",
                    "Crushed dry roasted peanuts – for topping"
                ]
            }
    ],
    steps: [
    {
        step: "Cooking the Vermicelli Rice Noodles",
        instructions: [
            "Fill a large pot a little more than halfway with water.",
            "Place the pot over high heat and bring the water to a boil.",
            "Once boiling, add the vermicelli noodles and stir briefly to prevent sticking.",
            "Cook the noodles for 15–20 minutes, checking for doneness.",
            "The noodles are ready when they turn from transparent to white and are soft to the bite.",
            "Remove the pot from heat immediately once noodles are done.",
            "Carefully pour out the hot water into the sink.",
            "Refill the pot with cold water to stop the cooking and cool the noodles.",
            "Leave the noodles in the cold water while you portion them into small bundles.",
            "Place each bundle into a strainer to drain."
        ]
    },
    {
        step: "Cooking the Chicken and Shrimp",
        instructions: [
            "Boil chicken in salted water until fully cooked.",
            "Remove the chicken, let it cool slightly, then slice it into thin strips.",
            "In the same pot of water, add the deveined shrimp (with shells still on).",
            "Boil until the shrimp turn pinkish-orange and are cooked through.",
            "Drain the shrimp and let them rest for 3–4 minutes.",
            "Remove the shells from the shrimp.",
            "(Optional) Slice the shrimp in half lengthwise for easier rolling."
        ]
    },
    {
        step: "Wrapping the Fresh Spring Rolls",
        instructions: [
            "Set up your rolling station with all ingredients ready.",
            "Fill a large shallow dish or pie plate with about 1 inch of lukewarm water.",
            "Briefly soak a sheet of rice paper in the water (about 5 seconds).",
            "Remove the rice paper while it's still pliable (not fully soft) and lay it on a clean plate.",
            "On the bottom third of the rice paper, place a lettuce leaf.",
            "Add some noodles, veggies, and sliced chicken on top of the lettuce.",
            "Fold in the sides of the rice paper.",
            "Begin rolling from the bottom, tucking in tightly.",
            "After one full roll, add sliced shrimp with the orange side down onto the rice paper.",
            "Continue rolling tightly until sealed."
        ]
    },
    {
        step: "Making the Dipping Sauce",
        instructions: [
            "In a small bowl, combine hoisin sauce, peanut butter, and hot water.",
            "Whisk until the sauce is smooth and well blended.",
            "If the sauce is too thick, add more hot water 1 tablespoon at a time until it reaches your desired consistency.",
            "Top with crushed dry roasted peanuts before serving."
        ]
    }
]

    },
    {
    id: 29,
    title: "Nachos and Salsa dip",
    category: "No-cook",
    image: "Images/Nachos.png",
    ingredients: [
        "6–8 Roma tomatoes (or small plum tomatoes), diced",
        "1 small onion, peeled and rinsed",
        "1 garlic clove",
        "1 jalapeño (use half and deseed for less heat)",
        "1/2 cup fresh cilantro leaves",
        "1 tablespoon fresh lime juice",
        "1/2 teaspoon lime zest",
        "1/4 teaspoon ground cumin",
        "Pinch of sugar",
        "Salt, to taste",
        "Nacho chips (pre-sold), for serving"
    ],
    steps: [
        "Rinse the peeled onion.",
        "Add onion and garlic to the food processor (you can use a blender).",
        "Pulse until well-chopped.",
        "Add diced tomatoes, chopped jalapeño, cilantro, lime juice, lime zest, cumin, sugar, and salt.",
        "Pulse until combined but still chunky.",
        "Taste and adjust seasoning or spice level if needed.",
        "If salsa is too watery, strain half and mix with the remaining unstrained salsa.",
        "Serve with nacho chips."
    ]
    },

    // Smoothies

    {
    id: 30,
    title: "Creamy Avocado Smoothie",
    category: "Smoothies",
    image: "Images/Creamy Avocado Smoothie.png",
    ingredients: [
        "1 cup cold milk",
        "1/2 cup sweetened condensed milk (plus more to taste)",
        "1 cup ice",
        "1 ripe avocado, flesh only",
        "Cold water (as needed)"
    ],
    steps: [
        "Add cold milk, sweetened condensed milk, and ice to a blender.",
        "Blend until very smooth.",
        "Add avocado flesh to the blender.",
        "Blend again until completely smooth.",
        "If the mixture is too thick, add cold water a few tablespoons at a time.",
        "Blend after each addition until the mixture is pourable.",
        "Taste and add more sweetened condensed milk if desired.",
        "Serve in chilled glasses with straws."
    ]
    },
    {
    id: 31,
    title: "Watermelon and Cucumber Smoothie",
    category: "Smoothies",
    image: "Images/Watermelon and Cucumber Smoothie.png",
    ingredients: [
        "1 cup chopped cucumber",
        "1 cup buttermilk",
        "1 tsp honey (optional)",
        "1 tbsp lime juice",
        "2 cups frozen watermelon (divided)",
        "1–2 tbsp water (optional, to adjust consistency)",
        "Cucumber slice (for garnish)"
    ],
    steps: [
        "Add cucumber, buttermilk, honey (if using), and lime juice to a blender.",
        "Blend on high until smooth.",
        "Add half of the frozen watermelon and blend until almost completely smooth.",
        "Turn off the blender and push down ingredients with a spatula or wooden spoon if needed.",
        "Add the remaining frozen watermelon and continue to blend until smooth.",
        "Add 1–2 tablespoons of water if needed to adjust consistency.",
        "Pour into a glass and garnish with a cucumber slice."
    ]
    },
    {
    id: 32,
    title: "Papaya Banana Smoothie",
    category: "Smoothies",
    image: "Images/Papaya Banana Smoothie.png",
    ingredients: [
        "1 cup milk",
        "½ cup yogurt",
        "½ teaspoon vanilla extract",
        "1 ripe banana",
        "½ cup chopped papaya",
        "4–5 ice cubes"
    ],
    steps: [
        "Add milk to the blender.",
        "Add yogurt.",
        "Add vanilla extract.",
        "Peel and add the banana.",
        "Add chopped papaya.",
        "Add ice cubes.",
        "Blend until smooth.",
        "Pour into a large glass and serve."
    ]
    },
]
