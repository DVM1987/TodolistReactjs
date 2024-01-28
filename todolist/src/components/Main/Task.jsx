import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from '../../redux/actions'; 

const Task = () => {
  const dispatch = useDispatch();
  const showTask = useSelector(state => state.data.showTaskComponent);

  const handleCancel = () => {
    dispatch(toggleTask());
  };

  if (!showTask) {
    return null;
  }
  return (
    <div>
      {/* Your component JSX goes here */}
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Task name"
              style={{ width: 200 }}
            />
          </div>
          <div className="col-auto">
            <select className="form-select">
              <option selected="">Medium</option>
              <option value={1}>High</option>
              <option value={2}>Low</option>
            </select>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary me-2" type="button">
              Submit
            </button>
            <button className="btn custom-border-button" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Task;
