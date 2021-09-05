import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Type from "../components/private/Type";
import pascalcase from "pascalcase";

const Query: React.FC = () => {
  const {queryName} = useParams()
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const query = (graphQLSchema.getQueryType() as GraphQLObjectType).toConfig().fields[queryName]
  const fields = (graphQLSchema.getType(queryName) as GraphQLObjectType)?.getFields()

  return (
    <>
      <h2>{pascalcase(queryName)} <Box as="code" css={{fontWeight: '400'}}>{queryName}</Box></h2>
      <p>{query?.description}</p>
      {query?.args && 
        <>
          <h3>Arguments</h3>
          {Object.keys(query.args).map(arg => (
            <Box>
              <Box css={{display: 'flex', alignItems: 'center'}}>
                <Box as="code" css={{marginRight: '8px'}}>{arg}:</Box>
                {query.args && <Type type={query.args[arg].type} />}
              </Box>
              <p>{query.args?.[arg].description}</p>
            </Box>
          ))}
        </>
      }
      {fields && 
        <>
          <h3>Fields</h3>
          {Object.keys(fields).map(field => (
            <Box>
              <Box css={{display: 'flex', alignItems: 'center'}}>
                <Box as="code" css={{marginRight: '8px'}}>{field}:</Box>
                <Type type={fields[field].type} />
              </Box>
              <p>{fields[field].description}</p>
            </Box>
          ))}
        </>
      }

      <h3>Example</h3>
      <Box as="pre" css={{fontSize: '16px', padding: '32px', backgroundColor: '#313131', color: 'white', borderRadius: '20px'}}>
        {`${queryName} ${query?.args && `(${Object.keys(query.args).map(arg => (`${arg}: ${query.args?.[arg].type.toJSON()}`)).join(", ")})`} {\n`}
        {fields && `${Object.keys(fields).map(field => (`  ${field}: ${fields[field].type.toJSON()}`)).join("\n")}`}
        {`\n}`}
      </Box>
    </>
  )
}

export default Query