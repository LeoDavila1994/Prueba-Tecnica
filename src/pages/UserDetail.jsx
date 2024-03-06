import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import { Layout } from "../components";

const UserDetail = () => {
  const { name } = useParams();

  const { data } = useData();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (name && data) {
      setCurrentUser(() => data.find((user) => user.name.first === name));
    }
  }, [name, data]);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  if (!currentUser) {
    return (
      <Layout>
        <section className=" w-full overflow-auto flex justify-center items-center">
          <h2>CARGANDO...</h2>;
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className=" w-full overflow-auto flex flex-col items-center gap-10 p-4">
        <img className="w-40 h-40" src={currentUser.picture?.large} />
        <div className="text-red-500 text-xl flex flex-col items-center">
          <h3>
            Name: {currentUser.name?.title} {currentUser.name?.first}{" "}
            {currentUser.name?.last}
          </h3>
          <p>Email: {currentUser.email}</p>
          <p>Location: {currentUser.location?.city}</p>
          <p>Gender: {currentUser.gender}</p>
        </div>
      </section>
    </Layout>
  );
};

export default UserDetail;
