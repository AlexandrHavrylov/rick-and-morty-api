import { Btn } from "./Button.styled";

export default function LoadMore({ onClick, page }) {
  const handeClick = () => {
    const updatedPage = page + 1;
    onClick(updatedPage);
  };

  return (
    <Btn type="button" onClick={handeClick}>
      Load More
    </Btn>
  );
}
