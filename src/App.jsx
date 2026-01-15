import { TodoInput } from "./components/TodoInput";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => { document.body.style.margin = '0'; }, []); //This is for removing the margin top in the body, eventhough I have margin 0 in GlobalStyle. 

  return (
    <>
      <TodoInput />
    </>
  );
};
