import { getCustomRepository } from "typeorm";
import { Post } from "../entities/Post";
import { PostRepository } from "../repositories/PostRepository";

export class SavePostService {
    private postRepository: PostRepository

    constructor (
        postRepository: PostRepository = getCustomRepository(PostRepository)
    ){
        this.postRepository = postRepository
    }

    async execute (post: Post): Promise<Post> {
        return await this.postRepository.save(post)
    }
}