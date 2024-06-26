class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null; 
    }
    set state(state){
        if(state == 0){
            return this._state = 0;
        }if(state > 0 && state < 100){
            return this._state = state;
        }
        return this._state = 100;
    }
    get state(){
        return this._state;
    }; 

     fix(){
        if (this.state === 0 || this.state === undefined){
            return
        }
        return this.state *= 1.5;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
} 

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate,pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate,pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate,pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'
    }
}

class Library {
    constructor(name){
        this.name = name;  
        this.books = [];  
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        for(let item in this.books){
            if(this.books[item].hasOwnProperty(type) && this.books[item][type] === value) {
                return this.books[item];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for(let item in this.books){
            if(this.books[item].name == bookName){
                let issueBook = new PrintEditionItem(this.books[item])
                this.books.splice(item, 1)
                return issueBook.name;
            }
        }
        return null
    } 
}