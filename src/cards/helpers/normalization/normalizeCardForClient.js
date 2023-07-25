const normalizeCardForClient = (cardFromServer) => ({ 
    title: cardFromServer.title,
    subtitle: cardFromServer.subtitle,
    description: cardFromServer.description,
    phone: cardFromServer.phone,
    email: cardFromServer.email,
    web: cardFromServer.web,
    url: cardFromServer.image.url,
    alt: cardFromServer.image.alt,
    state: cardFromServer.address.state,
    country: cardFromServer.address.country,
    city: cardFromServer.address.city,
    street: cardFromServer.address.street,
    houseNumber: cardFromServer.address.houseNumber,
    zip: cardFromServer.address.zip,
    bizNumber: cardFromServer.bizNumber,
    likes: cardFromServer.likes,
  });
  
  export default normalizeCardForClient;