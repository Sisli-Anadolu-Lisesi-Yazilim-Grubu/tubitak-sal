import { createStore } from 'redux';

const initialState = {
    projects: [ 
        // test data for developing front end
        { year: "2018-2019", type: "4006", hash: "my-beatiful-project", title: "My Beautiful Project", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2018-2019", type: "4006", hash: "my-beatiful-project1", title: "My Beautiful Project1", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2021-2022", type: "4006", hash: "my-beatiful-project", title: "My Beautiful Project", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2021-2022", type: "4006", hash: "my-beatiful-project1", title: "My Beautiful Project1", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2021-2022", type: "2204", hash: "my-beatiful-project", title: "My Beautiful Project", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] },
        { year: "2021-2022", type: "2204", hash: "my-beatiful-project1", title: "My Beautiful Project1", description: "<span class='project-header'>Project Header</span><span class='project-sub-header>Sub Header</span>Text'", footer: [ "Samet Sevindik 11/A" ] }
    ]
};

const reducer = (state = initialState, action) => {
    return state;
};

const store = createStore(reducer);
export default store;