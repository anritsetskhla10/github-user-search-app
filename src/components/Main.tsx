import StyledForm from "../styles/StyledForm";
import StyledMain from "../styles/StyledMain";
import SearchIcon from '/images/icon-search.svg';
import CompanyIcon from '/images/icon-company.svg';
import TwitterIcon from '/images/icon-twitter.svg';
import WebsiteIcon from '/images/icon-website.svg';
import LocationIcon from '/images/icon-location.svg';
import { GithubUser, MainProps } from "../types";
import { useEffect, useState, FormEvent} from "react";




function Main({mode}:MainProps) {

  const [user , setUser] = useState<GithubUser | null>(null);
  const [userName, setUserName] = useState<string>('octocat');
  const [status, setStatus] = useState<Number>(200)

  useEffect(() => {
   getUserName()
  }, []);

  const getUserName = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUser(data);

      setStatus(response.status);
    } catch (error) {
      console.error( error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    setUserName(event.target.value)
  }

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();
    getUserName();
  }


  return (
    <StyledMain mode={mode}>
        <StyledForm mode={mode} onSubmit={handleSubmit}>
          <div>
            <img src={SearchIcon} alt="search icon" />
            <input 
            type="text" 
            onChange={handleChange} 
            value={userName}
            placeholder="Search GitHub username…"/>
          </div>
          <div>
            {status != 200 && 
            <p className="error">No results</p>}
            <button type="submit">Search</button>
          </div>
        </StyledForm>
        <div className="main-container"> 

          <div className="profile-container">
            <img src={user?.avatar_url} alt="profile photo" />
            <div className="info">
              <h2>{user?.name}</h2>
              <a href="#">@{user?.login}</a>
              <p>joined {user?.created_at}</p>
            </div>
          </div>

          <p>{user?.bio}</p>

          <div className="connections">
            <div>
              <span className="connection-info">Repos</span>
              <span className="connection-info">Followers</span>
              <span className="connection-info">Following</span>
            </div>
            <div>
              <span className="numbers">{user?.public_repos}</span>
              <span className="numbers">{user?.followers}</span>
              <span className="numbers">{user?.following}</span>
            </div>
          </div>

          <div className="links">
            <div>
              <img src={LocationIcon} alt="location icon" />
              <a href="#">{user?.location}</a>
            </div>
            <div>
              <img src={WebsiteIcon} alt="website icon" />
              <a href="#">{user?.blog}</a>
            </div>
            <div className="twitter">
              <img src={TwitterIcon} alt="twitter icon" />
              <a href="#">{user?.twitter_username}</a>
            </div>
            <div>
              <img src={CompanyIcon} alt="company icon" />
              <a href="#">{user?.company}</a>
            </div>
          </div>
        </div>
    </StyledMain>
  )
}

export default Main
