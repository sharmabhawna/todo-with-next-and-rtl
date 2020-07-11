const todos = [
    {
        id: 1,
        title: "Project initials",
        description: "These things will help me onboarding my project",
        tasks: [
            {
                id: 1,
                title: "Learning react",
                isDone: true
            },
            {
                id: 2,
                title: "Learning redux",
                isDone: false
            },
            {
                id: 3,
                title: "Familiarisation with styled components",
                isDone: true
            }
        ]
    },
    {
        id: 2,
        title: "Other tasks",
        description: "Self learning and upskilling",
        tasks: [
            {
                id: 1,
                title: "Reading Atomic Habits",
                isDone: false
            },
            {
                id: 2,
                title: "Learning Kafka",
                isDone: false
            },
            {
                id: 3,
                title: "Learning Kotlin",
                isDone: true
            }
        ]
    },
    {
        id: 3,
        title: "Other tasks",
        description: "Self learning and upskilling",
        tasks: [
            {
                id: 1,
                title: "Reading Atomic Habits",
                isDone: false
            },
            {
                id: 2,
                title: "Learning Kafka",
                isDone: false
            },
            {
                id: 3,
                title: "Learning Kotlin",
                isDone: true
            }
        ]
    },
    {
        id: 4,
        title: "Project initials",
        description: "These things will help me onboarding my project",
        tasks: [
            {
                id: 1,
                title: "Learning react",
                isDone: true
            },
            {
                id: 2,
                title: "Learning redux",
                isDone: false
            },
            {
                id: 3,
                title: "Familiarisation with styled components",
                isDone: true
            }
        ]
    }
];

export default {
    getTodos: () => {
        return new Promise((resolve, reject) => {
            resolve(todos);
        })

    },
    getTodoById(id) {
        return new Promise((resolve, reject) => {
            const todo = todos.find(todo => todo.id == id)
            resolve(todo);
        })
    }
}