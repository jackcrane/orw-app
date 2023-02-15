import React, { useEffect, useState } from "react";
import { Utils, Typography } from "../ui-kit";
import { DataStore } from "../util/data";

const Home = () => {
  const [name, setName] = useState(null);
  useEffect(() => {
    DataStore.get("name").then((name) => setName(name));
    (async () => {
      const f = await DataStore.getAll();
      console.log(f);
    })();
  }, []);
  return (
    <Utils.Container>
      <Typography.Text>Howdy{name && `, ${name}`}</Typography.Text>
      <Typography.Title>Home</Typography.Title>
      <Typography.Text>{JSON.stringify(name)}</Typography.Text>
    </Utils.Container>
  );
};

export { Home };
