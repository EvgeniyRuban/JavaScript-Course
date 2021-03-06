"use strict";
class Post{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(data) {
        this.text = data;
    }
}

class AttachedPost extends Post{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}