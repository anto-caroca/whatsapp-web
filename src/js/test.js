window.addTask = (mesage) => {
    const newTaskKey = firebase.database().ref().child('chat').push().key;
    return firebase.database().ref('chat/' + newTaskKey).set({
        message: message
    });
};

window.getTaskList = () => {
    return firebase.database().ref('chat').once('value');
}

window.taskProgress = (message, state) => {
    return firebase.database().ref('chat').once("value").then(
        (results) => {
            const taskKey = Object.entries(results.val()).find(
                task => task[1].message == message
            )[0];
            return firebase.database().ref('chat/' + taskKey).update({
                state: state
            });
        }
    ).then(() => {
        return firebase.database().ref('chat').once("value").then(
            (results) => {
                let taskToReturn = Object.entries(results.val()).find(
                    task => task[1].message == message
                )[1];
                return taskToReturn;
            }
        )
    });
}