import axios from "axios";
import apis from "../services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useProfile = (userId) => {
  const [myDetails, setMyDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfileDetails = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const res = await axios.get(`${apis.profile}${userId}`);
    //   console.log("profiler",res)
      if (res?.data?.status === 200 || res?.data?.status === "200") {
        setMyDetails(res?.data);
      }
    } catch (err) {
      setError(err);
      toast.error(err.message || "Failed to fetch profile details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileDetails();
  }, [userId]);
  return { myDetails, loading, error, fetchProfileDetails };

//   return { myDetails, loading, error, refetch: fetchProfileDetails };
};

export default useProfile;

