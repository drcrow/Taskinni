import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({tasks, name}) => (
    <div className="col-md-4">
        <div className="card text-white bg-info mb-3">
            <div className="card-header"><h5>{ name }</h5></div>
            <div className="card-body">
                { tasks.map(task => (
                    <div key={task.id}>{ task.name }</div>
                )) }
            </div>
        </div>
    </div>
);

function mapStateToProps(state, ownProps){
    let groupID = ownProps.id;
    return {
        id: groupID,
        name: ownProps.name,
        tasks: state.tasks.filter(task => task.group == groupID)
    }
}

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);