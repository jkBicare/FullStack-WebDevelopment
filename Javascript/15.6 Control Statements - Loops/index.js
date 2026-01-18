var tasks = ["Wake up", "Eat breakfast", "Study JavaScript", "Play games", "Sleep"];

// FOR LOOP (best when you know how many times)
function showTasksWithFor() {
    var result = [];

    for (var i = 0; i < tasks.length; i++) {
        result.push((i + 1) + ". " + tasks[i]);
    }

    return result;
}

// WHILE LOOP (runs while condition is true)
function showTasksWithWhile() {
    var result = [];
    var i = 0;

    while (i < tasks.length) {
        result.push(tasks[i]);
        i++;
    }

    return result;
}

// DO...WHILE LOOP (runs at least once)
function showTasksWithDoWhile() {
    var result = [];
    var i = 0;

    do {
        result.push(tasks[i]);
        i++;
    } while (i < tasks.length);

    return result;
}

// FOR...OF LOOP (modern & clean for arrays)
function showTasksWithForOf() {
    var result = [];

    for (var task of tasks) {
        result.push(task);
    }

    return result;
}
