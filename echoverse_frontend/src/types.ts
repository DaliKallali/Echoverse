export type dataCredential = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
};

export type User = {
  _id: string;
  _type: "user";
  userName: string;
  image: string;
};

export type Pin = {
  _id: string;
  title: string;
  about: string;
  destination: string;
  category: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
    hotspot?: boolean;
  };
  userId: string;
  postedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  save: Save[];
  comments: Comment[];
};

export type Save = {
  postedBy: {
    _id: string;
    name: string;
    image: string;
  };
  userId: string;
};

export type Comment = {
  postedBy: PostedBy;
  commentText: string;
};

export type PostedBy = {
  _id: string;
  userName: string;
  image: string;
};
