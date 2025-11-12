import { useDispatch } from "react-redux";
import { setBookingData } from "./bookingSlice";
import { useNavigate } from "react-router-dom";

export const useBookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(setBookingData(values));
    alert("Booking submitted successfully!");
    resetForm();
    navigate("/success");
  };

  return { handleSubmit };
};
