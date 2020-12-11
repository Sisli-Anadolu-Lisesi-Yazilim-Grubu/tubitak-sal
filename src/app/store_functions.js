const getYears = projects => {
    let years = [];
    for (let i = 0; i < projects.length; i++)
        years.push(projects[i].year);
    
    return [...new Set(years)];
};

const getTypes = (projects, year) => {
    let types = [];
    for (let i = 0; i < projects.length; i++)
        if (projects[i].year === year)
            types.push(projects[i].type)
    
    return [...new Set(types)];
};

const filterProjects = (projects, year, type) => {
    let arr = [];

    for (let i = 0; i < projects.length; i++)
        if (projects[i].year === year && projects[i].type === type)
            arr.push(projects[i]);
    
    return arr;
};

export { getYears, getTypes, filterProjects };