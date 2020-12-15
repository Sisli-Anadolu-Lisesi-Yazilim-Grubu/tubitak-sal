import { createStore } from 'redux';

const initialState = {
    projects: [ 
        // test data for developing front end
        { year: "2018-2019", type: "4006", hash: "my-beatiful-project", title: "My Beautiful Project", description: [ { tag: 1, text: "Header" }, { tag: 2, text: "Sub Header" }, { tag: 0, text: "Text" } ], footer: [ "Samet Sevindik 11/A" ], img: "https://drive.google.com/uc?id=1HZ0ZxXB6S5rTvhmc5DIJots5gCSWuL3i" },
        { year: "2018-2019", type: "4006", hash: "my-beatiful-project1", title: "My Beautiful Project1", description: [ { tag: 1, text: "Header" }, { tag: 2, text: "Sub Header" }, { tag: 0, text: "Text" } ], footer: [ "Samet Sevindik 11/A" ], img: "https://drive.google.com/uc?id=1IUls8GUHL-ZKXxwy59V4z9yv3gVdjEiI" },
        { year: "2021-2022", type: "4006", hash: "my-beatiful-project2", title: "My Beautiful Project2", description: [ { tag: 1, text: "Header" }, { tag: 2, text: "Sub Header" }, { tag: 0, text: "Text" } ], footer: [ "Samet Sevindik 11/A" ], img: "https://drive.google.com/uc?id=1HZ0ZxXB6S5rTvhmc5DIJots5gCSWuL3i" },
        { year: "2021-2022", type: "4006", hash: "my-beatiful-project3", title: "My Beautiful Project3", description: [ { tag: 1, text: "Header" }, { tag: 2, text: "Sub Header" }, { tag: 0, text: "Text" } ], footer: [ "Samet Sevindik 11/A" ], img: "https://drive.google.com/uc?id=1IUls8GUHL-ZKXxwy59V4z9yv3gVdjEiI" },
        { year: "2021-2022", type: "2204", hash: "my-beatiful-project4", title: "My Beautiful Project4", description: [ { tag: 1, text: "Header" }, { tag: 2, text: "Sub Header" }, { tag: 0, text: "Text" } ], footer: [ "Samet Sevindik 11/A" ], img: "https://drive.google.com/uc?id=1HZ0ZxXB6S5rTvhmc5DIJots5gCSWuL3i" },
        { year: "2021-2022", type: "2204", hash: "my-beatiful-project5", title: "My Beautiful Project5", description: [ { tag: 1, text: "Header" }, { tag: 2, text: "Sub Header" }, { tag: 0, text: "Text" } ], footer: [ "Samet Sevindik 11/A" ], img: "https://drive.google.com/uc?id=1IUls8GUHL-ZKXxwy59V4z9yv3gVdjEiI" }
    ]
};

const reducer = (state = initialState, action) => {
    return state;
};

const store = createStore(reducer);
export default store;