import { formatDate } from "../utils/formatDate";
import LocationSign from "../assets/icon-location.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import WebIcon from "../assets/icon-website.svg";
import CompanyIcon from "../assets/icon-company.svg";
import { formatUrl } from "../utils/formatUrl";

interface PropsI {
  userName: string;
  image: string;
  url: string;
  followers: number;
  following: number;
  publicRepos: number;
  company: string | null;
  location: string | null;
  bio?: string | null;
  twitterUsername?: string | null;
  createDate: string;
  login: string;
}

export const ResultCard = (props: PropsI) => {
  const {
    userName,
    image,
    url,
    followers,
    following,
    publicRepos,
    company,
    location,
    bio,
    twitterUsername,
    createDate,
    login,
  } = props;

  return (
    <>
      <div className="main_result_div">
        <div className="mm">
          <div className="result_image_div">
            <img src={image} id="avatar_img" />
          </div>
          <div className="profile_div">
            <div className="username">
              <h1>{userName}</h1>
              <a href={`https://www.github.com/${login}`} target="_blank">
                @{login}
              </a>
            </div>
            <p className="create_date result_text">{formatDate(createDate)}</p>
            <p className="result_text">
              {bio != null ? bio : "This profile has no bio"}
            </p>
          </div>
        </div>
        <div className="div2">
          <div className="profile_stats_div">
            <div>
              <p>Repos</p>
              <h3>{publicRepos}</h3>
            </div>
            <div>
              <p>Followers</p>
              <h3>{followers}</h3>
            </div>
            <div>
              <p>Following</p>
              <h3>{following}</h3>
            </div>
          </div>
          <div></div>
          <div className="result_personal_info">
            <div>
              <img src={LocationSign} alt="" />
              <p className="result_text">
                {location != null ? location : "Not available"}
              </p>
            </div>
            <div>
              <img src={TwitterIcon} alt="" />
              <p className="result_text">
                {twitterUsername != null ? twitterUsername : "Not available"}
              </p>
            </div>
            <div>
              <img src={WebIcon} alt="" />
              <a href={url} target="_blank" className="result_text">
                {url != null && url != "" ? formatUrl(url) : "Not available"}
              </a>
            </div>
            <div>
              <img src={CompanyIcon} alt="" />
              <p className="result_text">
                {company != null ? company : "Not available"}
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
