import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AdityaRaje13")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <h1 className="flex items-center content-center text-5xl max-h-[20%] max-w-[80%] mx-[30%] mt-8">
        Github Followers : {data.followers}{" "}
      </h1>

      <p className="text-2xl max-w-[80%] mx-[30%] mt-8"><b>Bio : </b>{data.bio}</p>

      <img src={data.avatar_url} alt="" className="max-w-[80%] mx-[30%] mt-8 mb-8"/>
    </>
  );
}

export default Github;
