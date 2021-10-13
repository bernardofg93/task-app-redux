import React from "react";
import { CardTask } from "./components/CardTask";
import { FloatButton } from "./components/FloatButton";
import { NavBar } from "./components/NavBar";
import Container from '@material-ui/core/Container';
import { ModalTask } from "./components/ModalTask";
import { store } from "./store/store";
import { Provider } from "react-redux";


export const TaskRedux = () => {
    return (
        <Provider store={store}>
            <NavBar />
            <Container fixed>
                <FloatButton />
                <CardTask />
                <ModalTask />
            </Container>
        </Provider>
    )
}