import "./style.css";
import { Feeling, LiveVideo, Photo } from "../../svg";
export default function CreatePost({ user: { picture, first_name } }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={picture} alt="" />
        <div className="open_post hover2">
          What's in your mind , {first_name}
        </div>
      </div>
      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <LiveVideo color="#f3425f" />
          LiveVideo
        </div>
        <div className="createPost_icon hover1">
          <Photo color="green" />
          photo/Video
        </div>
        <div className="createPost_icon hover1">
          <Feeling color="#f7b928" />
          Feeling/Activity
        </div>
      </div>
    </div>
  );
}
