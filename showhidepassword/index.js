import { createRoot } from "react-dom/client";
import "./styles.css";

import { Buttons} from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
    <Buttons/>
    </>
);