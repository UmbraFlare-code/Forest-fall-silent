import { motion } from "framer-motion";

const FaceChapter = () => {
    return (
        <>
            <motion.h1 className="text-center" animate={{ x: -20 }}>Guardian of Climate</motion.h1>
            <div className="avatar-presentation">    
                <div className="presentation">
                    <p className="text-center">
                        Thousands of years ago the Amazon was protected by the Guardian. Everything was in balance, human life and the environment benefited each other. But suddenly  everything changed when the Guardian of the Amazon disappeared. Only he could restore the Amazon and safeguard the balance. 
                        We have reached a critical point. Your help is vital. Today, you will play the role of this Guardian. Your decisions will shape tomorrow. Choose wisely.
                        Below you will find information that will be useful for your adventure.
                    </p>
                </div>
                <div className="avatar flex-row">    
                    <img src="/images/intro/Guardian.png" alt="Guardian"/>
                </div>
            </div>
        </>
    )
}

export default FaceChapter;
