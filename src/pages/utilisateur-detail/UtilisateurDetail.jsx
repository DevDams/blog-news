import React, { useEffect, useState } from "react";
import {
  recupererDetailUtilisateurParId,
  recupererPostsUtilisateurParId,
} from "../../api/users/UserApi";
import { NavLink, useParams } from "react-router";

const UtilisateurDetail = () => {
  const param = useParams();

  const [detailUtilisateur, setDetailUtilisateur] = useState(null);
  const [listePosts, setListePosts] = useState([]);
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [isLoadingDetailUser, setIsLoadingDetailUser] = useState(true);
  const [postDetail, setPostDetail] = useState(null);

  const getListeDetailUtilisateur = (userId) => {
    recupererDetailUtilisateurParId(userId)
      .then((response) => {
        setIsLoadingDetailUser(false);
        setDetailUtilisateur(response.data);
      })
      .catch((error) => {
        setIsLoadingDetailUser(false);
        console.log(error);
      });
  };

  const getListePostParUtilisateur = (userId) => {
    recupererPostsUtilisateurParId(userId)
      .then((response) => {
        setIsLoadingPost(false);
        setListePosts(response.data);
      })
      .catch((error) => {
        setIsLoadingPost(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (param) {
      getListeDetailUtilisateur(param.userId);
      getListePostParUtilisateur(param.userId);
    }
  }, []);

  return (
    <div className="pt-10 pb-24">
      <h1 className="text-3xl font-bold text-center">Détail utilisateur</h1>

      {detailUtilisateur ? (
        <div className="mt-7 w-96 mx-auto bg-gray-100 p-4 rounded-lg">
          <h2 className="truncate text-xl font-bold">
            {detailUtilisateur.name}
          </h2>
          <p className="truncate">{detailUtilisateur.email}</p>
        </div>
      ) : null}

      <div className="w-11/12 max-w-6xl mx-auto mt-10">
        <h1 className="text-2xl font-bold">Posts utilisateur</h1>

        <div className="w-full mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {!isLoadingPost
            ? listePosts.map((post) => (
              <div
                key={post.id}
                onClick={() => {
                  document.getElementById("modal-post").showModal()
                  setPostDetail(post)
                }}
              >
                <div className="bg-gray-100 p-4 rounded-lg cursor-pointer hover:drop-shadow-lg">
                  <h2 className="truncate text-xl font-bold">{post.title}</h2>
                  <p className="truncate">{post.body}</p>
                </div>
              </div>
            ))
            : null}

          {isLoadingPost
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

          {listePosts.length === 0 && !isLoadingPost ? (
            <div className="text-center w-full">Aucun utilisateur trouvé</div>
          ) : null}
        </div>
      </div>

      <dialog id="modal-post" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{postDetail ? postDetail.title : null}</h3>
          <p className="py-4">
            {postDetail ? postDetail.body : null}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Fermer</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UtilisateurDetail;
