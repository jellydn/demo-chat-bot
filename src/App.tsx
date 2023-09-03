import {
    Button,
    ButtonGroup,
    Route,
    Router,
    Text,
    useText,
} from '@urban-bot/core';
import React, { useState } from 'react';

function Echo() {
    const [text, setText] = useState('Say something');

    useText(({ text }) => {
        setText(text);
    });

    return (
        <Text>
            <i>{text}</i>
        </Text>
    );
}

function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <ButtonGroup title={count} isNewMessageEveryRender={false}>
            <Button onClick={increment}>+1</Button>
            <Button onClick={decrement}>-1</Button>
        </ButtonGroup>
    );
}

export function App() {
    return (
        <>
            <Text>Welcome to IT Man Channel Bot! Type /echo or /counter.</Text>
            <Router>
                <Route path="/echo">
                    <Echo />
                </Route>
                <Route path="/counter">
                    <Counter />
                </Route>
            </Router>
        </>
    );
}
