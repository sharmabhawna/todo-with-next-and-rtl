import React from 'react';
import styled from "styled-components";
import API from '../API/todo'
import TodoBrief from "../components/TodoBrief";

export const getServerSideProps = async () => {
  let todos = await API.getTodos();
  return { props: { todos } };
}

export default function Home({ todos }) {

  return (
    <>
      <Nav>
        <NavRight>
          <div>+</div>
        </NavRight>
      </Nav>
      <Todos>
        {
          todos.map(todo => <TodoBrief todo={ todo } key={ todo.id }/>)
        }
      </Todos>
    </>
  );
};

const Nav = styled.div`
  font-size: 40px;
  color: dimgray;
  overflow: hidden;
`;

const NavRight = styled.div`
  float: right;
  margin-right: 30px;
`;

const Todos = styled.div` 
  margin-top: 1rem;
  margin-left: 5rem;
  
  display: flex;  
  flex-wrap: wrap;
`;

