import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';

import Task_a from "./Ch_3_Tasks/Task_a";
import Task_b from "./Ch_3_Tasks/Task_b";
import Parent from "./Ch_3_Tasks/Task_c/Parent";
import Language_optin from "./Ch_3_Tasks/Task_c/Language_optin";
import Task_d from "./Ch_3_Tasks/Task_d";
import Task_e from "./Ch_3_Tasks/Task_e";
import Task_f from "./Ch_3_Tasks/Task_f";
import Task_c from "./Ch_3_Tasks/Task_c"
import Task_g from "./Ch_3_Tasks/Task_g";
import Task_h from "./Ch_3_Tasks/Task_h/Task_h";


import { CartProvider } from './Ch_3_Tasks/Task_h/CartContext';
import Item from './Ch_3_Tasks/Task_h/Item';
import Cart from './Ch_3_Tasks/Task_h/Cart';
import NoteApp from './Ch_3_Project/NoteApp'

function App() {

  return (
    <>
      {/* <Task_a/> */}
      {/* <Task_b/> */}
      {/* <Parent /> */}
      {/* <Language_optin /> */}
      {/* <Task_d/> */}
      {/* <Task_e/> */}
      {/* <Task_f /> */}
      {/* <Task_c/> */}
      {/* <Task_g/> */}
      {/* <Task_h /> */}
<NoteApp/>

    </>
  );
}

export default App;
