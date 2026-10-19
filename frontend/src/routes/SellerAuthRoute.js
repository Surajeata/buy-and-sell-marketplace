import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Layout/Loader";

const SellerAuthRoute = ({ children }) => {
  const { isLoading, isSeller, seller } = useSelector((state) => state.seller);

  if (isLoading === true) {
    return <Loader />;
  }
  else{// If seller is not logged in, redirect them to the shop login page
    if (!isSeller) {
    
     return <Navigate to={`/shop-login`} replace />;
  } }

  return children;
};

export default SellerAuthRoute;
