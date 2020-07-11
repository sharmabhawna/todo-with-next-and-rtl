import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import { Description, Title } from "./Common"

export default function TodoBrief({todo}) {
    let router = useRouter();

    const openTodo = (id) => {
        router.push("/[todo]", `/${id}`)
    }

    return (
        <TodoCard onClick={() => openTodo(todo.id)} data-testid="todo-brief">
            <Title>{todo.title}</Title>
            <Description>{todo.description}</Description>
            <Info>
                <span>Total: {todo.tasks.length}</span>
                <span>Done: {todo.tasks.filter(task => task.isDone).length}</span>
                <span>Pending: {todo.tasks.filter(task => !task.isDone).length}</span>
            </Info>
        </TodoCard>
    );
};

const TodoCard = styled.div`
  width: 25rem;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
