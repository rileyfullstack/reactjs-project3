const normalizeCardForServer = (cardFromUser, id, user_id) => ({ 
        _id: id,
        title: cardFromUser.title,
        subtitle: cardFromUser.subtitle,
        description: cardFromUser.description,
        phone: cardFromUser.phone,
        email: cardFromUser.email,
        web: cardFromUser.web,
        image: {
          url: cardFromUser.url,
          alt: cardFromUser.alt,
        },
        address: {
          state: cardFromUser.state,
          country: cardFromUser.country,
          street: cardFromUser.street,
          houseNumber: cardFromUser.houseNumber,
          city: cardFromUser.city,
          zip: cardFromUser.zip,
        },
        bizNumber: cardFromUser.bizNumber,
        likes: cardFromUser.likes,
        user_id: user_id,
});

export default normalizeCardForServer;