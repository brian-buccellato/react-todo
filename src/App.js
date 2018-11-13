import React from "react";
import "./App.scss";
import { TodoList } from "./components/todo-list.component/todo-list.component";
import { Header } from "./components/header.component/head.component";

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header title="Todo List App" />
                </div>
                <div>
                    <TodoList />
                </div>
            </div>
        );
    }
}

export default App;
