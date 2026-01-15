import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { useTodoStore } from "../stores/todoStore";
import { TodoList } from "./TodoList";

export const TodoInput = () => {
  const addTodo = useTodoStore((s) => s.addTodo);
  const totalCount = useTodoStore((s) => s.todos.length);
  const completedCount = useTodoStore((s) => s.todos.filter((t) => t.completed).length);
  const remainingCount = useTodoStore((s) => s.todos.filter((t) => !t.completed).length);
  const [todoText, setTodoText] = useState("")

  const handleAddTodo = () => {
    const trimmed = todoText.trim();
    if (!trimmed) return; //Förhindrar tomma todos
    addTodo(trimmed);
    setTodoText("");
  };

  return (
    <>
      <HeaderContainer>
        <Header>ToDo</Header>
      </HeaderContainer>

      <Container>
        <Main>
          <CountRow>
            <Count type="remaining">{remainingCount} Not ready</Count>
            <Count type="completed">{completedCount} Completed</Count>
            <Count type="total">{totalCount} Total</Count>
          </CountRow>

          <InputWrapper>
            <label htmlFor="new-todo" className="sr-only">
            </label>
            <Input
              id="new-todo"
              type="text"
              value={todoText}
              onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
              onChange={(e) => setTodoText(e.target.value)}
              placeholder="Add your todo"
            />

            <Button type="button" onClick={handleAddTodo}>
              Add
            </Button>
          </InputWrapper>

          <TodoList />
        </Main>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 24px;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background: ${colors.header};
  width: 100%;
  align-items: center;
  margin-left: -24px;
  width: calc(100% + 48px);
`;

const Header = styled.h1`
  font-size: 48px;
  color: ${colors.textHeader};
`;

const Main = styled.main`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const CountRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;
`;

const Count = styled.div`
  background: #f0f0f0;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 14px;
  color: ${colors.textPrimary};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  font-size: 20px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: ${colors.textPrimary};
  font-family: inherit;
`;

const InputWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f7efe6;
  gap: 20px;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: inherit;
`;