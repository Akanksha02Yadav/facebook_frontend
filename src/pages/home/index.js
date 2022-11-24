import { useState } from "react";
import { useRef } from "react";
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const element = useRef();
  useClickOutside(element, () => {
    setVisible(false);
    // console.log("you clicked outside");
  });
  return (
    <div>
      <Header />
      {visible && <div className="card" ref={element}></div>}
    </div>
  );
}
