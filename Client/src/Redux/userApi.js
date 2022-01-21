import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import { publicRequest, userRequest } from "../axiosRequestMethod/defaultAxios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data.userDetails));
  } catch (err) {
    dispatch(loginFailure());
  }
};
