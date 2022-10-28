import SignIn from "../components/SignIn"




function LogInPage(){
    return (
        <section className="flex flex-col justify-center items-center w-screen h-screen">
                <SignIn/>
                <h1>Don't have an account?</h1>
                <a href="#" className="text-blue-300">Click here</a>
        </section>
    )
}
export default LogInPage