import { AxiosInstance } from "../../utils/AxiosInstance";

export const getDishList = async () => {
  try {
    const dishes = await AxiosInstance.get("/api/dishes");

    return dishes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
