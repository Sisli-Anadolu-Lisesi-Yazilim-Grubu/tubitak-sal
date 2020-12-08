import { createStore } from 'redux';

const initialState = {
    choice: { year: null, type: null, project: null },
    projects: [ 
        // test data for developing front end
        { year: "2018-2019", type: "4006", title: "My Beautiful Project", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2018-2019", type: "4006", title: "My Beautiful Project1", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2021-2022", type: "4006", title: "My Beautiful Project", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2021-2022", type: "4006", title: "My Beautiful Project1", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2021-2022", type: "2204", title: "My Beautiful Project", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2021-2022", type: "2204", title: "My Beautiful Project1", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] }
    ]
};

const copyState = state => {
    // just requires copying 'choice' and 'projects'
    return Object.assign({}, { choice: Object.assign({}, state.choice), projects: state.projects.concat() });
};

const reducer = (state = initialState, action) => {
    if (action.type === 'CHOOSED' && action.payload.year && action.payload.type) {
        let obj = copyState(state);
        let projects = [];

        for (let i = 0; i < obj.projects.length; i++)
            if (obj.projects[i].year === action.payload.year && obj.projects[i].type === action.payload.type)
                projects.push(obj.projects[i]);

        obj.choice.year = action.payload.year;
        obj.choice.type = action.payload.type;
        obj.projects = projects;
        
        return obj;
    } else return state;
};

const store = createStore(reducer);
export default store;