import Post from "./Post.js";
import fileService from "./FileService.js";
class PostService{
    async create(post, picture) {
        const fileName = fileService.saveFile(picture);
        const createPost = await Post.create({...post, picture: fileName});
        return createPost;
    }
    async getAll() {
        const posts = await Post.find();
        return posts;
    }
    async getOne(id){
        if (!id) {
            throw Error('id не указан');
        }
        const post = await Post.findById(id);
        return post;
    }
    async update(post) {
        if (!post._id) {
            throw Error('id не указан');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost;
    }
    async delete(id){
            if (!id){
                throw Error('id не указан');
            }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }
}
export default new  PostService();
