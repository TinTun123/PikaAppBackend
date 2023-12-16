import toast from "react-hot-toast";

export const showSuccessToast = (message) => {
    toast.success(message, {
        position: 'bottom-center',
        style: {
            backgroundColor: '#00BA7C',
            color: 'white',
        },
        icon: '',
    });
};


export const formatPrice = (number) => {
    return (+number).toLocaleString() 
}