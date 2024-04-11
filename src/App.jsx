import { ReactQueryDevtools } from "react-query/devtools";
import Routes from "./Routes/Routes";
export function App() {
  return (
    <div>
      <Routes />
      <ReactQueryDevtools initialIsOpen="false" position="bottom-right" />
    </div>
  );
}