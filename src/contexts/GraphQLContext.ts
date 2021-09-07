import { createContext } from "react";
import { GraphQLSchema } from "graphql";

export interface GraphQLType {
  schema: GraphQLSchema | null;
  reloadSchema: () => void;
}

const initialValue: GraphQLType = {
  schema: null,
  reloadSchema: () => {},
};

const GraphQLContext = createContext<GraphQLType>(initialValue);

export default GraphQLContext;
