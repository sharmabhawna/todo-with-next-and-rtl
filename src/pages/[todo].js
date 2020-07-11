import React from 'react';
import styled from "styled-components";
import API from "../API/todo";
import { Description, Title } from "../components/Common"
import Checkbox from "../components/Checkbox";

export const getServerSideProps = async (context) => {
  let todo = await API.getTodoById(context.params.todo);
  return { props: { todo } }
}

export default function Todo({ todo }) {
  return (
    <TodoCard>
      <Title>{ todo.title }</Title>
      <Description>{ todo.description }</Description>
      <Tasks>
        {
          todo.tasks.map(task => <Checkbox label={ task.title } key={ task.id }/>)
        }
      </Tasks>
    </TodoCard>
  );
};

const TodoCard = styled.main`
  width: 40rem;
  margin-top: 8rem;
  margin-left: 35rem;
  text-align: center;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;

const Tasks = styled.div`
  margin-left: 16px;
  label {
    display: flex;
    margin-bottom: 10px;
    font-size: 20px;
    

    input {
      margin-right: 10px;
      font-size: 20px;
    }
  }
`;
