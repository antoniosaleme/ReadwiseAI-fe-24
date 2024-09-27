import type { ReadwiseResponse } from "@/interfaces";
import { api } from "../api/apiOpenai";
import { CustomError } from "../utils/errors";

export const fetchContentByTopic = async (topic: string) => {
  try {
    const response = await api.get(`/topic/${topic}`);
    return response.data as ReadwiseResponse;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw (
      CustomError.errorHandler(error) ||
      CustomError.InternalServerError("Error fetching products")
    );
  }
};
