import React, { useEffect, useState } from "react";
import { recupererListeUtilisateurs } from "./../../api/users/UserApi";
import { NavLink } from "react-router";

const Utilisateurs = () => {
  const [listeUtilisateurs, setListeUtilisateurs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getListeDesUtilisateurs = () => {
    recupererListeUtilisateurs()
      .then((response) => {
        setIsLoading(false);
        setListeUtilisateurs(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getListeDesUtilisateurs();
  }, []);

  return (
    <div className="pt-10 pb-24">
      <h1 className="text-3xl font-bold text-center">Liste des utilisateurs</h1>

      <div className="w-11/12 max-w-6xl mx-auto mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {!isLoading
          ? listeUtilisateurs.map((user) => (
              <NavLink key={user.id} to={`/utilisateurs/${user.id}`}>
                <div className="bg-gray-100 p-4 rounded-lg cursor-pointer hover:drop-shadow-lg">
                  <h2 className="truncate text-xl font-bold">{user.name}</h2>
                  <p className="truncate">{user.email}</p>
                </div>
              </NavLink>
            ))
          : null}

        {isLoading
          ? [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 293, 248, 244, 10000, 2231].map(
              (skeleton, index) => (
                <div key={index} className="space-y-2 border p-3 rounded-lg">
                  <div className="skeleton h-6 w-10/12 rounded-md"></div>
                  <div className="skeleton h-6 w-8/12 rounded-md"></div>
                  <div className="skeleton h-6 w-full rounded-md"></div>
                </div>
              )
            )
          : null}

        {listeUtilisateurs.length === 0 && !isLoading ? (
          <div className="text-center w-full">Aucun utilisateur trouvé</div>
        ) : null}
      </div>
    </div>
  );
};

export default Utilisateurs;
