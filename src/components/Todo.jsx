import React, { useState } from 'react'

const Todo = () => {
    let [items, setItems] = useState([])
    let [item, setItem] = useState("")
    let [editIndex, setEditIndex] = useState(null)

    let handleClick = () => {
        item = item.trim()
        if (items.includes(item)) {
            return alert('item already present in list')
        }
        if (item == "")
            return alert("please add something")

        
        if (editIndex == null) {
            setItems([...items, item])
        }
        else {
            let newItems = [...items];
            newItems[editIndex] = item;
            setItems(newItems);
            setEditIndex(null)
        }
        setItem("")
    }
    let handleDelete = (index) => {
        console.log(index);
        let newItems = items.filter((ele, ind) => ind != index)
        setItems(newItems)

    }
    let handleEdit = (index) => {
        console.log(index);
        setEditIndex(index)
        setItem(items[index])

    }
    return (
        <div className='outer'>
            <h1>Todo App</h1>
            <header>
                <input type="text" placeholder='enter your todo' value={item}
                    onChange={(e) => setItem(e.target.value)} />
                <button onClick={handleClick}>{editIndex == null ? "add" : "update"}</button>

            </header>
            <main>
                {
                    items.length > 0 ?
                        items.map((ele, index) => {
                            return <li key={index}>{ele}
                                <button onClick={() => handleEdit(index)}>edit</button>
                                <button onClick={() => handleDelete(index)}>delete</button>
                            </li>
                        })
                        : <h3>no items found</h3>
                }
            </main>

        </div>
    )
}

export default Todo