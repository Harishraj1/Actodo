import Header from "./Header"
import Cards from "./Cards"
import TodoContainer from "./TodoContainer"
import { useLocation } from "react-router-dom"


function LandingPage() {

    const data = useLocation()
    console.log(data)

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <Header name={data.state.name}/>
                <div className="flex justify-between gap-5 my-5 flex-wrap">
                    <Cards bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Cards bgcolor={"#FD6663"} title={"July 20"} subtitle={"23:14:02"} />
                    <Cards bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
                </div>
                <TodoContainer />
            </div>
        </div>
    )
}

export default LandingPage