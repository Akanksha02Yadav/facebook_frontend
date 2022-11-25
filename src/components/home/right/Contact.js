export default function Contact({ user: { first_name, picture, last_name } }) {
  return (
    <div className="contact hover3">
      <div className="contact_img">
        <img src={picture} alt="" />
      </div>
      <span>
        {first_name} {last_name}
      </span>
    </div>
  );
}
