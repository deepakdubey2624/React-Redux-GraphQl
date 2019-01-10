
import schema from '../graphql/schema/schema';

export default (app) => {
  schema.applyMiddleware({
      app
  });

}



