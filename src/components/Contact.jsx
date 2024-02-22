import { useState } from "react";

const Contact = ({ ...props }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [height, setHeight] = useState(0);
    return (
        <div {...props}>
            <p className="mt-4">Your Name</p>
            <input className="w-full bg-[#FFF2] border-2 border-[#FFF2] rounded-[32px] mt-2 p-4 outline-none focus:shadow backdrop-blur" onChange={(e) => setName(e.target.value)} />
            <p className="mt-4">Your Email</p>
            <input className="w-full bg-[#FFF2] border-2 border-[#FFF2] rounded-[32px] mt-2 p-4 outline-none focus:shadow backdrop-blur" onChange={(e) => setEmail(e.target.value)} />
            <p className="mt-4">Your Message</p>
            <textarea className="w-full bg-[#FFF2] border-2 border-[#FFF2] rounded-[32px] mt-2 p-4 outline-none focus:shadow backdrop-blur min-h-40" onChange={(e) => {
                setMessage(e.target.value)
                e.target.style.height = 'auto';
                setHeight(e.target.scrollHeight + 4);
            }}
                style={{ height }}
            />
            <button className="shadow px-16 py-3 rounded-full bg-gradient-to-b from-[#0000] to-[#0001] border-t border-t-[#FFF2] border-b border-b-[#0002] backdrop-blur mt-4">
                SEND
            </button>
        </div>
    )
}

export default Contact;