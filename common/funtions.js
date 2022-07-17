import { gql } from "@apollo/client";
import client from "apollo-client";
import fs from "fs";
import path from "path";

export const getResources = async (fileName) => {
    try {
        const { data } = await client.query({
            query: gql`
                query Countries {
                    countries {
                        code
                        name
                        emoji
                    }
                    country(code: "AD") {
                        code
                        name
                        emoji
                    }
                }
            `,
        });

        const pathName = path.resolve(
            path.join(process.cwd(), "resources", fileName)
        );

        fs.writeFileSync(pathName, JSON.stringify(data));

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
};
