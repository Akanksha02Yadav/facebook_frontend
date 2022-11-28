import "./style.css";
export default function CreatePost({ user: { picture, first_name } }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={picture} alt="" />
        <div className="open_post">What's in your mind , {first_name}</div>
      </div>
      <div className="create_splitter"></div>
    </div>
  );
}
