import { v4 as uuid } from "uuid";
import { Post } from "../entities/Post";

export const getMockPost = (): Post => ({
    post_id: uuid(),
    author: "aline@gmail.com",
    content: "Some content twitx"
})
