const InputBox = ( placeholder, value, onChange, name ) => {
      return (
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      );
    };
    
    export default InputBox;