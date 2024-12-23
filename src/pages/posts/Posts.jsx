import React, { useEffect, useState } from "react";
import { recupererListePosts } from "../../api/posts/PostApi";

const Posts = () => {
  const [listePosts, setListePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getListeDesPosts = () => {
    recupererListePosts()
      .then((response) => {
        setIsLoading(false);
        setListePosts(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getListeDesPosts();
  }, []);

  return (
    <div className="pt-10 pb-24">
      <h1 className="text-3xl font-bold text-center">Liste des postes</h1>

      <div className="w-11/12 max-w-6xl mx-auto mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {!isLoading
          ? listePosts.map((post) => (
            <div key={post.id} className="bg-gray-100 p-4 rounded-lg">
              <h2 className="truncate text-xl font-bold">{post.title}</h2>
              <p className="truncate">{post.body}</p>
            </div>
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

        {listePosts.length === 0 && !isLoading ? (
          <div className="text-center w-full">Aucun post trouvé</div>
        ) : null}
      </div>
    </div>
  );
};

export default Posts;
