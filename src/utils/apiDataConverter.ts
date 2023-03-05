import type { AxiosResponse } from "axios";
import type { LoginData } from "../@types/LoginData";
import type { UserData } from "../@types/UserData";
import type { LoginDataApi } from "../@types/api/LoginData";
import type { UserDataApi } from "../@types/api/UserData";
import type { TermDataApi } from "../@types/api/TermData";
import type { TermData } from "../@types/TermData";

export const Converter = {
  apiRequest: {
    loginDataToLoginDataApi(loginData: LoginData): LoginDataApi {
      return {
        grant_type: loginData.accessType,
        UserName: loginData.email,
        Password: loginData.password,
      };
    },
  },
  // Convert from UserDataApi to UserData
  apiResponse: {
    userDataApiToUserData(
      response: AxiosResponse<UserDataApi>
    ): AxiosResponse<UserData> {
      return {
        ...response,
        data: {
          accessToken: response.data.access_token,
          tokenType: response.data.token_type,
          expiresIn: response.data.expires_in,
          userName: response.data.Usuario,
          name: response.data.Nome,
          id: response.data.Id,
          type: response.data.Tipo,
          profilePictureId: response.data.ID_FOTO,
          email: response.data.EMAIL,
        },
      };
    },
    termDataApiIndexToTermData(
      response: AxiosResponse<TermDataApi[]>
    ): AxiosResponse<TermData[]> {
      return {
        ...response,
        data: response.data.map((term) => ({
          id: term.ID,
          title: term.NOME,
          description: term.DESCRICAO,
          termId: term.ID_TERMO,
          term: {
            name: term.TERMO.NOME,
            id: term.TERMO.ID,
          },
        })),
      };
    },
  },
};
