import PropTypes from "prop-types";
import DeleteBin2Fill from "remixicon-react/DeleteBin2FillIcon";
import CheckboxBlankFill from "remixicon-react/CheckboxBlankFillIcon";
import CheckboxFill from "remixicon-react/CheckboxFillIcon";
import { motion } from "framer-motion";

export default function Tasks(props) {
  const handle = {
    handleScale: {
      scale: 1.3,
    },
  };
  return (
    <div className="list-component">
      <motion.p
        key={props.key}
        className="task-title"
        animate={{
          x: "2rem",
          transition: {
            stiffness: 20,
          },
        }}
        variants={handle}
        whileHover="handleScale"
      >
        {props.title}
      </motion.p>
      <button onClick={() => props.handleDelete(props.id)} title="Delete">
        <DeleteBin2Fill className="trash-can" />
      </button>

      <motion.button
        onClick={() => props.handleComplete(props.id)}
        title="Done"
        variants={handle}
        whileTap="handleScale"
      >
        {props.isCompleted === true ? (
          <CheckboxFill className="check complete" />
        ) : (
          <CheckboxBlankFill className="check" />
        )}
      </motion.button>
    </div>
  );
}

Tasks.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleComplete: PropTypes.func,
};
