"use strict";
function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = (data) =>{
    this.text = data;
}
function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = () =>{
    this.highlighted = true;
}
