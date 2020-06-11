import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div className="col-md-4">
        <div className="card text-white bg-info mb-3">
            <div className="card-header">
                <h5 className="float-left">{ name }</h5>
                <button onClick={ () => createNewTask(id) } type="button" className="btn btn-outline-dark float-right"><i className="fas fa-plus-circle"></i></button>
            </div>
            <div className="card-body">
                { tasks.map(task => (
                    <div key={task.id}>{ task.name }</div>
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