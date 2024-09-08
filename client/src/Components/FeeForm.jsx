import React, { useState } from "react";
import Swal from "sweetalert2";

function FeeForm({id, currentFee, reloadPage}) {
  const [amount, setAmount] = useState({
    amt: "",
  });
  let initialFee = currentFee;
  function payFee(event) {
    event.preventDefault();
    if(currentFee === null){
        initialFee = 0
    }
    let feeDif = {
        fee_paid: parseInt(initialFee) + parseInt(amount.amt)
    }
    fetch(`/students/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feeDif),
    })
    .then((res) => {res.json()
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
            title: "Your fee balance has been updated",
            icon: "success",
            timer: 2000
          });
          setTimeout(() => {
            reloadPage();
          }, 1000);
      }else{
        Swal.fire({
          title: "There was an error updating your fee balance",
          icon: "error",
          timer: 2000
        });
        setTimeout(() => {
            reloadPage();
          }, 1000);
      }
    })
    .then(data => console.log(data));
    setAmount({
        amt: "",
    });
  }
  return (
        <div className="mb-6 w-full container mx-auto shadow-md border bottom-1 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Pay for the remaining fee.
            </h1>
            <form onSubmit={payFee} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="fee_paid"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Amount
                </label>

                  <input
                    type="number"
                    name="fee_paid"
                    id="fee_paid"
                    value={amount.fee_paid}
                    onChange={(event) =>
                        setAmount((prevState) => ({
                        ...prevState,
                        amt: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="2000"
                    required
                  />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 font-bold text-gray-800 p-2 rounded-lg"
              >
                Make payment.
              </button>
            </form>
          </div>
        </div>
  );
}

export default FeeForm;
