import styles from "./Profile.module.css";
import Heading from "./home/Heading";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";

export default function Profile({ title }) {
  // context 
  const [auth, setAuth] = useAuth();
  // state
  // username name email company address phone about
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [isphoto, setisPhoto] = useState(false);
  // hooks

  useEffect(() => {
    if (auth.user) {
      setUsername(auth.user?.username);
      setName(auth.user?.name);
      setEmail(auth.user?.email);
      setPhone(auth.user?.phone);
      setPhoto(auth.user?.photo?.Location)

    }
    if (auth.user?.photo?.Location) {
      setisPhoto(true);
    }

  }, [auth.user]);
  return (<>
    <section className={`${styles.topImage}`}>
      <div className={`${styles.container}`}>
        <Heading title={title} subtitle='' />
      </div>
    </section>
    <div className={`${styles.profilecontainer}`}>
      <div className={`${styles.profileimagecontainer}`}>
        {isphoto ?
          <img
            src={photo}
            alt="Profile"
            className={`${styles.profileimage}`}
          />
          : <img
            // src={"https://room-rental-bucket-app.s3.ap-south-1.amazonaws.com/UGaH9sMy4lfzRk9sXHe17.jpeg"}
            src={require("../images/profile.jpg")}
            alt="Profile"
            className={`${styles.profileimage}`}
          />
        }
      </div>
      <div className={`${styles.profileinfo}`}>
        {name == "" ? <h2>UserName:{username}</h2> : <h2>Name:{name}</h2>}

        <p>Email: {email}</p>
        <p>Mobile: {phone}</p>
      </div>

    </div>
  </>
  );
}

// {`${styles.}`}