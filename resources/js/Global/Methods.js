import toast from "react-hot-toast";

export const showSuccessToast = (message) => {
    toast.success(message, {
        position: 'bottom-center',
        duration: 5000,
        style: {
            backgroundColor: '#00BA7C',
            color: 'white',
        },
        icon: '',
    });
};

export const showErrorToast = (message) => {
    toast.success(message, {
        position: 'bottom-center',
        style: {
            backgroundColor: '#e71939',
            color: 'white',
        },
        duration: 5000,
        icon: '',
    });
};


export const formatPrice = (number) => {
    return (+number).toLocaleString() 
}