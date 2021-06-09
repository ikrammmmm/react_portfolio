
import burger from "../images/burger.png";
import employee from "../images/employee.png";
import weather from "../images/weather.png";
import note from "../images/note.png";
import googlebooks from "../images/google-books.png";
import portfoilio from "../images/portfolio.png";

var projects = [
    {
        "name":"Stormy Weather App",
        "github":"https://github.com/ikrammmmm/Stromy",
        "demo": "https://ikrammmmm.github.io/Stromy/",
        "image":weather,
        "description" : "Weather app for the travelers to check weather in diffrent cities "
    },
    {
        "name":"Note Taker App",
        "github":"https://github.com/ikrammmmm/NoteTaker",
        "demo": "https://note-taker-apz.herokuapp.com/notes",
        "image":note,
        "description" : "Web app to write write and save the notes for the small business owners"
    },
    {
        "name":"Employee Directory App",
        "github":"https://github.com/ikrammmmm/employee_directory",
        "demo": "http://ikrammmmm.github.io/employee_directory",
        "image":employee,
        "description" : "Employee directory with React to view  entire employee directory at once and to sort and filter the list"
    },
    {
        "name":"Google Books",
        "github":"https://github.com/ikrammmmm/google-books",
        "demo": "https://google-book-search-ikram.herokuapp.com/",
        "image":googlebooks,
        "description" : " React-based Google Books Search app."
    },
    {
        "name":"Eat a Burger App",
        "github":"https://github.com/ikrammmmm/burger",
        "demo": "https://eat-burger-app-ikramm.herokuapp.com/",
        "image":burger,
        "description" : "This is a burger logger app with MySQL, Node, Express, Handlebars and a homemade ORM."
    },
    {
        "name":"Eat a Burger App",
        "github":"https://github.com/ikrammmmm/react_portfolio",
        "demo": "https://ikrammmmm.github.io/react_portfolio/",
        "image":portfoilio,
        "description" : "My portfolio website implemented using React JS "
    },

]
export default projects;