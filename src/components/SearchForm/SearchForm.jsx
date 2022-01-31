import React, { useState } from "react";
import { Searchbar, Form, Button, Input, Select } from "./SearchForm.styled";
import { BiSearch } from "react-icons/bi";
export default function SearchForm({ onSubmit }) {
  const [character, setCharacter] = useState({
    name: "",
    gender: "",
    status: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    onSubmit(character);
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.currentTarget;

    setCharacter((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };
  return (
    <Searchbar>
      <Form onSubmit={handleFormSubmit} action="submit">
        <Button type="submit">
          <BiSearch />
        </Button>
        <Input
          placeholder="Enter search params"
          onChange={inputChangeHandler}
          name="name"
          value={character.name}
          type="text"
        />
        <Select
          onChange={inputChangeHandler}
          value={character.gender}
          name="gender"
          id=""
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Select
          value={character.status}
          onChange={inputChangeHandler}
          name="status"
          id=""
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Form>
    </Searchbar>
  );
}
