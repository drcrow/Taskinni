import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTaskCompletion } from '../store/mutations';
import { setTaskGroup } from '../store/mutations';
import { setTaskName } from '../store/mutations';

const TaskDetail = ({
    task,
    groups,
    setTaskCompletion,
    setTaskGroup,
    setTaskName
}) => (
    <div className="col-md-6 offset-md-3">
        <div className="card text-white bg-info mb-3">
            <div className="card-header">
                <h5 className="float-left">Edit Task</h5>
            </div>
            <div className="card-body">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={ setTaskName } defaultValue={ task.name } />
                    </div>
                    <div className="form-group">
                        <select className="form-control"  onChange={ setTaskGroup } value={task.group}>
                            { groups.map(group => (
                                <option key={ group.id } value={ group.id }>{ group.name }</option>
                            )) }
                        </select>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="1" id="complete" onChange={ () => setTaskCompletion(task.id, !task.isComplete) } checked={ task.isComplete } />
                        <label className="form-check-label" htmlFor="complete">Completed</label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-outline-dark btn-block btn-sm"><i className="fas fa-save"></i></button>
                </form>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;

    return {
        id,
        task,
        groups,
        isComplete: task.isComplete,
        setTaskCompletion,
        setTaskGroup,
        setTaskName
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        setTaskCompletion(id, isComplete) {
            console.log('ID', id, 'COMPLETE', isComplete);
            dispatch(setTaskCompletion(id, isComplete));
        },
        setTaskGroup(e) {
            dispatch(setTaskGroup(id, e.target.value));
        },
        setTaskName(e) {
            dispatch(setTaskName(id, e.target.value));
        }
    }
}

export const ConnectedTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail);