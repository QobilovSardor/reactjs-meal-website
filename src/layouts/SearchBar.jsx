import { InputGroup, Input, Button } from "reactstrap";
import { useState } from "react";

function SearchBar({cb = Function.prototype}) {

  const [value, setValue] = useState('');

  const handlerKey = (e) => {
    if (e.key === 'Enter') {
      handlerSubmit();
      setValue('');
    }
  }

  const handlerSubmit = () => {
    cb(value)
  }

  return (
    <div>
      <InputGroup>
        <Input placeholder="Search meals" 
          value={value}  
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handlerKey}
        />
        <Button color="primary" onClick={handlerSubmit}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchBar;