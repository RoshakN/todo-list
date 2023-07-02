import PropTypes from "prop-types";

export default function List(props) {
  return (
    <div className="list-component">
      <p key={props.key}>{props.title}</p>
      <button onClick={() => props.handleDelete(props.id)}>Delete Task</button>
      <button
        onClick={() => props.handleComplete(props.id)}
        style={{ backgroundColor: props.isCompleted ? "green" : "" }}
      >
        Completed
      </button>
    </div>
  );
}

List.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleComplete: PropTypes.func,
};
