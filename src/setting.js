import "./App.css";
import React,{ useState } from "react";

function Setting () {
    const [inputValue, setInputValue] = useState("");
    const [selectColor, setSelectColor] = useState("");
    const [tags, setTags] = useState([]);
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    const changeColor = (e) => {
      console.log(e.target.value);
      setSelectColor(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
  
      /* 新しいTodoを宣言 */
      const Tag = {
        inputValue: inputValue,
        id: tags.length,
        color: selectColor,
      };
      setTags([Tag, ...tags]);
      setInputValue("");
    }
  
     const handleEdit = (id, inputValue) => {
      const newTags = tags.map((tag) => {
        if(tag.id === id){
          tag.inputValue = inputValue;
        }
        return tag;
      });
  
      setTags(newTags);
    };
  
    const handleDelete = (id) => {
      const newTags = tags.filter((tag) => tag.id !== id);
      setTags(newTags);
    } 
    
    return (
        <div className="App">
        <div>
          <h2>タグの登録
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" onChange={(e) => handleChange(e)} className="inputText"/>
              <label><input type="color" id="colorBack" onChange={(e) => changeColor(e)}/></label>
              <input type="submit" value="作成" className="submitButton"/>
            </form>
            <ul className="todoList">
              {tags.map((tag) => (
                <li key={tag.id}>
                  <input 
                    type="text"
                    onChange={(e) => handleEdit(tag.id, e.target.value)}
                    className={`inputText bg-[${tag.color}]`}
                    value={tag.inputValue}
                    disabled={tag.checked}
                    />
                    <button onClick={() => handleDelete(tag.id)} >消</button>
                </li>
              ))}
            </ul>
          </h2>
        </div>
      </div>
    );
}

export default Setting;