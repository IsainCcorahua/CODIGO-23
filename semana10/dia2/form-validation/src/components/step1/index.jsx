import { Stepper } from 'react-form-stepper';
const Step1 = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid }
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("data", data);

        nextStep();
      };
    
      console.log("errors, errors");
  return (
    <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="input-name" className="form-label">
                    Nombres:
                  </label>
                  <input
                    type="text"
                    id="input-name"
                    className={`form-control ${}`}
                    {...register("firstName", { required: true, minLength: 3 })}
                  />
                  {errors.firstName && errors.firstName.type === "required" && (
                    <small className="text-danger">
                      El nombre es obligatorio
                    </small>
                  )}
                  {errors.firstName && errors.firstName.type === "required" && (
                    <small className="text-danger">
                      El campo nombre debe de tener una extensión mínima de 3
                      caracteres
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="input-name" className="form-label">
                    Apellidos:
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    id="input-last-name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="input-name" className="form-label">
                    Documento de identificación:
                  </label>
                  <select
                    name=""
                    id="select-documento"
                    className="form-control"
                    {...register("selectDocumento")}
                  >
                    <option value="dni">DNI</option>
                    <option value="p">Pasaporte</option>
                    <option value="ce">Carné de extranjería</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!isValid}>
                  Registrar
                </button>
              </form>
            </div>
          </div>
  )
}

export default Step1