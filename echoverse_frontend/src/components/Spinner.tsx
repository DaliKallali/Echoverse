import { Circles } from "react-loader-spinner";

function Spinner({ message }: { message: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="m-5">
        <Circles
          color="#FF0045"
          height={50}
          width={200}
          ariaLabel="loading-indicator"
        />
      </div>

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
