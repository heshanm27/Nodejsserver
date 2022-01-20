import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import { publicRequest, userRequest } from "../axiosRequestMethod/defaultAxios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.userDetails));
    console.log(res);
    console.log(res.data);
  } catch (err) {
    dispatch(loginFailure());
    console.log("api", err);
  }
};
