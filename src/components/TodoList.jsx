import React from "react";
import { useTodoStore } from "../stores/todoStore";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";
import { colors } from "../styles/colors";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) return <Empty>“All quiet here… add your first task!📝”</Empty>

  return (
    <ListContainer role="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  )
};

const ListContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  background: ${colors.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const Empty = styled.p`
  text-align: center;
  color: ${colors.primary};
  font-size: 18px;
`;

