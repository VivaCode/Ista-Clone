import React from "react";
import dummyData from '../../dummyData';
import PostContainer from './PostContainer';
import SearchBar from "../SearchBar/SearchBar";


    class PostsPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              data: [],
              search: ""
            };
        }

        search = e => {
            e.preventDefaut();
            let newPosts = [...this.state.data]
            newPosts = newPosts.filter(post => {
                if(post.username === this.state.search){
                    return post;
                }
            })
            this.setState({data: newPosts});
        }

        handleChange =e => {
            e.preventDefaut();
            this.setState ({ [e.target.name]: e.target.value});
        }

        componentDidMount(){
            this.setState({data:dummyData});
        }
        
        render() {
            return (
                <div>
                    <SearchBar />
                    <PostContainer data={this.state.data} />
                </div>
            );
        }
        
    }

export default PostsPage;