const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid"); 

crossorigin="use-credentials" 
const app = express();
app.use(cors({ origin: "*" }));
const key = "secret";
app.use(express.json());

const cards = [
  { //CodeWave Technologies, created by Admin
    _id: "kjhgfdsa78909876poiuytrewq",
    title: "CodeWave Technologies",
    subtitle: "Unleashing Digital Potential",
    description: "CodeWave Technologies is a forward-thinking tech company dedicated to unleashing the digital potential of businesses. With our expertise in software development, cloud solutions, and data analytics, we empower organizations to optimize operations, enhance customer experiences, and drive growth. Our passionate team of technology enthusiasts is committed to delivering tailored solutions that revolutionize the way businesses operate.",
    phone: "050-3333333",
    email: "info@example.com",
    web: "https://www.example.com",
    image: {
      url: "https://images.pexels.com/photos/257856/pexels-photo-257856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "image"
    },
    address: {
      state: "London",
      country: "United Kingdom",
      street: "Innovation Street",
      houseNumber: 789,
      city: "Techborough",
      zip: "SW1A 1AA"
    },
    bizNumber: 3333333,
    likes: [],
    user_id: "4235234234mfnjrb2h3vbry23"
  },  
  { //InnoTech Solutions, created by Admin
    _id: "wqwerwqsdf43534545dfgdg",
    title: "InnoTech Solutions",
    subtitle: "Driving Innovation through Technology",
    description: "InnoTech Solutions is a leading technology company that focuses on driving innovation through cutting-edge software and hardware solutions. Our team of skilled engineers and designers are dedicated to creating transformative technologies that revolutionize industries. From artificial intelligence to Internet of Things, we empower businesses to thrive in the digital era.",
    phone: "050-2222222",
    email: "info@example.com",
    web: "https://www.example.com",
    image: {
      url: "https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "image"
    },
    address: {
      state: "New York",
      country: "United States",
      street: "Innovation Avenue",
      houseNumber: 456,
      city: "Techville",
      zip: 12345
    },
    bizNumber: 2222222,
    likes: [],
    user_id: "4235234234mfnjrb2h3vbry23"
  },  
  { //TechGenius Solutions, created by Business
    _id: "eafeswfwr2326346tf3254d",
    title: "TechGenius Solutions",
    subtitle: "Empowering Innovation for a Connected Future",
    description: "We are a cutting-edge technology company specializing in advanced software and hardware solutions.",
    phone: "050-1111111",
    email: "info@example.com",
    web: "https://www.example.com",
    image: {
      url: "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Business Card Image"
    },
    address: {
      state: "California",
      country: "United States",
      street: "Tech Boulevard",
      houseNumber: 123,
      city: "Innovationville",
      zip: 98765
    },
    bizNumber: 1111111,
    likes: [],
    user_id: "4235234234mfnjasdasdry23"
  },
];

const users = [
  {
    name: {
      first: "Admin",
      middle: "",
      last: "",
    },
    phone: "055-5555555",
    email: "admin@admin.com",
    password: "Abc123!",
    address: {
      state: "Haifa",
      country: "Israel",
      city: "Haifa",
      street: "HaNasi",
      zip: 123456,
      houseNumber: 12,
    },
    image: {
      url: "www.example.com",
      alt: "profile image",
    },
    isBusiness: true,
    isAdmin: true,
    user_id: "4235234234mfnjrb2h3vbry23",
  },
  {
    name: {
      first: "Business",
      middle: "",
      last: "",
    },
    phone: "055-5555555",
    email: "business@business.com",
    password: "Abc123!",
    address: {
      state: "Haifa",
      country: "Israel",
      city: "Haifa",
      street: "HaNasi",
      zip: 123456,
      houseNumber: 12,
    },
    image: {
      url: "www.example.com",
      alt: "profile image",
    },
    isBusiness: true,
    isAdmin: false,
    user_id: "4235234234mfnjasdasdry23",
  },
  {
    name: {
      first: "User",
      middle: "",
      last: "",
    },
    phone: "055-5555555",
    email: "user@user.com",
    password: "Abc123!",
    address: {
      state: "Haifa",
      country: "Israel",
      city: "Haifa",
      street: "HaNasi",
      zip: 123456,
      houseNumber: 12,
    },
    image: {
      url: "www.example.com",
      alt: "profile image",
    },
    isBusiness: false,
    isAdmin: false,
    user_id: "4235234234mfnjasdasdry24",
  },
];
const verifyToken = (tokenFromClient) => {
  try {
    const userDataFromPayload = jwt.verify(tokenFromClient, key);
    return userDataFromPayload;
  } catch (error) {
    return null;
  }
};

