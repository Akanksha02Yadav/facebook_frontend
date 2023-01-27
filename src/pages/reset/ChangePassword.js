import LoginInput from "../../components/inputs/logininput";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
export default function ChangePassword({
  password,
  setPassword,
  confPassword,
  setConfPassword,
  error,
}) {
  const validatePassowrd = Yup.object({
    password: Yup.string()
      .required(
        "Enter a combination of atleast six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "password must be atleast 6 characters.")
      .max(36, "password can't be more than 36 characters."),

    confPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  return (
    <div className="reset_form" style={{ height: "310px" }}>
      <div className="reset_form_header">Change Password</div>
      <div className="reset_form_text">Pick a strong password</div>
      <Formik
        enableReinitialize
        initialValues={{
          password,
          confPassword,
        }}
        validationSchema={validatePassowrd}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
            />
            <LoginInput
              type="password"
              name="confPassword"
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="Confirm new password"
              bottom
            />
            {error && <div className="error_text"></div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              <button type="submit" className="blue_btn">
                continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
