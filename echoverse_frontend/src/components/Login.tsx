import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { dataCredential } from "@/types";

import { client } from "../client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response: CredentialResponse) => {
    const { credential } = response;
    if (credential) {
      const decodedToken: dataCredential = JSON.parse(
        atob(credential.split(".")[1])
      );
      localStorage.setItem("user", JSON.stringify(decodedToken));
      console.log("User Data:", decodedToken);
      const { sub, name, picture } = decodedToken;
      const doc = {
        _id: sub,
        _type: "user",
        userName: name,
        image: picture,
      };
      client.createIfNotExists(doc).then(() => {
        navigate("/", { replace: true });
      });
    }
  };

  const handleErrorGoogle = () => {
    console.log("An error occured!");
  };
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_API_TOKEN}>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className=" relative w-full h-full">
          <video
            src={shareVideo}
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
            <div className="p-5">
              <img src={logo} alt="logo" width="130px" />
            </div>

            <div className="shadow-2xl">
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={handleErrorGoogle}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
