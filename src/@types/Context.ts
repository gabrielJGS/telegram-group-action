export interface Context {
    payload:    Payload;
    eventName:  string;
    sha:        string;
    ref:        string;
    workflow:   string;
    action:     string;
    actor:      string;
    job:        string;
    runNumber:  string;
    runId:      string;
    apiUrl:     string;
    serverUrl:  string;
    graphqlUrl: string;
}

export interface Payload {
    after:       string;
    base_ref:    null;
    before:      string;
    commits:     Commit[];
    compare:     string;
    created:     boolean;
    deleted:     boolean;
    forced:      boolean;
    head_commit: Commit;
    pusher:      Pusher;
    ref:         string;
    repository:  Repository;
    sender:      Sender;
}

export interface Commit {
    author:    Author;
    committer: Author;
    distinct:  boolean;
    id:        string;
    message:   string;
    timestamp: string;
    tree_id:   string;
    url:       string;
}

export interface Author {
    email:    string;
    name:     string;
    username: string;
}

export interface Pusher {
    email: string;
    name:  string;
}

export interface Repository {
    allow_forking:               boolean;
    archive_url:                 string;
    archived:                    boolean;
    assignees_url:               string;
    blobs_url:                   string;
    branches_url:                string;
    clone_url:                   string;
    collaborators_url:           string;
    comments_url:                string;
    commits_url:                 string;
    compare_url:                 string;
    contents_url:                string;
    contributors_url:            string;
    created_at:                  number;
    default_branch:              string;
    deployments_url:             string;
    description:                 null;
    disabled:                    boolean;
    downloads_url:               string;
    events_url:                  string;
    fork:                        boolean;
    forks:                       number;
    forks_count:                 number;
    forks_url:                   string;
    full_name:                   string;
    git_commits_url:             string;
    git_refs_url:                string;
    git_tags_url:                string;
    git_url:                     string;
    has_discussions:             boolean;
    has_downloads:               boolean;
    has_issues:                  boolean;
    has_pages:                   boolean;
    has_projects:                boolean;
    has_wiki:                    boolean;
    homepage:                    null;
    hooks_url:                   string;
    html_url:                    string;
    id:                          string;
    is_template:                 boolean;
    issue_comment_url:           string;
    issue_events_url:            string;
    issues_url:                  string;
    keys_url:                    string;
    labels_url:                  string;
    language:                    string;
    languages_url:               string;
    license:                     null;
    master_branch:               string;
    merges_url:                  string;
    milestones_url:              string;
    mirror_url:                  null;
    name:                        string;
    node_id:                     string;
    notifications_url:           string;
    open_issues:                 number;
    open_issues_count:           number;
    owner:                       Sender;
    private:                     boolean;
    pulls_url:                   string;
    pushed_at:                   number;
    releases_url:                string;
    size:                        string;
    ssh_url:                     string;
    stargazers:                  number;
    stargazers_count:            number;
    stargazers_url:              string;
    statuses_url:                string;
    subscribers_url:             string;
    subscription_url:            string;
    svn_url:                     string;
    tags_url:                    string;
    teams_url:                   string;
    topics:                      any[];
    trees_url:                   string;
    updated_at:                  string;
    url:                         string;
    visibility:                  string;
    watchers:                    number;
    watchers_count:              number;
    web_commit_signoff_required: boolean;
}

export interface Sender {
    avatar_url:          string;
    email?:              string;
    events_url:          string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    gravatar_id:         string;
    html_url:            string;
    id:                  string;
    login:               string;
    name?:               string;
    node_id:             string;
    organizations_url:   string;
    received_events_url: string;
    repos_url:           string;
    site_admin:          boolean;
    starred_url:         string;
    subscriptions_url:   string;
    type:                string;
    url:                 string;
}
