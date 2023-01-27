import { Link } from "react-router-dom";

export default function SendEmail({ userInfos: { email, picture } }) {
  return (
    <div className="reset_form dynamic_height">
      <div className="reset_form_header">Reset your Password</div>
      <div className="reset_grid">
        <div className="reset_left">
          <div className="reset_form_text">
            How do you want to receive the code to reset your password?
          </div>
          <label htmlFor="email" className="hover1">
            <input type="radio" name="" id="email" checked readOnly />
            <div className="label_col">
              <span>Send Code via email</span>
              <span>{email}</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img src={picture} alt="" />
          <span>{email}</span>
          <span>Facebook user</span>
        </div>
      </div>
      <div className="reset_form_btns">
        <Link to="/login" className="gray_btn">
          Not You?
        </Link>
        <button type="submit" className="blue_btn">
          Continue
        </button>
      </div>
    </div>
  );
}
