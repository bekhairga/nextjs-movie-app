import React from 'react';
import { getPosts } from '../actions/index';
export default class Posts extends React.Component {
	constructor(props) {
		super(props);
	}
	static async getInitialProps() {
		const posts = await getPosts();
		return { posts };
	}
	render() {
		const { posts } = this.props;
		return (
			<div className='container'>
				<h1>Hello</h1>
				<ul>
					{posts.map((post) => {
						return <li>{post.title}</li>;
					})}
				</ul>
			</div>
		);
	}
}
