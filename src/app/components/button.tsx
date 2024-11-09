interface ButtonProps {
    label: string; // Button ka label
    onClick?: () => void; // Button par click karne ka function
  }
  
  export default function Button({ props, onClick }: any) {
    return (
      <button
        onClick={onClick} // onClick prop ko button par apply karna
        className="bg-gradient-to-r from-teal-500 to-blue-600 
                   sm:px-2 sm:py-1 px-2 py-1 rounded-lg 
                   hover:from-blue-600 hover:to-teal-500 
                   text-white text-lg font-semibold transition 
                   duration-300 ease-in-out shadow-lg 
                   transform hover:scale-105"
      >
        {props}
      </button>
    );
  }