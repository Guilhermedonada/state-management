# Curiosities:

-> import useState and useContext
-> with useContext is possible to pass values to children componets and access the state in all project.
    -> To do it you have to create a component that gonna stay with the STATE and return the 'Provider'.
    -> Is possible to pass value throught the Provider in the return (The other components gonna access that).
    -> In the App.js you should import the Context of the component that has been create and put it around the other components.
    -> To Acess this State in other components you can just do as usually => const [movies, setMovies] = useContext(MovieContext)


