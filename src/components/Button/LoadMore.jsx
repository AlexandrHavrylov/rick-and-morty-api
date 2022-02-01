import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/RickAndMorty/api-slice";
import { Btn } from "./Button.styled";

export default function LoadMore() {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.api.curentPage);
  const handeClick = () => {
    dispatch(setPage(curPage + 1));
  };

  return (
    <Btn type="button" onClick={handeClick}>
      Load More
    </Btn>
  );
}
