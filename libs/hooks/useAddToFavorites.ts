import { useAppSelector } from "../store/hooks";
import { postData } from "../axios/backendServer";

export const useAddToFavorites = () => {
  const user = useAppSelector((state) => state.user);

  const addToFavorites = async (itemId: string | null, itemType: string) => {
    if (!itemId) {
      return {
        success: false,
      };
    }
    if (!user.token) {
      return {
        success: false,
      };
    }

    try {
      const response = await postData(
        "add-to-favourite",
        { item_id: itemId, type: itemType },
        { Authorization: `Bearer ${user.token}` }
      );

      return { success: true, data: response };
    } catch (error) {
      console.error("Error adding to favorites:", error);
      return { success: false };
    }
  };

  return { addToFavorites };
};
