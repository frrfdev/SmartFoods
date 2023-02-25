import { api } from "./api";

import type { LoginData } from "../@types/LoginData";
import { API_ROUTES } from "../constants/apiRoutes";
import type { UserDataApi } from "../@types/api/UserData";
import type { CategoryDataApi } from "../@types/api/CategoryData";
import type { CategoryFormProps } from "../components/CategoryForm/CategoryForm.types";
import type { UserFormProps } from "../components/UserForm/UserForm.types";
import { Converter } from "../utils/apiDataConverter";

export const ENDPOINTS = {
  login: async (loginData: LoginData) =>
    Converter.apiResponse.userDataApiToUserData(
      await api.post<UserDataApi>(
        API_ROUTES.LOGIN,
        Converter.apiRequest.loginDataToLoginDataApi(loginData)
      )
    ),
  category: {
    index: async () => api.get<Array<CategoryDataApi>>(API_ROUTES.CATEGORY),
    show: async (id: string) =>
      api.get<CategoryDataApi>(`${API_ROUTES.CATEGORY}/${id}`),
    delete: async (id: string) =>
      api.delete<CategoryDataApi>(`${API_ROUTES.CATEGORY}/${id}`),
    store: async (categoryData: CategoryFormProps) =>
      api.post<CategoryDataApi>(API_ROUTES.CATEGORY, categoryData),
    update: async (id: string, categoryData: CategoryFormProps) =>
      api.put<CategoryDataApi>(`${API_ROUTES.CATEGORY}/${id}`, categoryData),
  },
  user: {
    index: async () => api.get<Array<UserDataApi>>(API_ROUTES.USER),
    show: async (id: string) =>
      api.get<UserDataApi>(`${API_ROUTES.USER}/${id}`),
    delete: async (id: string) =>
      api.delete<UserDataApi>(`${API_ROUTES.USER}/${id}`),
    store: async (userData: UserFormProps) =>
      api.post<UserDataApi>(API_ROUTES.USER, userData),
    update: async (id: string, userData: UserFormProps) =>
      api.put<UserDataApi>(`${API_ROUTES.USER}/${id}`, userData),
  },
};
