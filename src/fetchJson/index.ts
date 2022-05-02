import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
	id: number;
	title: string;
	body: string;
}

axios.get(url).then((response) => {
	const toDo = response.data as Todo;
	const id = toDo.id;
	const title = toDo.title;
	const body = toDo.body;
	/* console.log(response.data); */
	logTodo(id, title, body);
});

const logTodo = (id: number, title: string, body: string) => {
	console.log(`
    Todo with id ${id}
    Has tittle of ${title} 
    Is it description of ${body}`);
};
