"use client";
import { useRefreshTokenMutation } from "@/src/redux/features/auth";
import {
  setUser,
  TUser,
  useCurrentUser,
} from "@/src/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
// import { getCurrentUser } from "@/src/utils/getCurrentUser";
import { verifyToken } from "@/src/utils/VerifyToken";
import { useEffect } from "react";

const DetectReload = () => {
  const [getRefreshTToken] = useRefreshTokenMutation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser) as TUser;

  const handleReload = async () => {
    const res = await getRefreshTToken("").unwrap();
    let decodedUser = verifyToken(res.data) as TUser;
    dispatch(
      setUser({
        user: { ...user, status: decodedUser.status },
        token: res.data,
      })
    );
  };

  useEffect(() => {
    // Call handleReload when the site loads
    if (user) {
      handleReload();
    }
  }, []); // Empty dependency array means it only runs on initial load

  return <></>;
};

export default DetectReload;
