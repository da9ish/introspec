import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Tag from "../components/private/Tag";
import pascalcase from "pascalcase";
import Codeblock from "../components/Codeblock";

const Query: React.FC = () => {
  const {queryName} = useParams()
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const query = (graphQLSchema.getQueryType() as GraphQLObjectType).toConfig().fields[queryName]
  const fields = (graphQLSchema.getType(queryName) as GraphQLObjectType)?.getFields()

  return (
    <>
      <h2>{pascalcase(queryName)} <Tag name="node">{queryName}</Tag></h2>
      <p>{query?.description || 'No description'}</p>
      {query?.args && 
        <>
          <h3>Arguments</h3>
          {Object.keys(query.args).map(arg => (
            <Box>
              <Box css={{display: 'flex', alignItems: 'center'}}>
                <Box as="code" css={{marginRight: '8px'}}>{arg}:</Box>
                {query.args && <Tag name="arg" urlParam={(query.args[arg].type as any).name}>{query.args[arg].type.toJSON()}</Tag>}
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
                <Tag name="field" urlParam={(fields[field].type as any).name}>{fields[field].type.toJSON()}</Tag>
              </Box>
              <p>{fields[field].description}</p>
            </Box>
          ))}
        </>
      }

      <h3>Example</h3>
      <Codeblock>
        {`${queryName} ${query?.args && `(${Object.keys(query.args).map(arg => (`${arg}: ${query.args?.[arg].type.toJSON()}`)).join(", ")})`} {\n`}
        {fields && `${Object.keys(fields).map(field => (`  ${field}: ${fields[field].type.toJSON()}`)).join("\n")}`}
        {`\n}`}
      </Codeblock>
    </>
  )
}

export default Query