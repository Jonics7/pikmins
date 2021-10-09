require('fetch-cookie/node-fetch')(require('node-fetch'));

import express from 'express';
import { GraphQLClient, gql } from 'graphql-request';

import { Dataset, Field, FieldType } from 'common';

const router = express.Router();
const app = express();

const endpoint = 'http://datahub.yc.pbd.ai:9002/api/graphql';

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        cookie: 'bid=7df87efa-05bd-448d-8f2d-13f8edcec6d4; PLAY_SESSION=669be67ce71855799441548a73a0d8a4293d0b89-actor=urn%3Ali%3Acorpuser%3Adatahub; actor=urn:li:corpuser:datahub',
    },
});

const query = gql`
    {
        search(input: { type: DATASET, query: "*", start: 0, count: 100 }) {
            start
            count
            total
            searchResults {
                entity {
                    urn
                    ... on Dataset {
                        name
                        schemaMetadata(version: 0) {
                            aspectVersion
                            datasetUrn
                            cluster
                            createdAt
                            fields {
                                fieldPath
                                jsonPath
                                description
                                type
                                nativeDataType
                                recursive
                                tags {
                                    tags {
                                        tag {
                                            name
                                        }
                                    }
                                }
                            }
                            primaryKeys
                            foreignKeys {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;

router.get('/datasets', function (req, res) {
    graphQLClient
        .request(query)
        .then((value) => {
            const results = value.search.searchResults as any[];
            const datasets = results.map<Dataset>(({ entity }) => {
                const fields = (entity.schemaMetadata.fields as any[])
                    .filter((f) => !(f.fieldPath as string).includes('.'))
                    .map<Field>((f) => {
                        return {
                            id: f.fieldPath,
                            type: (f.type as string).toLowerCase() as FieldType,
                            description: f.description,
                        };
                    });
                return {
                    urn: entity.urn,
                    title: entity.name,
                    fields,
                };
            });
            res.json(datasets);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.get('/', function (req, res) {
    res.send('Hello from pikmins!');
});

app.use(router);

app.listen(5000);