app.get("/cards", (req, res) => {
  //res.status(404).send("Page not found");
  //setTimeout(() => res.json(cards), 3000);
  res.json(cards);
});

app.get("/cards/my-cards", (req, res) => {
  const tokenFromClient = req.header("x-auth-token");
  if (tokenFromClient) {
    const userData = verifyToken(tokenFromClient);
    const user_id = userData.id; // Assume user_id is passed as a parameter in the body
    const userCards = cards.filter((c) => c.user_id === user_id);
    res.json(userCards);
  } else {
    res.status(404).send("login first");
  }
});

app.get("/cards/:cardId", (req, res) => {
  const cardId = req.params.cardId;
  const card = cards.find((card) => card._id === cardId);
  if (!card) {
    res.status(404).json({ error: "Card not found" });
  } else {
    res.json(card);
  }
});

app.post("/cards", (req, res) => {
  // Add a new ID to the card object
  const newId = Date.now().toString();
  const newCardWithId = { ...req.body, _id: newId };

  // Add the new card to the cards array
  cards.push(newCardWithId);

  // Send the new card object back to the client
  res.json(newCardWithId);
});

app.put("/cards/:id", (req, res) => {
  const cardIndex = cards.findIndex((c) => c._id === req.params.id);
  if (cardIndex === -1) {
    res.status(404).send("Card not found");
  } else {
    const updatedCard = {
      ...cards[cardIndex],
      ...req.body,
      _id: req.params.id,
    };
    cards[cardIndex] = updatedCard;
    res.json(updatedCard);
  }
});

app.patch("/cards/:id", (req, res) => {
  const cardIndex = cards.findIndex((c) => c._id === req.params.id);
  if (cardIndex === -1) {
    res.status(404).send("Card not found");
  } else {
    const tokenFromClient = req.header("x-auth-token");
    if (tokenFromClient) {
      const userData = verifyToken(tokenFromClient);
      const user_id = userData.id;
      const card = cards[cardIndex];
      const userLiked = card.likes.includes(user_id);
      const updatedLikes = userLiked
        ? card.likes.filter((id) => id !== user_id)
        : [...card.likes, user_id];
      const updatedCard = { ...card, likes: updatedLikes };
      cards[cardIndex] = updatedCard;
      console.log(updatedCard);
      res.json(updatedCard);
    } else {
      res.status(404).send("Log in first");
    }
  }
});

app.delete("/cards/:id", (req, res) => {
  const cardIndex = cards.findIndex((c) => c._id === req.params.id);
  if (cardIndex === -1) {
    res.status(404).send("Card not found");
  } else {
    const deletedCard = cards.splice(cardIndex, 1)[0];
    res.json(deletedCard);
  }
});

app.post("/users/login", (req, res) => {
  console.log(req.body);
  //const tokenFromClient = req.header("x-auth-token");
  // if (tokenFromClient) {
  //   const userData = verifyToken(tokenFromClient);
  //   if (userData) {
  //     // User is already logged in, so send back the same token
  //     res.send(tokenFromClient);
  //     return;
  //   }
  // }

  // User is not logged in, so check if the email and password are valid
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    // User not found or password incorrect
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  // User found, so generate a new token and send it back
  const userDataForToken = {
    email: user.email,
    isAdmin: user.isAdmin,
    isBusiness: user.isBusiness,
    firstName: user.name.first,
    id: user.user_id,
  };
  const token = jwt.sign(userDataForToken, key);
  res.send(token);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.user_id = uuidv4(); // generate a new UUID and add it to the newUser object
  users.push(newUser);
  res.status(201).send({ message: "User added successfully." });
});

const PORT = 8182;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
