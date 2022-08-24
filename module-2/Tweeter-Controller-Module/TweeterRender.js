const TweeterRender = function(){

    const _createCommentsElem = function(comments){
        let commentsElem = "";
        for (const commnet of comments){
            let commentId = commnet.id;
            let commentText = commnet.text
            commentsElem += `<div data-id=${commentId}>
                                <span class=delete-comment> X </span>
                                <p class=comment-text> ${commentText} </p>
                            </div>`
        }

        commentsElem += `<input class=comment-input type=text placeholder="Got something to say?">
                         <button class=add-comment> comment </button>`
        return commentsElem;
    }

    const _createPostElem = function(post){
        let id = post.id;
        let text = post.text;
        let comments = post.comments;
        let postDiv = `<div class=post data-id=${id}>
                            <p class=post-text> ${text} </p>
                            <div class=comments>
                                ${_createCommentsElem(comments)}
                            </div>
                            <button class=delete>Delete Post</button>
                        </div>`;
        return $(postDiv);
    }

    const renderPosts = function(posts){
        const postsContainer = $("#posts");
        postsContainer.empty();

        for(const post of posts){
            let postDiv = _createPostElem(post);
            postsContainer.append(postDiv);
        }
    }

    return {
        renderPosts: renderPosts
    }
}