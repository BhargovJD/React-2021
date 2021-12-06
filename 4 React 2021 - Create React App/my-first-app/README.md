1.  Creating React app

    1. create-react-app my-first-app
    2. npm start

2.  Works done in src folder

3.  index.js includes App.js module

4.  Or we can make it as App.js include all other Component files and index.js contain only App.js file.

5.  Lets create a Dog.js Component.

    import React,{Component} from "react";
    import './Dog.css'

            class Dog extends Component{
            render(){
                return (
                    <div className="Dog">
                        <h1>DOG!!!</h1>
                    </div>
                )
            }
        }

        export default Dog;

6.  Dog.css

    .Dog{
    color:red;
    }

7.  App.js will include Dog.js

        import './App.css';
        import Dog from './Dog';


        function App() {
        return (
            <div className="App">
            <Dog/>

            </div>
        );
        }

        export default App;

8.  At last index.js will include App.js(Already given)
