import React from "react";
import { useTodoStore } from "../stores/todoStore";
import styled from "styled-components";
import { colors } from "../styles/colors";


export const TodoItem = ({ todo }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const textId = `todo-text-${todo.id}`;

  return (
    <Item role="listitem" color={todo.color}>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        aria-labelledby={`todo-text-${todo.id}`}
        onChange={() => toggleTodo(todo.id)}
      />
      <Text
        id={textId}
        completed={todo.completed}
        hasColor={!!todo.color}>{todo.text}
      </Text>
      <DeleteBtn
        aria-label={`Remove: ${todo.text}`}
        hasColor={!!todo.color}
        type="button"
        onClick={() => removeTodo(todo.id)}>
        🗑
      </DeleteBtn>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${(p) => p.color || "transparent"};
  font-family: inherit; 
  margin: 10px 0;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  flex: 0 0 auto;
`;

const Text = styled.span`
  flex: 1;
  font-size: 16px;       
  font-weight: 400;     
  color: ${colors.textPrimary};
  text-decoration: ${(p) => (p.completed ? "line-through" : "none")};
  word-break: break-word;
  font-family: inherit;
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: ${colors.textPrimary};
  padding: 4px;

  &:focus-visible {
    outline: 2px solid ${colors.header};
    outline-offset: 2px;
  }
`;