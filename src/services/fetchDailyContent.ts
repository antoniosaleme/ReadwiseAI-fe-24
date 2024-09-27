import type { ReadwiseResponse } from "@/interfaces";
import { api } from "../api/apiOpenai";
import { CustomError } from "../utils/errors";

export const fetchDailyContent = async () => {
  try {
    const response = await api.get(`/generated-texts/topics-by-date`, {});
    return response.data as ReadwiseResponse[];
  } catch (error) {
    console.error("Error fetching products:", error);

    throw (
      CustomError.errorHandler(error) ||
      CustomError.InternalServerError("Error fetching products")
    );
  }
};
