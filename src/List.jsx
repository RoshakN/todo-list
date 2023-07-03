import PropTypes from "prop-types";
import DeleteBin2FillIcon from "remixicon-react/DeleteBin2FillIcon";
import CheckboxCircleFill from "remixicon-react/CheckboxCircleFillIcon";

export default function List(props) {
  return (
    <div className="list-component">
      <p key={props.key}>{props.title}</p>
      <button onClick={() => props.handleDelete(props.id)}>
        <DeleteBin2FillIcon className="trash-can" />
      </button>

      <button
        onClick={() => props.handleComplete(props.id)}
        style={{ color: props.isCompleted ? "green" : "" }}
      >
        <CheckboxCircleFill className="check" />
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
