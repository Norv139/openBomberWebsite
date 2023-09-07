import type { ICommitObj }  from "./utils";

// const baseUrl = "https://github.com/"
const baseUrlAPI = "https://api.github.com/repos/"
const project = "vicimpa/openbomber";

async function getData() {

    const response = await fetch(`${baseUrlAPI}${project}/commits`);

    let data: Array<ICommitObj> = await response.json();

    return data.map((itemCommit) => {
        return {
            html_url: itemCommit.html_url,
            message: itemCommit.commit.message,
            author: {
                name: itemCommit.commit.author.name,
                avatar_url: itemCommit.committer.avatar_url,
                url: itemCommit.committer.html_url
            },
        };
    });
    
}

export default getData