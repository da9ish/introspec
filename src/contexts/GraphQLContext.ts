import { createContext } from "react";
import { buildClientSchema, GraphQLSchema } from "graphql";

export interface GraphQLType {
  schema: GraphQLSchema | null;
  reloadSchema: () => void;
}

const schemaData = window.localStorage.getItem("grapql-schema");

const initialValue: GraphQLType = {
  schema: schemaData ? buildClientSchema(JSON.parse(schemaData)) : null,
  reloadSchema: () => {},
};

const GraphQLContext = createContext<GraphQLType>(initialValue);

export default GraphQLContext;
