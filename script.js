// Add Book: The addBook function takes title and author parameters, creates a book object with the given title and author, and adds it to the bookshelf array. It then displays a message indicating that the book was added.

// Remove Book: The removeBook function takes a title parameter and searches for the book in the bookshelf array based on the title. If the book is found, it is removed from the array, and a message is displayed indicating that the book was removed. If the book is not found, a message is displayed indicating that the book was not found.

// Display Books: The displayBooks function checks if the bookshelf array is empty. If it is, it displays a message indicating that the bookshelf is empty. Otherwise, it loops through each book in the array and displays its title and author.

// In the example usage, we add three books to the bookshelf, display all the books, remove one book, and then display the updated list of books.

// Feel free to run this code and explore the functionalities of the virtual bookshelf. You can add more books, remove books by their title, and see the updated list of books displayed.



 let bookShelfArr=[]
// let bookarr=[]
function addbook(author,title){
book={
    author:author,
    title:title
}

 bookShelfArr.push(book)
 

 console.log(`you added author: ${author} title: ${title}`)
}
addbook("dequan", "Zues")
addbook("dequan", "Power")


// book={
//     author:this.author,
//     title:this.title,

//     addBook(author,title){
//         let newBook=`author:${author} title:${title}`
//         bookShelfArr.push(newBook)
//         console.log(newBook)
//     }
// }

// book.addBook("dequan","zues")
// book.addBook("dequan","zues")
// console.log(bookShelfArr)

function removeBook(title){
    
   bookShelfArr.filter(book=>{
    if(book.title===title){
     let index=  bookShelfArr.indexOf(book)
     console.log(bookShelfArr.splice(index,1))
    console.log(bookShelfArr)
        
    }
    
   })
    
}
removeBook("Zues")
removeBook("Power")

function display(){
    let displayBooks=[]
    let empty="sorry no books"
    if(bookShelfArr.length===0){
         console.log(empty)
    }
    bookShelfArr.forEach(element => {
        console.log(` books on the shelf,author: ${element.author} title: ${element.title}`)
    });
    // for(let i = 0; i<bookShelfArr.length;i++){
    // }
    


}

addbook("dequan","how to code")
addbook("dequan","code master")
display()