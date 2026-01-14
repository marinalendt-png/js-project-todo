import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { todoStore } from "../stores/todoStore";

export const TodoInput = () => {
  const { todos, addTodo } = useTodoStore()

  const handleAddTodo = () => {
    addTodo("My new todo");
  };

  return (
    <Container>
      <HeaderContainer>
        <Header>ToDo</Header>
      </HeaderContainer>
      <InputWrapper>
        <Input placeholder="Add a ToDo" type="text" />
        <Button>+</Button>
      </InputWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.header};
 
`;

const Header = styled.h1`
  font-size: 30px;
  color: ${colors.textLight}
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 40px;
  background: none;
  color: #fff;
`;

const InputWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #f7efe6;
`;

const Input = styled.input`
  width: 85%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: inherit;
`;