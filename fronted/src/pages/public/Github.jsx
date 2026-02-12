import { useLoaderData } from "react-router-dom";

const Github = () => {

  const users = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-5 p-5">

      {users.map((user) => (

        <div
          key={user.id}
          className="text-center bg-gray-600 text-white p-4 rounded"
        >

          <h2>{user.login}</h2>

          <p>Followers: {user.followers}</p>

          <img
            src={user.avatar_url}
            alt={user.login}
            width={200}
            className="mx-auto rounded-full mt-3"
          />

        </div>

      ))}

    </div>
  );
};

export default Github;


export const githubInfoLoader = async () => {

  const users = [
    "ankit-kr-maurya-82",
    "bhrantiknagar",
    "hackthejack08-cmyk",
    "anshumaanpandey20-glitch"
  ];

  const responses = await Promise.all(

    users.map(user =>
      fetch(`https://api.github.com/users/${user}`)
    )

  );

  const data = await Promise.all(
    responses.map(res => res.json())
  );

  return data;
};

