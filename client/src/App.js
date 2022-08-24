import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
	const [posts, setPosts] = useState([])

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
	</div>
	
  );
}

export default App;
