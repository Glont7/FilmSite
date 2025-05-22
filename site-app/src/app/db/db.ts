import { id, i, init, InstaQLEntity } from "@instantdb/core";

// ID for app: Films
const APP_ID = "9256a4aa-669c-402f-9c8c-5e07e6e40537";

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
      films: i.entity({
      id:i.string(),
      name: i.string(),
      image: i.string(),
      rating: i.string(),
      watchTime: i.number(),
      //tags: i.string(),
    }),
  },
});

const db = init({ appId: APP_ID, schema });

export {db, schema};