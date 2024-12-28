import Button from "./Button";

const ConfirmRemovalDialog = ({
  onConfirm,
  onClose,
  confirmMessage,
  message,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-100  rounded-lg shadow-lg p-6 w-3/4 max-w-3xl">
        <h2 className="sm:text-3xl text-2xl font-semibold text-gray-800 mb-4 ">
          Are you sure?
        </h2>
        <p className="text-gray-600 mb-6 sm:text-xl text-lg ">{message}</p>
        <div className="flex justify-end space-x-4">
          <Button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="bg-red-500 text-white px-3 py-2 hover:bg-red-600 sm:text-lg text-md"
          >
            {confirmMessage}
          </Button>
          <Button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRemovalDialog;
