const cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={props.image}
            alt="cast"
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-gray-800 text-xl font-medium">{props.castName}</h1>
        <h5 className="text-gray-500 text-sm">as {props.castRole}</h5>
      </div>
    </div>
  );
};

export default cast;
