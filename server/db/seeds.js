use endangered;
db.dropDatabase();

db.animals.insertMany([
  {
    animal_name: "Giant Panda",
    species: "Ailuropoda melanoleuca",
    pictures: "images/animal_pics/panda.jpeg",
    pictures_detail: "images/animal_detail_pics/panda_detail.jpeg",
    pictures_fact: "images/animal_fact_pics/panda_fact.jpeg",
    pictures_locator: "images/animal_locator_pics/pandalocator.jpeg",
    description: "Giant panda bears are native to south central China and lives mainly high in the mountains in cool and wet bamboo forests which is their primary source of food. Pandas are skilled tree-climbers and good swimmers. They have been driven out of the lowland areas where they once lived because of farming and deforestation making it a vulnerable species. Improved conservation efforts and better survey methods have managed to increase the wild panda population.",
    locations: "China",
    habitat: "Bamboo forests on humid mountains",
    population: "2,000",
    status: "Vulnerable",
    fun_fact: "When a panda is born it is completely pink and hairless! The black and white fur starts growing when they are around three weeks old.",
    locator: ["34.51361534847529", "102.69247855623375"],

  },

  {
    animal_name: "Bengal tiger",
    species: "Panthera tigris",
    pictures: "images/animal_pics/tiger.jpeg",
    pictures_detail: "images/animal_detail_pics/tigerdetail.jpeg",
    pictures_fact: "images/animal_fact_pics/tiger_fact.jpeg",
    pictures_locator: "images/animal_locator_pics/tigerlocator.jpeg",
    description: "The Bengal tiger lives in the Indian subcontinent. The species is threatened by poaching and loss of habitat caused by climate change. The Bengal tiger is one of the biggest wild cats alive and is the national animal of India and Bangladesh.",
    locations: "Most live in India, with a few hundred in Bangladesh, Nepal and Bhutan",
    habitat: "Prime lowland forest, and they also thrive in mangrove swamps",
    population: "2,500",
    status: "Endangered",
    fun_fact: "Bengal tigers each have a unique pattern on their fur, no two have the same stripes!",
    locator: ["24.294280580413883", "88.53156685633614"],
  },
  {
    animal_name: "Asian elephant",
    species: "Elephas maximus",
    pictures: "images/animal_pics/elephant.jpeg",
    pictures_detail: "images/animal_detail_pics/elephant_detail.jpeg",
    pictures_fact: "images/animal_fact_pics/elephant_fact.jpeg",
    pictures_locator: "images/animal_locator_pics/elephantlocator.jpeg",
    description: "The Asian elephant is the largest living land animal in Asia. Asian elephants are very sociable and form groups of six to seven related females that are led by the oldest female, the matriarch. It is primarily threatened by loss of habitat and poaching.",
    locations: "Southeast Asia, from India and Nepal in the west to Borneo in the south",
    habitat: "Forests",
    population: "35,000",
    status: "Endangered",
    fun_fact: "Throughout their lifetime, Asian elephants go through six sets of teeth!",
    locator: ["11.901294670854883", "78.8818769644848"],
  },
  {
    animal_name: "Gorilla",
    species: "Troglodytes gorilla",
    pictures: "images/animal_pics/gorilla.jpeg",
    pictures_detail: "images/animal_detail_pics/gorilladetail.jpeg",
    pictures_fact: "images/animal_fact_pics/gorillafact.jpeg",
    pictures_locator: "images/animal_locator_pics/gorillalocator.jpeg",
    description: "Gorillas are apes that live in the forests of central Sub-Saharan Africa. They are the largest living primates and their DNA is highly similar to that of humans. A female will give birth to only one baby every four to six years, and only three or four over her entire lifetime, which makes it difficult for gorillas to recover from population declines. Both gorilla species have been decreasing in numbers for decades, but have seen some increase in the recent years due to conservation efforts.",
    locations: "Congo",
    habitat: "Tropical or sub-tropical forests",
    population: "100,000",
    status: "Critically endangered",
    fun_fact: "Some gorillas in captivity have learned to communicate with humans using sign language!",
    locator: ["-0.46355795092012997", "23.552201804629817"],
  },
  {
    animal_name: "Snow leopard",
    species: "Panthera uncia",
    pictures: "images/animal_pics/snow_leopard.jpeg",
    pictures_detail: "images/animal_detail_pics/snowleopard_detail.jpeg",
    pictures_fact: "images/animal_fact_pics/snowleopard_fact.jpeg",
    pictures_locator: "images/animal_locator_pics/leopardlocator.jpeg",
    description: "The snow leopard is a large cat that lives in high mountains. It can climb steep slopes and leap six times the length of its body. The snow leopard habitat range continues to decline due to human settlement and increased use of grazing space.",
    locations: "Eastern Afghanistan, Mongolia and western China",
    habitat: " Alpine and subalpine mountain ranges",
    population: "3,500 - 7,000",
    status: "Vulnerable",
    fun_fact: "Snow leopards are nicknamed 'ghosts of the mountain' because they are so rarely seen and spend most of their lives in solitude!",
    locator: ["36.721157123856294", "75.88707554071537"],
  },
  {
    animal_name: "Orangutan",
    species: "Pongo pygmaeus",
    pictures: "images/animal_pics/orangutan.jpeg",
    pictures_detail: "images/animal_detail_pics/orangutan_detail.jpeg",
    pictures_fact: "images/animal_fact_pics/orangutan_fact.jpeg",
    pictures_locator: "images/animal_locator_pics/orangutanlocator.jpeg",
    description: "Orangutans are among the world's largest tree-climbing mammals and are closely related to humans. They are extremely patient and intelligent, as well as very observant and inquisitive. Their rainforest habitats are disappearing at an alarming rate because of deforestation and clearing of the land. This makes their extinction in the wild likely in the next 10 years.",
    locations: "Indoneasia and Borneo",
    habitat: "Rainforests",
    population: "110,000",
    status: "Critically engangered",
    fun_fact: "Orangutans create tools using twigs to collect termites from holes to eat!",
    locator: ["-0.5075762249651253", "112.70316860164365"],
  },

    {
  
    animal_name: "Blue whale",
    species: "Balaenoptera musculus",
    pictures: "images/animal_pics/whale.jpeg",
    pictures_detail: "images/animal_detail_pics/whale_detail.jpeg",
    pictures_fact: "images/animal_fact_pics/whale_fact.jpeg",
    pictures_locator: "images/animal_locator_pics/whalelocator.jpeg",
    description: "Blue whales are the largest animal that has ever existed. Blue whales are at the top of the food chain and play an important role in the health of the marine environment. During the 20th century, the species was almost exterminated due to commercial whaling. It slowly recovered following the global whaling ban, but remains threatened by environmental change, habitat loss and toxins.",
    locations: "All major oceans",
    habitat: "deep water",
    population: "10,000-25,000",
    status: "Endangered",
    fun_fact: "In the wild, blue whales can live as long as 90 years!",
    locator: ["30.07234753595548", "-129.88357395959068"],
  },
  {
    animal_name: "Green sea turtle",
    species: "Chelonia mydas",
    pictures: "images/animal_pics/seaturtle.jpeg",
    pictures_detail: "images/animal_detail_pics/turtledetail.jpeg",
    pictures_fact: "images/animal_fact_pics/turtlefact.jpeg",
    pictures_locator: "images/animal_locator_pics/turtlelocator.jpeg",
    description: "Green sea turtles are large air-breathing reptiles and are one of the Earth's most ancient creatures. They play a vital role in the balance of marine habitats. Nearly all species of sea turtle are endangered. They suffer from poaching, over-exploitation and habitat destruction. It is hard to estimate their population as they are very difficult to track.",
    locations: "Atlantic, Pacific and Indian oceans",
    habitat: "Shallow coastal waters",
    population: "100,000",
    status: "Endangered",
    fun_fact: "Green sea turtles can hold their breath underwater for 5 hours!",
    locator: ["-5.7953812553865705", "70.30973006900552"],
  },
  {
    animal_name: "Black rhino",
    species: "Diceros bicornis",
    pictures: "images/animal_pics/rhino.jpeg",
    pictures_detail: "images/animal_detail_pics/rhinodetail.jpeg",
    pictures_fact: "images/animal_fact_pics/rhino_fact.jpeg",
    pictures_locator: "images/animal_locator_pics/rhinolocator.jpeg",
    description: "Populations of black rhinos declined by 98% in the 20th century because of European hunters and settlers. Since then, the species has made a comeback from the brink of extinction, but is still considered critically endangered because of poaching and black-market trafficking of rhino horn.",
    locations: "Eastern and southern Africa",
    habitat: "Semi-Desert savannah, woodlands, forests, wetlands",
    population: "5,000",
    status: "Critically endangered",
    fun_fact: "Black rhinos run on their toes and can reach speeds of 35 miles per hour!",
    locator: ["-22.715242443569938", "30.07906914046745"],
  },
  {
    animal_name: "African penguin",
    species: "Spheniscus demersus",
    pictures: "images/animal_pics/african_penguin.jpeg",
    pictures_detail: "images/animal_detail_pics/penguin_detail.jpeg",
    pictures_fact: "images/animal_fact_pics/penguinfact.jpeg",
    pictures_locator: "images/animal_locator_pics/penguinlocator.jpeg",
    description: "The African penguin is the only penguin species of Africa. They can swim with a speed of 20 km/h and can dive up to 130 m deep. The species has been in decline since the beginning of the industrial age because of overfishing, habitat destruction, coastal development and a number of other human influences.",
    locations: "South-western coast of Africa",
    habitat: "Flat sandy areas with sparse or abundant vegetation, or steep, rocky sites with sparse vegetation",
    population: "50,000",
    status: "Endangered",
    fun_fact: "African penguins can sleep while standing up!",
    locator: ["-34.24898862515669", "25.302979680633296"],
  },
  {
    animal_name: "Red Panda",
    species: "Ailurus fulgens",
    pictures: "images/animal_pics/red_panda.jpeg",
    pictures_detail: "images/animal_detail_pics/redpanda_detail.jpeg",
    pictures_fact: "images/animal_fact_pics/redpandafact.jpeg",
    pictures_locator: "images/animal_locator_pics/redpandalocator.jpeg",
    description: "The red panda is a mammal native to the eastern Himalayas and southwestern China. It's about the size of a house cat, but has a long and bushy tail. They are very skillful and acrobatic animals that predominantly stay in trees. The species is listed as Endangered and continues to decline due to the loss of nesting trees, bamboo loss and poaching.",
    locations: "Eastern Himalayas, from Nepal to China",
    habitat: "Temperate forests",
    population: "10,000",
    status: "Endangered",
    fun_fact: "Red pandas lick themselves clean, just like cats do!",
    locator: ["28.01398012500806", "90.80251459985779"],
  },
  {
    animal_name: "Polar bear",
    species: "Ursus maritimus",
    pictures: "images/animal_pics/polar_bear.jpeg",
    pictures_detail: "images/animal_detail_pics/polarbeardetail.jpeg",
    pictures_fact: "images/animal_fact_pics/polarbearfact.jpeg",
    pictures_locator: "images/animal_locator_pics/polarbearlocator.jpeg",
    description: "The polar bear is a large bear classified as a marine mammal because it spends most of its live on the sea ice of the Arctic Ocean. Polar bears have a thick layer of body fat and a water-repellant coat that insulates them from the cold air and water. Their numbers are in decline because of ongoing loss of their sea ice habitat resulting from climate change.",
    locations: "Arctic circle",
    habitat: "Annual sea ice of the Arctic inter islands",
    population: "estimated at 30,000",
    status: "Vulnerable",
    fun_fact: "Polar bears have black skin under their white fur coats, this helps them to keep heat from the sun!",
    locator: ["79.45222766702923", "17.030418490108687"],
  }
]);






