import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';
import { Link } from 'react-router-dom';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div className="col-md-4">
        <div className="card text-white bg-info mb-3">
            <div className="card-header">
                <h5 className="float-left">{ name }</h5>
                <button onClick={ () => createNewTask(id) } type="button" className="btn btn-outline-dark float-right btn-sm"><i className="fas fa-plus-circle"></i></button>
            </div>
            <div className="list-group">
            { tasks.map(task => (
                <Link to={`/task/${task.id}`} key={task.id} className="list-group-item list-group-item-action">
                    {task.isComplete}

                    {(() => {
                        if (task.isComplete) {
                            return (<i className="far fa-check-square"></i>)
                        } else {
                            return (<i className="far fa-square"></i>)
                        }
                    })()}


                    &nbsp;

                    { task.name }
                </Link>
            )) }
            </div>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        id: groupID,
        name: ownProps.name,
        tasks: state.tasks.filter(task => task.group == groupID)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask(id) {
            console.log('CREAT TASK ON GROUP ', id);
            dispatch(requestTaskCreation(id));
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);