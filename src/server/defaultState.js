export const defaultState = {
    users: [{
        id: "U1",
        name: "Agustin",
    },{
        id: "U2",
        name: "Fernanda",
    },{
        id: "U3",
        name: "Fausto",
    }],
    groups: [{
        id: "G1",
        owner: "U1",
        name: "To Do",
    },{
        id: "G2",
        owner: "U1",
        name: "Doing",
    },{
        id: "G3",
        owner: "U1",
        name: "Done",
    }],
    tasks: [{
        id: "T1",
        group: "G1",
        owner: "U1",
        name: "Do test",
        isComplete: false
    },{
        id: "T2",
        group: "G2",
        owner: "U1",
        name: "Learn React",
        isComplete: false
    },{
        id: "T3",
        group: "G2",
        owner: "U1",
        name: "Learn Node",
        isComplete: false
    }],
    comments: [{
        id: "C1",
        task: "T1",
        owner: "U1",
        content: "Great work!!"
    }]
}