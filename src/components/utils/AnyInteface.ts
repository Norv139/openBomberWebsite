
export interface ICommitObj {
    sha: string;
    node_id: string;
    url: string;
    html_url: string;
    comments_url: string;
    commit: ICommit;
    author: IAuthor;
    committer: ICommitter;
    parents: Array<IParent>;
}

interface IParent {
    sha: string;
    url: string;
    html_url: string;
}

interface ICommitter {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: any;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

interface IAuthor {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: any;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

interface ICommit {
    message: string;
    url: string;
    comment_count: number;
    author: {
        name: string;
        email: string;
        date: string;
    };
    committer: {
        name: string;
        email: string;
        date: string;
    };
    tree: {
        sha: string;
        url: string;
    };
    verification: {
        verified: boolean;
        reason: string;
        signature: any;
        payload: any;
    };
}

// 