import { BagIcon, Check, LastName, Mail, Phone, User } from "./Icons";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Form({ clearCart, newOrders, orderId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const notifyPurchaseOreder= () => {
    toast.success(`Successful purchase, your Order is: " ${orderId} "`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      
      }
    


  const handleNotification=() => {
    if (orderId != null) {notifyPurchaseOreder()}
  }

  const onSubmit = handleSubmit((data) => {
    newOrders(data.name, data.lastName, data.phone, data.mail);

    // para limpiartodo    
    reset();
    clearCart()
  });

 

  const clearForm = () => {
    reset();
  };

  return (
    <>
      <section className=" sm:w-80">
        <ToastContainer/>
        <h2 className="text-back text-xl sm:my-2 font-bold text-start">Form: </h2>
        <div className="items-center flex justify-center">
          <form onSubmit={onSubmit} className=" w-full flex flex-col gap-2">
            {/* //#region Inicio name input  */}
            <label
              
              className="input input-primary flex items-center gap-2"
            >
              <input
                type="text"
                className={`grow text-white `}
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name required",
                  },
                  minLength: {
                    value: 2,
                    message: "Name characters required",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name must be at least 20 characters",
                  },
                })}
              />
              <User />
            </label>
            {errors.name && (
              <span className="-mt-1 text-sm text-start text-red-500">
                {errors.name.message}
              </span>
            )}
            {/* Fin name input */}

            {/* //#region Last name input  */}

            <label
              
              className="input input-primary flex items-center gap-2"
            >
              <input
                type="text"
                className="grow text-white"
                placeholder="Last Name"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name required",
                  },
                  minLength: {
                    value: 2,
                    message: "Last name characters required",
                  },
                  maxLength: {
                    value: 20,
                    message: "Last name must be at least 20 characters",
                  },
                })}
              />
              <LastName />
            </label>
            {errors.lastName && (
              <span className="-mt-1 text-sm text-start text-red-500">
                {errors.lastName.message}
              </span>
            )}

            {/* Fin Last name input */}

            {/* Inicio Phone input */}

            <label
             
              className="input input-primary flex items-center gap-2"
            >
              <input
                type="tel"
                className="grow text-white"
                placeholder="Phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone required",
                  },

                  minLength: {
                    value: 5,
                    message: "Phone required",
                  },
                  maxLength: {
                    value: 15,
                    message: "Invalid number of characters",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numeric characters",
                  },
                })}
              />
              <Phone />
            </label>
            {errors.phone && (
              <span className="-mt-1 text-sm text-start text-red-500">
                {errors.phone.message}
              </span>
            )}
            {/* Fin Phone input */}

            {/* Inicio mail input */}

            <label
              
              className="input input-primary flex items-center gap-2"
            >
              <input
                type="email"
                className="grow text-white"
                placeholder="Email"
                {...register("mail", {
                  required: {
                    value: true,
                    message: "Email required",
                  },

                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email",
                  },
                })}
              />
              <Mail />
            </label>
            {errors.mail && (
              <span className="-mt-1 text-sm text-start text-red-500">
                {errors.mail.message}
              </span>
            )}

            {/* Fin mail input */}

            {/* Inicio Confirm mail input */}

            <label
              
              className="input input-primary flex items-center gap-2"
            >
              <input
                type="email"
                className="grow text-white"
                placeholder="Confirm email"
                {...register("mailConfirm", {
                  required: {
                    value: true,
                    message: "Email required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email",
                  },
                  validate: (value) =>
                    value === watch("mail") || "Emails don't match",
                })}
              />
              <Check />
            </label>
            {errors.mailConfirm && (
              <span className="-mt-1 text-sm text-start text-red-500">
                {errors.mailConfirm.message}
              </span>
            )}
            {/* Fin Confirm mail input */}

            {/* Inicio btn-submit input */}

            <button
            onClick={handleNotification}
              type="submit"
              className="btn btn-sm btn-block text-slate-800  text-base bg-amber-200 hover:bg-yellow-400"
            >
              Purchase <BagIcon />
            </button>

            <button
              onClick={clearForm}
              className="btn btn-sm btn-block btn-outline text-slate-800  text-base "
            >
              Reset
            </button>

            {/* Fin btn-submit input */}
          </form>
        </div>
      </section>
    </>
  );
}
