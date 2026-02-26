// Optimizing Task Scheduling System

// Task class to represent each task with its name, start time, end time, and priority
class Task {
  constructor(name, start, end, priority) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.priority = priority;
  }
}


// Sample tasks with varying priorities and time frames
const tasks = [
  new Task('OS installation', Date.now(), Date.now() + 3600000, 'medium'),
  new Task('Software updates', Date.now() + 3600000, Date.now() + 7200000, 'high'),
  new Task('Data backup', Date.now() + 7200000, Date.now() + 10800000, 'high'),
  new Task('System diagnostics', Date.now() + 10700000, Date.now() + 14400000, 'medium'),
  new Task('Network configuration', Date.now() + 14000000, Date.now() + 18000000, 'low'),
  new Task('Security scan', Date.now() + 18000000, Date.now() + 21600000, 'high'),
  new Task('Performance optimization', Date.now() + 21500000, Date.now() + 25200000, 'medium'),
  new Task('Software installation', Date.now() + 25000000, Date.now() + 28800000, 'low'),
  new Task('System monitoring', Date.now() + 28700000, Date.now() + 32400000, 'high'),
  new Task('User training', Date.now() + 32000000, Date.now() + 36000000, 'medium'),
  new Task('Documentation', Date.now() + 36000000, Date.now() + 39600000, 'low'),
  new Task('Hardware maintenance', Date.now() + 39500000, Date.now() + 43200000, 'medium'),
  new Task('Software testing', Date.now() + 43000000, Date.now() + 46800000, 'high'),
  new Task('System cleanup', Date.now() + 46700000, Date.now() + 50400000, 'low'),
  new Task('Network security', Date.now() + 50000000, Date.now() + 54000000, 'high')
]

// Function to Sort tasks by start time (efficiently); Sorting can be done with Array.prototype.sort() using custom compare functions.
function sortByStartTime(tasks) {
  return tasks.sort((a, b) => a.start - b.start);
}

// Group tasks by priority using appropriate data structures; using a hash map for efficient access and organization
function groupTasksByPriority(tasks) {
  const groupedTasks = {
    high: [],
    medium: [],
    low: []
  };

  tasks.forEach(task => {
    if (task.priority === 'high') {
      groupedTasks.high.push(task);
    } else if (task.priority === 'medium') {
      groupedTasks.medium.push(task);
    } else if (task.priority === 'low') {
      groupedTasks.low.push(task);
    }
  });

  return groupedTasks;
}



// Detect overlapping tasks (tasks that run at the same time)
function detectOverlappingTasks(tasks) {
  const overlappingTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    for (let j = i + 1; j < tasks.length; j++) {
      if (tasks[i].end > tasks[j].start && tasks[i].start < tasks[j].end) {
        overlappingTasks.push([tasks[i], tasks[j]]);
      }
    }
  }
  return overlappingTasks;
}



// Analyze the time and space complexity of each function and optimize where necessary.
// The sortByStartTime function has a time complexity of O(n log n) due to the sorting algorithm used.
// The groupTasksByPriority function has a time complexity of O(n) since it iterates through the list of tasks once to group them by priority.
// The detectOverlappingTasks function has a time complexity of O(n^2) due to the nested loops used to compare each task with every other task.
// This can be optimized by first sorting the tasks by start time and then using a single loop to check for overlaps, reducing the time complexity to O(n log n) due to the sorting step.

// Main function to execute the task scheduling system
function main() {
  const sortedTasks = sortByStartTime(tasks);
  console.log('Sorted Tasks by Start Time:', sortedTasks);

  const groupedTasks = groupTasksByPriority(sortedTasks);
  console.log('Grouped Tasks by Priority:', groupedTasks);

  const overlappingTasks = detectOverlappingTasks(sortedTasks);
  console.log('Overlapping Tasks:', overlappingTasks);
}

// Execute the main function
main();
