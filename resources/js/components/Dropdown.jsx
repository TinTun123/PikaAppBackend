import {useState, createContext, useContext, Fragment} from 'react';
import {Link} from '@inertiajs/react';
import {Transition} from '@headlessui/react';

const DropDownContext = createContext();

const Dropdown = ({children}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        console.log(open);
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{open, setOpen, toggleOpen}}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({children}) => {
    const {open, setOpen, toggleOpen} = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && <div className="fixed inset-0 z-40 " onClick={() => setOpen(false)}></div>}
        </>
    );
};

const Content = ({align = 'right', contentClasses = '', containerClasses = '', children}) => {
    const {open, setOpen} = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'origin-top-left left-0';
    } else if (align === 'right') {
        alignmentClasses = 'origin-top-right right-0';
    }


    return (
        <>
            {/*<Transition*/}
            {/*    as={Fragment}*/}
            {/*    show={open}*/}
            {/*    enter="transition ease-out duration-200"*/}
            {/*    enterFrom="transform opacity-0 scale-95"*/}
            {/*    enterTo="transform opacity-100 scale-100"*/}
            {/*    leave="transition ease-in duration-75"*/}
            {/*    leaveFrom="transform opacity-100 scale-100"*/}
            {/*    leaveTo="transform opacity-0 scale-95"*/}
            {/*>*/}
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg w-48 ${alignmentClasses} ${containerClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div
                        className={'rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white dark:bg-gray-800 dark:text-white ' + contentClasses}>{children}</div>
                </div>
            {/*</Transition>*/}
        </>
    );
};

const DropdownLink = ({ className = '', children, ...props}) => {
    return <Link
        {...props}
        className={
            'block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:dark:bg-gray-900 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ' +
            className
        }
    >
        {children}
    </Link>;
};

const DropdownContent = ({onClick, className = '', children, ...props}) => {
    return <div
        {...props}
        onClick={onClick}
        className={
            'block w-full px-4 py-2 cursor-pointer text-left text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:dark:bg-gray-900 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ' +
            className
        }
    >
        {children}
    </div>;
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
Dropdown.Item = DropdownContent;

export default Dropdown;
