import {AnimatePresence, motion} from "framer-motion";
import React from "react";


const Modal = ({children , show , onClose} ) => {

    return (
        <AnimatePresence>
            <motion.div
                className={show ? 'h-screen w-screen fixed bg-black transition-all duration-300 bg-opacity-40 z-40 top-0 left-0 flex justify-center items-center ' : ''}>
                <div
                    className="modal">
                    <div>
                        <AnimatePresence>
                            {show &&
                                <div onClick={(e) => onClose()}
                                     className={'h-screen w-screen fixed inside z-20 top-0 left-0 flex justify-center items-center '}>
                                    <motion.div
                                        initial={{opacity: 0 }}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0 }}
                                        transition={{duration: 0.2}}
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-[95%] max-w-[540px] z-30 !max-h-[90vh] overflow-hidden p-5 overflow-y-auto custom-scrollbar bg-white  rounded-md shadow-xl transition-all transform"
                                    >
                                        {children}
                                    </motion.div>
                                </div>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
};

export default Modal;
