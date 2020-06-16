import React from "react";
import ReactDOM from "react-dom";
// import HelloMessage from "./components/HelloMessage/HelloMessageFunctional";
// import HelloMessage from "./components/Archive/HelloMessage/HelloMessage";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import RootRouter from "./pages/RootRouter";
import Chat from "./pages/Chats";
import "./index.css";

const theme = createMuiTheme({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
});

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <RootRouter />
            {/* <Layout>
                <Chat />
            </Layout> */}
            {/* <Menu open={true} /> */}
            {/* <CssBaseline /> */}
            {/* <HelloMessage name="Taylor" /> */}
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("hello-example")
);
