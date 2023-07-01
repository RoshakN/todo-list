import PropTypes from "prop-types";

export default function List(props) {
  return (
    <div className="list">
      <p key={props.key}>{props.title}</p>
      <button onClick={() => props.handleDelete(props.id)}>Delete Task</button>
    </div>
  );
}

List.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  handleDelete: PropTypes.func,
};
