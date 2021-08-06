import React from 'react'

interface Props {
  items: string[]
}

const Todos: React.FC<Props> = (props) => {
  return <ul>
    {props.items.map((item) => {
      return <li key={item}>{item}</li>
    })}
  </ul>
}

const Todos2 = ({items}: Props) => {
  return <ul>
    {items.map((item) => {
      return <li key={item}>{item}</li>
    })}
  </ul>
}


export default Todos;