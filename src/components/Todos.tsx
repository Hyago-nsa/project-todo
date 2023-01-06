import Card from "../assets/types/Card";
import Todo from "../assets/types/todo";

const Todos = (props: { items: Todo[] }) => {
  return (
    <div>
      {props.items.map((item) => (
        <Card key={item.id} id={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default Todos;