db.quiz.insertMany([
{
  Question: "What to do if a Bengal tiger is chasing you?",
  
  answerOptions: 
      [
    "A.  Back away slowly",
    "B.  Look it in the eye",
    "C.  Start singing the lion king theme tune",
    "D.  Pretend to be a tiger with a mighty roar"
      ],
    correct: 0
},  

{      
    Question: "How to elephants communicate?",
     
   answerOptions: 
         [
          "A.  They’re telepathic ",
          "B.  They communicate via rumbles, bellow and moans",
          "C.  They do the elephant dance",
          "D.  They use sign language"
         ],
         correct: 1
},

{      
  Question: "How many Giant Pandas are left?",
   
 answerOptions: 
       [
        "A.  1864",
        "B.  1800",
        "C.  1709",
        "D.  3233"
       ],
       correct: 0
},

{      
  Question: "What is a group of Gorillas called?",
   
 answerOptions: 
       [
        "A.  A pack",
        "B.  Troops or bands",
        "C.  The primate massive",
        "D.  Backstreet boys"
       ],
       correct: 1
},

{      
  Question: "How far can a snow leopard jump?",
   
 answerOptions: 
       [
         "A.  20 feet", 
         "B.  10 feet", 
         "C.  50 feet",
         "D.  80 feet"
       ],
       correct: 0
},

{      
  Question: "Which one of these places are you most likely to find a Orangutan?",
   
 answerOptions: 
       [
        "A.  Edinburgh",
        "B.  Codeclan",
        "C.  South-east Asia",
        "D.  Canada"
       ],
       correct: 2
},

{      
  Question: "Where does the blue whale live?",
   
 answerOptions: 
       [
         "A.  Aberdeen",
         "B.  Loch Lomond",
         "C.  The River",
         "D.  The Ocean"
        ],
      correct: 3
},

{      
  Question: "What is the lifespan of a green sea turtle?",
   
 answerOptions: 
       [
         "A.  A.	Up to 20 years",
         "B.  A.	Up to 80 years",
         "C.  A.	Up to 200 years",
         "D.  A.	Up to 400 years"
       ],
       correct: 1
},

{      
  Question: "What is a group of Rhinos called?",
   
 answerOptions: 
       [
         "A.  A pack",
         "B.  The dirty horn gang",
         "C.  A smoke",
         "D.  A crash"
       ],
      correct: 3
},

{      
  Question: "How fast can a African penguin swim?",
   
 answerOptions: 
       [
         "A.  A.	110 kph",
         "B.  A.	50 kph", 
         "C.  A.	80 kph",
         "D.  A.	20 kph"
       ],
       correct: 3
}, 

{      
  Question: "When do red pandas sleep?",
   
 answerOptions: 
       [
        "A.  Bedtime",
        "B.  All the time",
        "C.  Night time",
        "D.  Sleepy time"
       ],
       correct: 1
},

{      
  Question: "How do polar bears keep warm?",
   
 answerOptions: 
       [
        "A.  They wear warm hats and scarves ",
        "B.  Lots of jumping about",
        "C.  Sunbath as often as possible",
        "D.  They have a thick layer of fat and a water-repellant coat"
       ],
       correct: 1
}
]);


