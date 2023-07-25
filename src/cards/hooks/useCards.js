import { useCallback, useState } from "react";
import {
  changeLikeStatus,
  deleteCard,
  editCard,
  getCards,
  getMyCards,
  createCard,
  getCard,
} from "../services/cardApiService";
import { useSnack } from "../../providers/SnackBarProvider";
import { useUser } from "../../users/providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import normalizeCardForServer from "../helpers/normalization/normalizeCardForServer";
import { useNavigate } from "react-router-dom";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setSnack } = useSnack();
  const [card, setCard] = useState();
  const { user } = useUser();
  useAxios();
  const navigate = useNavigate();

  const handleGetCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      setCards(card);
      setCard(card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const normlizedCard = normalizeCardForServer(cardFromClient, cardId, user.id);
      const card = await editCard(cardId, normlizedCard);
      await navigate(-1);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);
  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const normlizedCard = normalizeCardForServer(cardFromClient, null, user.id); //id for the card is null because it is a new card and gets id from the server
      const card = await createCard(normlizedCard);
      navigate(-1);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);

    }
  }, [user]);
  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleLikeCard = useCallback(async (cardId) => {
      try {
        const card = await changeLikeStatus(cardId);
      } catch (error) {
        requestStatus(false, error, null);
      }
    }, []);

    const handleGetFavCards = useCallback(async () => {
      try {
        setLoading(true);
        const data = await getCards();
        const favCards = data.filter((data) => data.likes.includes(user.id));
        setCards(favCards);
        requestStatus(false, null, favCards);
      } catch (error) {
        requestStatus(false, error, null);
      }
    }, []);

    const handleGetCards = async (searchTerm) => {
      try {
          const data = await getCards();
          if (searchTerm) {
              const filteredCards = data.filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()));
              setCards(filteredCards);
          }
          else{
              setCards(data);
          }
          setLoading(false);
          setSnack("success", "Cards Updated");
      } catch (err) {
          setLoading(false);
          setError(err.message);
          setSnack("error", err.message); 
          requestStatus(false, error, null);
      }
  };

  const handleGetMyCards = async () => {
    try {
        const data = await getMyCards();
        setCards(data);
        setLoading(false);
        setSnack("success", "Cards loaded");
    } catch (err) {
        setLoading(false);
        setError(err.message);
        setSnack("error", err.message); 
    }
  };
  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);  
  const isCardLiked = async (cardId) => {
      const cards = await getCards();
      const likedCards = cards.filter((card) => card.likes.includes(user.id));
      for (let i = 0; i < likedCards.length; i++) {
        if (likedCards[i]._id === cardId) {
          return true;
        }
      }
      return false;
    }

  return {
      cards,
      isLoading,
      error,
      card,
      handleGetCards,
      handleDeleteCard,
      handleGetMyCards,
      handleLikeCard,
      handleGetFavCards,
      isCardLiked,
      handleUpdateCard,
      handleCreateCard,
      handleGetCard,
  };
}
