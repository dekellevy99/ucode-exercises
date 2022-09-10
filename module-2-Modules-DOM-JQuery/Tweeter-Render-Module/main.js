tweeterModule = TweeterModule();
tweeterRender = TweeterRender();

tweeterRender.renderPosts(tweeterModule.getPosts())
tweeterModule.addPost("my new post!!"); //p3
tweeterRender.renderPosts(tweeterModule.getPosts())
tweeterModule.addComment("p3", "my first comment");
tweeterRender.renderPosts(tweeterModule.getPosts())
tweeterModule.removeComment("p7", "c7"); //p7 doesn't exist => error print on console
tweeterModule.removeComment("p3", "c7");
tweeterRender.renderPosts(tweeterModule.getPosts())