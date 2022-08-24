const TweeterModule = function(){
    const _posts = 
                [
                    {
                        text: "First post!",
                        id: "p1",
                        comments: [
                            { id: "c1", text: "First comment on first post!" },
                            { id: "c2", text: "Second comment on first post!!" },
                            { id: "c3", text: "Third comment on first post!!!" }
                        ]
                    },
                    {
                        text: "Aw man, I wanted to be first",
                        id: "p2",
                        comments: [
                            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                            { id: "c5", text: "Yeah, believe in yourself!" },
                            { id: "c6", text: "Haha second place what a joke." }
                        ]
                    }
                ]

    let _counterId = 2;
    let _counterComment = 6;
    
    const _genPostId = function(){
        _counterId += 1;
        return `p${_counterId}`;
    };

    const _genCommentId = function(){
        _counterComment += 1;
        return `c${_counterComment}`;
    }

    const _isPostExist = function(postId){
        for(let i = 0; i < _posts.length; i++){
            if(_posts[i].id === postId){
                return i;
            }
        }
        return -1;
    }

    const _isCommentExist = function(post, commentId){
        let comments = post.comments;
        for(let i = 0; i < comments.length; i++){
            if(comments[i].id === commentId){
                return i;
            }
        }
        return -1;
    }

    const getPosts = function(){
        return _posts;
    }

    const addPost = function(text){
        let id = _genPostId();
        let newPost = {text: text,
                       id: id,
                       comments: []};
        _posts.push(newPost);
    }


    const removePost = function(postId){
        let index = _isPostExist(postId);
        if(index != -1){
            _posts.splice(index, 1);
        }else{
            console.log(`Given post ${postId} doesn't exist.`)    
        }
    }

    const addComment = function(postId, text){
        let index = _isPostExist(postId);
        if(index != -1){
            let commentId = _genCommentId();
            let newComment = {id: commentId,
                              text: text};
            _posts[index].comments.push(newComment); 
        }else{
            console.log(`Given post ${postId} doesn't exist.`)    
        }  
    }

    const removeComment = function(postId, commentId){
        let postIdx = _isPostExist(postId);
        if(postIdx != -1){
            let commentIdx = _isCommentExist(_posts[postIdx], commentId);
            if(commentIdx != -1){
                _posts[postIdx].comments.splice(commentIdx, 1);
            }else{
                console.log(`Given comment ${commentId} doesn't exist.`)  
            }
            
        }else{
            console.log(`Given post ${postId} doesn't exist.`)    
        } 
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    };
}

