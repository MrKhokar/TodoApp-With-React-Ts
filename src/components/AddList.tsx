import React, { useRef } from "react";
import "./StyleAddList.css";

interface AddListprops {
  addHandler: (text: string) => void;
}

const AddList: React.FC<AddListprops> = (props) => {
  const inputValue = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const value = inputValue.current!.value;
    props.addHandler(value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="input-text">Add Todo</label>
          <input id="input-text" type="text" ref={inputValue} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddList;
