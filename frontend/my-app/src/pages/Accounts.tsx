import { accounts } from "../data/accounts";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Accounts() {
  const [showModal, setShowModal] = useState(false);
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors }
} = useForm();

  return (
    <div>

     {showModal && (
  <div>
    <h2>Link Account</h2>

    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
        setShowModal(false);
      })}
    >
      <input placeholder="Account Name" {...register("name")} />
      <input placeholder="Institution" {...register("institution")} />

      <select {...register("type")}>
        <option value="checking">Checking</option>
        <option value="savings">Savings</option>
        <option value="credit">Credit</option>
      </select>

      <input type="number" {...register("balance")} />

      <button type="button" onClick={() => setShowModal(false)}>
        Cancel
      </button>

      <button type="submit">
        Save
      </button>
    </form>
  </div>
)}

      {/* CONTENT */}
      <div>

        {accounts.map((acc) => (
          <div key={acc.id} className="flex justify-between items-center">

            <div>
              <p>{acc.name}</p>
              <p>{acc.institution}</p>
            </div>

            <div>
              <span>{acc.type}</span>
            </div>

            <div>
              <p>{acc.balance}</p>
            </div>

            <div className="flex">
              <button>Sync</button>
              <button>Delete</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}