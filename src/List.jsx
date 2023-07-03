import PropTypes from "prop-types";
import DeleteBin2Fill from "remixicon-react/DeleteBin2FillIcon";
import CheckboxBlankFill from "remixicon-react/CheckboxBlankFillIcon";
import CheckboxFill from "remixicon-react/CheckboxFillIcon";

export default function List(props) {
  return (
    <div className="list-component">
      <p key={props.key}>{props.title}</p>
      <button onClick={() => props.handleDelete(props.id)} title="Delete">
        <DeleteBin2Fill className="trash-can" />
      </button>

      <button
        onClick={() => props.handleComplete(props.id)}
        // style={{ color: props.isCompleted ? "green" : "" }}
        title="Complete"
      >
        {props.isCompleted === true ? (
          <CheckboxFill className="check complete" />
        ) : (
          <CheckboxBlankFill className="check" />
        )}
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
