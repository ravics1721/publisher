type Author =  {
    email: string;
    firstname: string;
    lastname:string; 
}


type Book = {
    title: string;
    isbn: string;
    authors: string;
    description: string;
}

type Magazine = {
    title: string;
    isbn: string;
    authors: string;
    publishedAt: string;
}

export {
    Author,Book, Magazine
}