# Curiosities:

-> import useState and useContext </br>
-> with useContext is possible to pass values to children componets and access the state in all project. </br>
    -> To do it you have to create a component that gonna stay with the STATE and return the 'Provider'. </br>
    -> Is possible to pass value throught the Provider in the return (The other components gonna access that). </br>
    -> In the App.js you should import the Context of the component that has been create and put it around the other components. </br>
    -> To Acess this State in other components you can just do as usually => const [movies, setMovies] = useContext(MovieContext) </br>


