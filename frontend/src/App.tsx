import "./globals.scss";
import { api } from "./lib/axios";
import { RoutesConfig } from "./routes/routes";

export function App() {
  function testeApi() {
    api.get("/finances").then(function (response) {
      console.log(response);
    });
  }

  testeApi();

  return (
    <>
      <RoutesConfig />
    </>
  );
}
