import {useState, useEffect, useRef} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
	const [posts, setPosts] = useState([])
	const form = useRef()
	useEffect(() => {
		const getPosts = async () => {
			try {
				const req = await fetch('http://localhost:3100/posts')
				const res = await req.json()

				if (req.ok) {
				setPosts(res)		
				} else {
					alert('Posts cannot be loaded')
				}
			} catch (error) {
				alert(error.message)
			}
		}
		getPosts()
	},[])	
	const handleSubmit = async (e) => {
		e.preventDefault()
	const data = new FormData(form.current)
	let req = await fetch('http://localhost:3100/login', {
		method: 'POST',
		body: data	
		})
	let res = await req.json()
	if (req.ok) {
		console.log('user', res)
		alert('you have logged in')}
	else {alert('invalid email/password')}
	}
  return (
	<div className="App">
		<h2>News Feed</h2>
		{
			posts.map(post => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
				</div>
			))
		}
	<hr/>

	<h2>Login</h2>
	<form onSubmit={handleSubmit} ref={form}>
		<input type="email" name="email" placeholder="email"/><br /><br />
		<input type="password" name="password" placeholder="password" />
		<input type="submit"/>
	</form>
	</div>
	
  );
}

export default App;
