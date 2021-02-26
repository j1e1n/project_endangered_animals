use endangered;
db.dropDatabase();

db.animals.insertMany([
    {
        animal_name: "Giant Panda",
        species: "Ailuropoda melanoleuca",
        pictures: "url: /images/giant-panda_image.png",
        description: "Giant panda bear is native to south central China and lives mainly high in the mountains in cool and wet bamboo forests which is their primary source of food. Pandas are skilled tree-climbers and good swimmers. They have been driven out of the lowland areas where they once lived because of farming and deforestation making it a vulnerable species. Improved conservation efforts and better survey methods have managed to increase the wild panda population",
        locations: "China",
        habitat: "Bamboo forests on humid mountains",
        population: "2,000",
        status: "Vulnerable"
    },
    {
        animal_name: "Bengal tiger",
        species: "Panthera tigris",
        pictures: "url: /images/giant-panda_image.png",
        description: "The Bengal tiger lives in the Indian subcontinent. The species is threatened by poaching and loss of habitat caused by climate change. The Bengal tiger is one of the biggest wild cats alive and is the national animal of India and Bangladesh",
        locations: "Most live in India, with a few hundered in Bangladesh, Nepal and Bhutan",
        habitat: "Prime lowland forest, and they also thrive in mangrove swamps",
        population: "2,500",
        status: "Endangered",
    },
    {
        animal_name: "Asian elephant",
        species: "Elephas maximus",
        pictures: "url: /images/giant-panda_image.png",
        description: "The Asian elephant is the largest living land animal in Asia. Asian elephants are very sociable and form groups of six to seven related females that are led by the oldest female, the matriarch. It is primarily threatened by loss of habitat and poaching.",
        locations: "Southeast Asia, from India and Nepal in the west to Borneo in the south",
        habitat: "Forests",
        population: "35,000",
        status: "Endangered",
    },
    {
        animal_name: "Gorilla",
        species: "Troglodytes gorilla",
        pictures: "url: /images/giant-panda_image.png",
        description: "Gorillas are apes that live in the forests of central Sub-Saharan Africa. They are the largest living primates and their DNA is highly similar to that of humans. A female will give birth to only one baby every four to six years, and only three or four over her entire lifetime, which makes it difficult for gorillas to recover from population declines. Both gorilla species have been decreasing in numbers for decades, but have seen some increase in the recent years due to conservation efforts",
        locations: "Congo",
        habitat: "Tropical or sub-tropical forests",
        population: "100,000?",
        status: "Critically endangered",
    },
    {
        animal_name: "Snow leopard",
        species: "Panthera uncia",
        pictures: "url: /images/giant-panda_image.png",
        description: "The snow leopard is a large cat that lives in high mountains. It can climb steep slopes and leap six times the length of its body. The snow leopard habitat range continues to decline due to human settlement and increased use of grazing space",
        locations: "Eastern Afghanistan, Mongolia and western China",
        habitat: " Alpine and subalpine mountain ranges",
        population: "3,500 - 7,000",
        status: "Vulnerable",
    },
    {
        animal_name: "Orangutan",
        species: "Pongo pygmaeus",
        pictures: "url: /images/giant-panda_image.png",
        description: "Orangutans are among the world's largest tree-climbing mammals and are closely related to humans. They are extremely patient and intelligent, as well as very observant and inquisitive. Their rainforest habitats are disappearing at an alarming rate because of deforestation and clearing of the land. This makes their extinction in the wild likely in the next 10 years",
        locations: "Indoneasia and Malasyia",
        habitat: "Rainforests",
        population: "110,000",
        status: "Critically engangered",
    }
]);

