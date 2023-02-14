import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required."),
    email: Yup.string()
    .email("Enter a valid email")
    .required("Please enter a registered email"),
    password: Yup.string()
    .min(6, "Password must have at least 6 characters"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password & Confirm Password does not match"
    ),
});


