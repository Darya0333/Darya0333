import ReactTypingEffect from "react-typing-effect";

const Home = () => {
    return (
        <>
            <div className="flex h-screen">
                <div className="w-1/2 text-center flex items-center justify-center">
                    <div>
                        <h1 className="text-6xl text-white">Kyosuke Yamada</h1>
                        <ReactTypingEffect
                            className="text-2xl text-white"
                            text={['Software engineer', 'Backend developer']}
                            speed={50}
                            eraseDelay={1000}
                        />
                        <div className="mt-16 flex justify-center">
                            <button className="shadow px-16 py-3 rounded-full text-white bg-gradient-to-b from-[#0000] to-[#0001] border-t border-t-[#FFF2] border-b border-b-[#0002]">
                                RESUME
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">

                </div>
            </div>
        </>
    );
}

export default Home;