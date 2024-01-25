import { useEffect, useState, useContext } from "react";
import { fetchUserData } from "./api/fetchData";
import { CiSearch } from "react-icons/ci";
import { ResultCard } from "./components/ResultCard";
import { themeContext } from "./context/themeContext";
import { Header } from "./components/Header";
import "./style/lightTheme.css";
import "./style/darkTheme.css";
import "./App.css";

function App() {
  const { theme } = useContext(themeContext);
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState({});
  const [inputError, setInputError] = useState("");
  const [userError, setUserError] = useState("");

  const handleUserSearch = async (username: string) => {
    if (username === "") {
      setInputError("Can't be null");
    } else {
      setInputError("");
      setUserName("");
      const data = await fetchUserData(username);
      if (data !== undefined) {
        setUserData(data);
      } else if (data === undefined) {
        setUserError("No results");
      }
    }
  };

  useEffect(() => {
    handleUserSearch("octocat");
  }, []);

  const handleInputChange = (e) => {
    setInputError("");
    setUserError("");
    setUserName(e.target.value);
  };

  // console.log(userData);

  return (
    <div className={`main_div ${theme}`}>
      <div className="main_content_div">
        <Header />
        <div className="search_user_div">
          <div className="input_div">
            <div className="input_">
              <div className="icon_div">
                <CiSearch
                  style={{
                    color: "#0079FF",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                />
              </div>
              <input
                type="text"
                value={userName}
                onChange={(e) => handleInputChange(e)}
                placeholder="Search GitHub username..."
              />
            </div>
            <div className="btn_error_div">
              <p className="error_message">
                {inputError}
                {userError}
              </p>
              <button onClick={() => handleUserSearch(userName)}>Search</button>
            </div>
          </div>
          <div className="result_div">
            <ResultCard
              userName={userData?.name}
              image={userData?.avatar_url}
              url={userData?.blog}
              followers={userData?.followers}
              following={userData?.following}
              publicRepos={userData?.public_repos}
              company={userData?.company}
              location={userData?.location}
              bio={userData?.bio}
              twitterUsername={userData?.twitter_username}
              createDate={userData?.created_at}
              login={userData?.login}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
