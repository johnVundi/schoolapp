import { useState } from "react";

function ResetPassword() {
  const [formToView, SetFormToView] = useState(0);

  return (
    <div className=" absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
      <div className=" max-w-lg mx-auto bg-slate-300 p-4">
        <div className="mt-5 flex justify-center ">
          <div
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => SetFormToView(0)}
          >
            Reset Password
          </div>
          <div
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => SetFormToView(1)}
          >
            Forget Password
          </div>
        </div>

        <div className="flex flex-col px-10 my-8 text-center items-center mt-0">
          {formToView === 1 ? (
            <>
              <label>Old Password:</label>
              <input type="password" className="label2" name="password" />
            </>
          ) : null}

          <label>New Password:</label>
          <input type="password" className="label2" name="password" />

          <label>Confirm Password:</label>
          <input type="password" className="label2" name="password" />

          <button
            type="button"
            className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-max"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
