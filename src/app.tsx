import { css } from "styled-system/css";
import { Button } from "@/components";
import { Button as ButtonDS } from "./index";

export function App() {
  return (
    <>
      <span
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          color: "green.300",
        })}
      >
        Hello 🐼!
      </span>
      <br />
      <Button>Button Panda 🐼</Button>
      <ButtonDS>Button</ButtonDS>
    </>
  );
}
