import {useEffect, useState, useRef} from "react";

export function useList(url, initialList, limit) {
  const [items, setItems] = useState(initialList);
  const counter = useRef(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
        .then( (results) => results.json())
        .then( items => {setItems(items);
        })
  },[]);

  const addItem = (item) => {
    if(counter.current === limit) {
      alert(`Limit to ${limit}`);
      return;
    }
    const updateItems = [...items, item];
    setItems(updateItems);
    counter.current += 1;
  }

  return [items, addItem]
}


