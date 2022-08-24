tweeterModule = TweeterModule();
tweeterRender = TweeterRender();
tweeterRender.renderPosts(tweeterModule.getPosts());

const post = function(){
    let twitText = $("#input").val();
    if(twitText.length > 0){
        tweeterModule.addPost(twitText);
        tweeterRender.renderPosts(tweeterModule.getPosts());
    }
    $("#input").val("");
}

$("#posts").on("click", ".delete", function(){
    let postId = $(this).closest(".post").data().id;
    tweeterModule.removePost(postId);
    tweeterRender.renderPosts(tweeterModule.getPosts());
})



$("#posts").on("click", ".add-comment", function(){
    let commentText = $(this).closest(".comments").find(".comment-input").val();
    if(commentText.length > 0){
        let postId = $(this).closest(".post").data().id;
        tweeterModule.addComment(postId, commentText);
        tweeterRender.renderPosts(tweeterModule.getPosts());
    }

    $("#comment-input").val("");
})



$("#posts").on("click", ".delete-comment", function(){
    let commentId = $(this).closest("div").data().id;
    let postId = $(this).closest(".post").data().id;
    tweeterModule.removeComment(postId, commentId);
    tweeterRender.renderPosts(tweeterModule.getPosts());
})
