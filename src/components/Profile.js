import React from 'react'
import Shimmer from './Shimmer';

class Profile extends React.Component{
  
  constructor(props){
     super(props);
     console.log("Constructor")

     this.state={
      info:{
        name:"demo",
        gitHubId:"xyz",
        public_repo:0,
        followers:0,
        following:0,
        img:"xyz"
      }
    }
  }
  
  //Bs Ek baar chalta h 
  async componentDidMount(){
    //fetch krte h
    const dataN=await fetch('https://api.github.com/users/shikhasingh229')
    const data=await dataN.json();
    console.log(data);
    this.setState({
    info:{
      name:data.name,
      gitHubId:data.url,
      public_repo:data.public_repos,
      followers:data.followers,
      following:data.following,
      img:data.avatar_url
    }
    });
  }
  componentDidUpdate(){
    console.log("updated")
  }
  componentWillUnmount(){
    console.log("Unmounted")
  }

  render(){
    console.log("render")
    return(
      (this.state.info.img==="xyz")?<Shimmer></Shimmer>:
      <>
        <div>
          {console.log(this.state.info)}
        <div className="myP cursor-pointer">
                <div>
                 <img src={this.state.info.img}></img>
                </div>
                <div>
                   <h3>Name: {this.state.info.name}</h3> 
                   <h5>GitHub Id: {this.state.info.gitHubId}</h5>
                   <h5>Public Repos: {this.state.info.public_repo}</h5>
                   <h5>Followers: {this.state.info.followers}</h5>
                   <h5>Following: {this.state.info.following}</h5>
                </div>
            </div>
        </div>
      </>
    )
  }

  
}

export default Profile