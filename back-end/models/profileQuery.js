import generalQuery from './generalQuery';

const whoBlockedMe = async (username) => {
    const results = await generalQuery.get({table: 'blocks', field: 'block', value: username});
    if (results) {
        let users = results.map(result => result.blockedBy);
        return (users);
    }
    return ;
}

const getBlockedByMe = async (username) => {
    const results = await generalQuery.get({table: 'blocks', field: 'blockedBy', value: username});
    if (results) {
        let users = results.map(result => result.blocked);
        return (users);
    }
    return ;
}

const whoVisitedMe = async (username) => {
    const results = await generalQuery.get({table: 'visits', field: 'visit', value: username});
    if (results) {
        let users = results.map(result => result.visitedBy);
        return (users);
    }
    return ;
}

const setNewVisit = async (myUsername, username) => {
    const date = moment().format('L LT');
    const userData = { visit: username, visitedBy: myUsername, date};
    const result = await generalQuery.insert({ table: 'visits', userData });
    return result.affectedRows > 0 ? true : false;
}

const getTags = async (username) => {
    const results = await generalQuery.get({table: 'tags', field: 'taggedBy', value: username});
    if (results) {
        let tags = results.map(result => result.tag);
        return (tags);
    }
    return ;
}

const setNewTag = async (tag, username) => {
    const userData = { tag, taggedBy: username };
    const result = await generalQuery.insert({ table: 'tags', userData });
    return result.affectedRows > 0 ? true : false;
}

const wholikedMe = async (username) => {
    const results = await generalQuery.get({table: 'likes', field: '`like`', value: username});
    if (results) {
        let users = results.map(result => result.likedBy);
        return (users);
    }
    return ;
}

const setNewLike = async (myUsername, username) => {
    const userData = { like: username, likedBy: myUsername };
    const result = await generalQuery.insert({ table: 'visits', userData });
    return result.affectedRows > 0 ? true : false;
}

const getPhotos = async (username) => {
    const results = await generalQuery.get({table: 'photos', field: 'photoBy', value: username});
    if (results) {
        let photos = results.map(result => result.photo);
        return (photos);
    }
    return ;
}

const setNewPhoto = async (photo, username) => {
    const userData = { photo, photoBy: username };
    const result = await generalQuery.insert({ table: 'photos', userData });
    return result.affectedRows > 0 ? true : false;
}

module.exports = {
    whoBlockedMe,
    getBlockedByMe,
    whoVisitedMe,
    setNewVisit,
    getTags,
    setNewTag,
    wholikedMe,
    setNewLike,
    getPhotos,
    setNewPhoto
}
