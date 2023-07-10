import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchShopFromServer } from "./state/actions";

const App = () => {
  const dispatch = useDispatch();
  const shopContent = useSelector((state) => state.shopContent);
  const isLoading = useSelector((state) => state.shopContent.isLoading);

  useEffect(() => {
    dispatch(fetchShopFromServer());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {shopContent.content &&
        shopContent.content.map((item) => (
          <img key={item.id} src={item.imgURL} alt="" />
        ))}
    </div>
  );
};

export default App;
